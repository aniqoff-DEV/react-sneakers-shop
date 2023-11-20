import styles from './Card.module.scss';

function Card(props){
  const onClickButton = () =>{
    alert(1)
  }

    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
              <img src="/img/unlicked.svg" alt="unlicked"/>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{props.price} руб.</b>
              </div>
              <button className="button" onClick={onClickButton}>
                <img width={32} height={32} src="/img/plus.svg" alt="Add"/>
              </button>
            </div>
          </div>
    );
}

export default Card;