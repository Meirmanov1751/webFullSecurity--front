import React, {useContext} from 'react';
import logo from './img/logo.png'
import arrowDown from './img/arrow down.png'
import Header from "./header";
import {Context} from "../../../index";

const HeaderContainer = () => {
    let {Store1} = useContext(Context)

    return (
        <Header logo={logo} arrowD={arrowDown} isAuth={Store1}/>
    );
};

export default HeaderContainer;
