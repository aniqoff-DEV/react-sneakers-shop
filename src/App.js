import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const [products, setProducts] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://655cfe4a25b76d9884fe414f.mockapi.io/products')
    .then(res => {
      return res.json();
    }).then(json => {
      setProducts(json);
    });
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [... prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        
        <div className="d-flex flex-wrap">
          {
            products.map((item) => (
              <Card title={item.title}
               price={item.price} 
               imageUrl={item.imageUrl}
               onPlus ={(obj) => onAddToCart(item)}
               />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
