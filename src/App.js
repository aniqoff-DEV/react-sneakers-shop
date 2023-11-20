import Card from './components/Card';
import Drawer from './components/Drawer';

const arr = [
  {title: 'Женские кроссовки Nike Blazer Mid Suede', price: 11999, imageUrl: '/img/sneakers/2.jpg'},
  {title: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg'},
  {title: 'Мужские кроссовки Puma Blazer Mid Suede', price: 15999, imageUrl: '/img/sneakers/3.jpg'}
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg"/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/bookmarks.svg"/>
          </li>
          <li>
            <img width={18} height={18} src="/img/account.svg"/>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        
        <div className="d-flex">
          {
            arr.map((obj) => (
              <Card title={obj.title}
               price={obj.price} 
               imageUrl={obj.imageUrl}
               />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
