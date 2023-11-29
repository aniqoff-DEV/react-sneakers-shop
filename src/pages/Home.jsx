import Card from '../components/Card';

function Home({products,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart}){
    return(
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кросовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
          </div>
        </div>
        
        <div className="d-flex flex-wrap">
          {
            products
            .filter(item => item.title.toLowerCase()
            .includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card 
               key={index}
               onFavorite={(item) => onAddToFavorite(item)}
               onPlus ={(item) => onAddToCart(item)}
               added={cartItems.some(obj => obj.id === item.id)}
               {...item}
               />
            ))
          }
        </div>

      </div>
    )
}

export default Home;