
function Card(){
    return(
        <div className="card">
            <div className="favorite">
              <img src="/img/unlicked.svg" alt="unlicked"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/img/plus.svg" alt="Add"/>
              </button>
            </div>
          </div>
    );
}

export default Card;