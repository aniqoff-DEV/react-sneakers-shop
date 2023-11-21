import styles from './Drawer.module.scss';

function Drawer({ onClose , items = []}){
    return(
        <div className="overlay">
        
        <div className={styles.drawer}>
          <h2 className="mb-20 d-flex justify-between">
            Корзина 
            <img onClick={onClose} className="remove-btn cu-p" src="/img/btn-remove.svg" alt="Close"/></h2>

          <div className={styles.items}>
            {
              items.map((obj) => (
              <div className="cart-item d-flex align-center mb-20">
                <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cart-item-img"/>
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
              </div>
              ))
            }
          </div>
          

            <div className="cart-total-block">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 777 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>777 руб.</b>
                </li>
              </ul>
              <button>К оформлению <img src="/img/arrow.svg"/></button>
            </div>

        </div>
      </div>
    );
}

export default Drawer;