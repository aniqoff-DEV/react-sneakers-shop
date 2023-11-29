import { Link} from 'react-router-dom';

function Header(props){
    return(
    <header className="d-flex justify-between align-center p-40">
          <Link to="/">
          <div className="d-flex align-center">
              <img width={40} height={40} src="/img/logo.png"/>
              <div>
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-5">Магазин лучших кроссовок</p>
              </div>
          </div>
          </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={24} height={24} src="/img/cart.svg"/>
            <span>1205 руб.</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="/favorites">
              <img width={24} height={24} src="/img/bookmarks.svg"/>
            </Link>
          </li>
          <li className="mr-20">
              <img width={24} height={24} src="/img/account.svg"/>
          </li>
        </ul>
      </header>
    );
}

export default Header;