import React from 'react';
import { MACHINE_CODING_HEADERS } from '../../../constant/constant';
import { nonConflictingMettings, conflictingMeetings } from './data';
import style from './day-calender.module.css';
import SingleMeet from './SingleMeet';

const hours = [];

for (let i = 0; i < 24; i++) {
  hours.push(
    <div className={style.hour} key={i}>
      <div>{i <= 12 ? `${i}:00 AM` : `${i - 12}:00 PM`}</div>
      <div className={style.horizontalBar}></div>
    </div>
  );
}

const getFloatValue = (time) => {
  const [hour, minute] = time.split(':');
  return Number(`${hour}.${minute}`);
};

const processConflictingMeetings = (meetings) => {
  const processedMeets = meetings.map((m) => {
    const updatedObj = { ...m };
    updatedObj.floatStartTime = getFloatValue(m.startTime);
    updatedObj.floatEndTime = getFloatValue(m.endTime);
    updatedObj.style = {};
    return updatedObj;
  });

  processedMeets.sort((a, b) => a.floatStartTime - b.floatStartTime);

  let positionLeftPercantage = 0;

  for (let i = 0; i < processedMeets.length - 1; i++) {
    const first = processedMeets[i];
    const second = processedMeets[i + 1];

    if (second.floatStartTime < first.floatEndTime) {
      positionLeftPercantage += 5;
      const moveAheadFromLeft = positionLeftPercantage;
      second.style = { left: `${moveAheadFromLeft}%`, width: 100 - moveAheadFromLeft + '%' };
    } else {
      positionLeftPercantage = 0;
    }
  }

  return processedMeets;
};

const processedMeets = processConflictingMeetings(conflictingMeetings);

const listOfMeetings = processedMeets.map((m, i) => {
  return <SingleMeet m={m} i={i} key={m.uid}/>;
});

const DayCalender = () => {
  return (
    <section className={style.mainSection}>
      <header className={style.header}>{MACHINE_CODING_HEADERS.DAY_CALENDER_HEADER}</header>
      <main className={style.main}>
        <section className={style.days}>
          {hours}
          <section className={style.meetings}>
            <div className={style.meetingContainer}>{listOfMeetings}</div>
          </section>
        </section>
      </main>
    </section>
  );
};

export default DayCalender;
