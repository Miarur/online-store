import React from 'react';
import cl from './CardItem.module.css';

const CardItem = (props) => {
  console.log(props)
  return (
    <div className={cl.card}>
      <h2 className={cl.card__title }>{props.card.name}</h2>
      <div className={cl.card__image}>
        <img className={cl.image__item} src={props.card.img} alt="iphone" />
      </div>
      <div className={cl.card__content}>
        <p className={cl.content__item}>В наличии: {props.card.quantity}</p>
        <p className={cl.content__item}>{props.card.year}</p>
        <p className={cl.content__item}>{props.card.producer}</p>
        <p className={cl.content__item}>{props.card.color}</p>
        <p className={cl.content__item}>Количество камер - {props.card.quantityCamers}</p>
        <p className={cl.content__item}>Популярный - {props.card.popularity}</p>
      </div>
    </div>
  );
}

export default CardItem;
