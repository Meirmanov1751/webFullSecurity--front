import React from 'react';
import './header.css'
import {Link} from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <nav className="menu">
            <Link to={'/'} className="logo__link"><img src={props.logo} alt="logo" className="logo"/></Link>
            <ul>
              <li className="menu__items">Ученики<img src={props.arrowD}/>
                <ul className="menu__items_ul">
                  <li><Link to={'competition'}>Состязания</Link></li>
                  <li><Link to={'event'}>Мероприятия</Link></li>
                  <li><Link to={'project'}>Проекты</Link></li>
                </ul>
              </li>
              <li className="menu__items"><Link to={'crowdfunding'}>Краудфандинг</Link></li>
              <li className="menu__items"><a href="#">ФОРУМ<span></span></a></li>
              <li className="menu__items">О НАС<img src={props.arrowD}/>
                <ul>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Telegram</a></li>
                  <li><a href="#">Facebook</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

