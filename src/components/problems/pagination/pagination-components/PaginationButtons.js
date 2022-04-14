import React from 'react';
import style from '../style.module.css';

const PaginationButtons = ({ paginationButtons, onPaginationButtonClick }) => {
  return (
    <section className={style.paginationButtonsContainer}>
      {paginationButtons.map((b) => (
        <div key={b.key} className={b.selected ? style.selectedButton : ''} onClick={() => onPaginationButtonClick(b)}>
          {b.value}
        </div>
      ))}
    </section>
  );
};

export default PaginationButtons;
