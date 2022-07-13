import React from 'react';
import cl from './CardItem.module.css';

const CardItem = () => {
  return (
    <div className={cl.card}>
      <h2 className={cl.card__title }>Iphone 13</h2>
      <div className={cl.card__image}>
        <img className={cl.image__item} src="https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg" alt="iphone" />
      </div>
      <div className={cl.card__content}>
        <p className={cl.content__item}>В наличии: 12</p>
        <p className={cl.content__item}>2018</p>
        <p className={cl.content__item}>Apple</p>
        <p className={cl.content__item}>black</p>
        <p className={cl.content__item}>Количество камер - 3</p>
        <p className={cl.content__item}>Популярный</p>
      </div>
    </div>
  );
}

export default CardItem;
