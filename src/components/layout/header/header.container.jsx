import React from 'react';
import {Link} from "react-router-dom";
import logo from './img/logo.png'
import arrowDown from './img/arrow down.png'
import {useSelector} from "react-redux";
import Header from "./header";

const HeaderContainer = () => {
  return (
      <Header logo={logo} arrowD={arrowDown}/>
  );
};

export default HeaderContainer;
