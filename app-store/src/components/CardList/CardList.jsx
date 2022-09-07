import React from 'react';
import CardItem from '../CardItem/CardItem';
import cl from'./CardList.module.css';

const CardList = ({cards}) => {
  return (
    <div className={cl.list__wrapper}>
      {cards.map((card) =>
        <CardItem card={card} key={card.name}></CardItem>
      )}
    </div>
  );
}

export default CardList;
