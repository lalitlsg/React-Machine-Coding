import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const makeNetworkRequest = async (extraOption = {}, updateState = true, urlQueryParams = '') => {
    updateState && setLoading(true);
    try {
      const result = await fetch(url + urlQueryParams, { ...options, ...extraOption });
      const data = await result.json();
      updateState && setResponse(data);
      updateState && setLoading(false);
      return data;
    } catch (error) {
      updateState && setError(error.message);
      updateState && setLoading(false);
    }
  };

  const state = {
    loading,
    error,
    response,
    setResponse,
  };

  return [state, makeNetworkRequest];
};
