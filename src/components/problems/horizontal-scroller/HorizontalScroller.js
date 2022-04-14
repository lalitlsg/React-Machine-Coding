import React from 'react';
import style from './style.module.css';
import { MACHINE_CODING_HEADERS } from '../../../constant/constant';
import MessageCard from './horizontal-scroller-components/MessageCard';
import Controls from './horizontal-scroller-components/Controls';
import { cards } from './data';
import { useRef } from 'react';

const HorizontalScroller = () => {
  const ref = useRef();

  const onLeftClick = () => {
    ref.current.scrollLeft -= 200;
  };
  const onRightClick = () => {
    ref.current.scrollLeft += 200;
  };

  return (
    <div>
      <header className={style.header}>{MACHINE_CODING_HEADERS.HORIZONTAL_SCROLLER_HEADER}</header>
      <section className={style.scrollContainer}>
        <Controls onLeftClick={onLeftClick} onRightClick={onRightClick} />
        <div className={style.scrollInnerContainer} ref={ref}>
          {cards.map((card) => (
            <MessageCard key={card.id} cardContent={card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HorizontalScroller;
