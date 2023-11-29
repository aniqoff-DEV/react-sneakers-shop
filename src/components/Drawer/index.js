import styles from './Drawer.module.scss';

function Drawer({ onClose , onRemove, items = []}){

    return(
        <div className="overlay">
        
        <div className={styles.drawer}>
          <h2 className="mb-20 d-flex justify-between">
            Корзина 
            <img onClick={onClose} className="remove-btn cu-p" src="/img/btn-remove.svg" alt="Close"/>
          </h2>
        
          {
            items.length > 0 ? (
          <div>
            <div className={styles.items}>
              {
                items.map((obj) => (
                <div key={obj.id} className="cart-item d-flex align-center mb-20">
                  <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cart-item-img"/>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img className="remove-btn" onClick={() => onRemove(obj.id)} src="/img/btn-remove.svg" alt="Remove"/>
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
          ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className='mb-20' width={120} height={120} src="/img/cart-empty.png" alt='Cart Empty'/>
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавте хотя бы одну пару кроссовок</p>
            <button onClick={onClose} className="button green-btn-cart" >
              <img src="/img/arrow.svg" alt='Arrow'/>
              Вернуться назад
            </button>
          </div> ) 
          }            
            
        </div>
      </div>
    );
}

export default Drawer;