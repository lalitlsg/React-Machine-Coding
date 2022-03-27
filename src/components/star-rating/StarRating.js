import React, { useState } from 'react';
import SingleStar from './SingleStar';
import style from './star-rating.module.css';

const StarRating = () => {
  const stars = new Array(5).fill(0);
  const [currIndex, setCurrIndex] = useState(-1);
  const [ratings, setRatings] = useState(null);

  const mouseOverHandler = (index) => {
    if (!ratings) setCurrIndex(index);
  };
  const onStarClick = () => {
    setRatings(currIndex + 1);
  };

  return (
    <div className={style.starContainer}>
      <div>
        {stars.map((s, i) => (
          <SingleStar index={i} mouseOverHandler={mouseOverHandler} onStarClick={onStarClick} fill={i <= currIndex} />
        ))}
      </div>
      {ratings && <div className={style.ratings}>{ratings}</div>}
    </div>
  );
};

export default StarRating;
