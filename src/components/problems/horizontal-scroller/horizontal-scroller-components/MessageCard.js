import React from 'react';
import style from '../style.module.css';

const MessageCard = ({ cardContent }) => {
  return (
    <div className={style.card}>
      <section className={style.description}>{cardContent.description}</section>
      <section className={style.username}> - {cardContent.user}</section>
    </div>
  );
};

export default MessageCard;
