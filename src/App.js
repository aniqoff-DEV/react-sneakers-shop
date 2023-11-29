import React from 'react';
import { Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [products, setProducts] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://655cfe4a25b76d9884fe414f.mockapi.io/products')
    .then((res) => {
      setProducts(res.data);
    });

    axios.get('https://655cfe4a25b76d9884fe414f.mockapi.io/Cart')
    .then((res) => {
      setCartItems(res.data);
    });

    axios.get('https://655e4e889f1e1093c59ae0ff.mockapi.io/favorites')
    .then((res) => {
      setFavorites(res.data);
    });
  }, [])

  const onAddToCart = (obj) => {
    try{
      if(cartItems.find(item => Number(item.id) === Number(obj.id))){
        axios.delete(`https://655cfe4a25b76d9884fe414f.mockapi.io/Cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      }else{
        axios.post('https://655cfe4a25b76d9884fe414f.mockapi.io/Cart', obj);
        setCartItems(prev => [... prev, obj]);
      }
    }catch(error){
      
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://655cfe4a25b76d9884fe414f.mockapi.io/Cart/${id}`);
    setCartItems(prev => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try{
      if(favorites.find(favObj => favObj.id === obj.id)){
        setFavorites(prev => prev.filter(item => item.id !== obj.id));
        axios.delete(`https://655cfe4a25b76d9884fe414f.mockapi.io/favorites/${obj.id}`);
      }else{
        const { data } = await axios.post('https://655e4e889f1e1093c59ae0ff.mockapi.io/favorites', obj);
        setFavorites(prev => [... prev, data.data]);
      }
    }catch(error){
      alert('Не удалось добавить в избранное или удалить товар');
    }
    
  };

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer 
      items={cartItems} 
      onClose={() => setCartOpened(false)}
      onRemove={onRemoveItem}
      />}
      <Header onClickCart={() => setCartOpened(true)}/>

      <Routes>
        <Route path="/" element={
          <Home
                products={products}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
              />} exact>
        </Route>

        <Route path="/favorites" element={
          <Favorites 
            products={favorites}
            onAddToFavorite = {onAddToFavorite}
          />}>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
