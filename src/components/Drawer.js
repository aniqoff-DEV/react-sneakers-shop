
function Drawer(){
    return(
        <div style={{display: 'none'}} className="overlay">
        
        <div className="drawer">
          <h2 className="mb-20 d-flex justify-between">
            Корзина <img className="remove-btn cu-p" src="/img/btn-remove.svg" alt="Close"/></h2>

          <div className="items">
            <div className="cart-item d-flex align-center mb-20">
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/> */}
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cart-item-img"/>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>

            <div className="cart-item d-flex align-center mb-20">
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/> */}
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cart-item-img"/>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>

            <div className="cart-item d-flex align-center mb-20">
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/> */}
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cart-item-img"/>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>

            <div className="cart-item d-flex align-center mb-20">
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/> */}
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cart-item-img"/>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>

            <div className="cart-item d-flex align-center mb-20">
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/> */}
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cart-item-img"/>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>

            <div className="cart-item d-flex align-center mb-20">
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/> */}
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cart-item-img"/>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>

            <div className="cart-item d-flex align-center mb-20">
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/> */}
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cart-item-img"/>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>

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