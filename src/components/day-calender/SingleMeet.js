import React from 'react';
import style from './day-calender.module.css';

const HEIGHT_OF_ONE_HOUR = 70;
const HEIGHT_OF_ONE_MIN = HEIGHT_OF_ONE_HOUR / 60;
const TOP_START = HEIGHT_OF_ONE_HOUR / 2;

const getMinutes = (time) => {
  const [hour, minute] = time.split(':');
  return hour < 12 ? Number(hour) * 60 + Number(minute) : Number(hour) * 60 + Number(minute);
};

const getFullMinutes = (time) => {
  const [hour, minute] = time.split(':');
  return Number(hour) * 60 + Number(minute);
};

const calculateMinutes = (start, end) => getMinutes(end) - getMinutes(start);

const getTimeSuffix = (time) => {
  let [hour, minute] = time.split(':');
  hour = Number(hour);
  minute = Number(minute);
  if (hour < 12) {
    return `${hour}:${minute} am`;
  } else if (hour === 12) {
    return minute === 0 ? `${hour}:${minute} am` : `${hour}:${minute} pm`;
  } else {
    return `${hour - 12}:${minute} pm`;
  }
};

const SingleMeet = ({ m, i }) => {
  return (
    <div
      key={m.title + i}
      className={style.meeting}
      style={{
        backgroundColor: `${m.color}`,
        height: `${calculateMinutes(m.startTime, m.endTime) * HEIGHT_OF_ONE_MIN}px`,
        top: `${getFullMinutes(m.startTime) * HEIGHT_OF_ONE_MIN + TOP_START}px`,
        ...m.style,
      }}
    >
      <div className={style.title}>{m.title}</div>
      <div className={style.timing}>
        <span>
          {getTimeSuffix(m.startTime)} - {getTimeSuffix(m.endTime)}
        </span>
      </div>
    </div>
  );
};

export default SingleMeet;
