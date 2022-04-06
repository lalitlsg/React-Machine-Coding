import React from 'react';
import style from './star-rating.module.css';

const SingleStar = ({ mouseOverHandler, onStarClick, index, fill }) => {
  return (
    <svg
      width="41"
      height="38"
      viewBox="0 0 41 38"
      className={style.singleStar}
      onMouseOver={() => mouseOverHandler(index)}
      onMouseOut={() => mouseOverHandler(-1)}
      onClick={onStarClick}
    >
      <path
        d="M20.5 1.58404L24.8526 14.6685L24.9664 15.0106H25.3271H39.3792L28.021 23.071L27.719 23.2852L27.8359 23.6365L32.1806 36.6973L20.7894 28.6135L20.5 28.4082L20.2106 28.6135L8.81937 36.6973L13.1641 23.6365L13.281 23.2852L12.979 23.071L1.62082 15.0106H15.6729H16.0336L16.1474 14.6685L20.5 1.58404Z"
        fill={fill ? '#ffff1a' : 'none'}
      />
    </svg>
  );
};

export default SingleStar;
