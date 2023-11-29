import React from 'react';
import styles from './Card.module.scss';

function Card({id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false}){
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () =>{
      onPlus({id, title, imageUrl, price});
      setIsAdded(!isAdded);
    };

    const onClickFavorite = () =>{
      onFavorite({id, title, imageUrl, price});
      setIsFavorite(!isFavorite);
    };

    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
              <img src={isFavorite ? "/img/licked.svg" : "/img/unlicked.svg"} onClick={onClickFavorite} alt="unlicked"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{price} руб.</b>
              </div>
                <img className={styles.plus} onClick={onClickPlus} width={32} height={32} src={isAdded ? "/img/plus-checked.svg" : "/img/plus.svg"} alt="Add"/>
            </div>
          </div>
    );
}

export default Card;