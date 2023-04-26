import React, {useContext, useEffect} from 'react';
import './header.css'
import {Link} from "react-router-dom";
import {Context} from "../../../index";


const LoginHeader = (props) => {
    debugger
    if (props.store.isAuth) {
        return (
            <li className="nav-item">
                <a className="nav-link" onClick={props.store.logout}>
                    Выход
                </a>
            </li>
        )
    } else {
        return (
            <li className="nav-item">
                <Link className="nav-link" to="login">
                    Вход
                </Link>
            </li>
        )
    }
}

const Header = (props) => {
    let {Store1} = useContext(Context)

    useEffect(() => {
        console.log(Store1.user)
    }, [Store1])

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light">

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="container">
                        <div className="nav-cont-ul">


                            <div className="nav-cont-ul-logo">
                                <div>
                                    <Link className="navbar-brand" to="/">
                                        <svg className="logo-img" alt="Логотип" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 48 48"
                                             width="48" height="48">
                                            <path fill="#333"
                                                  d="M23.4 4.4c-2.2-.4-4.4-.4-6.6 0-1.1.2-2.1.5-3 1.1-1.1.8-1.8 2.2-2.2 3.8-.2.8-.3 1.6-.3 2.5v3.8c0 .9.1 1.7.3 2.5.4 1.6 1.1 3 2.2 3.8.9.5 1.9.8 3 1.1 2.2.4 4.4.4 6.6 0 1.1-.2 2.1-.5 3-1.1-.4-1.6-1.1-3-2.2-3.8-.9-.5-1.9-.8-3-1.1zM25.9 11.1c.4 1.1.6 2.3.6 3.7v3.8c0 1.4-.2 2.7-.6 3.8-.4 1.1-1 2-1.8 2.7-.8.7-1.7 1.3-2.7 1.7-1.1.4-2.3.6-3.7.6-1.4 0-2.7-.2-3.7-.6-1-.4-1.9-1-2.7-1.7-.7-.8-1.3-1.7-1.8-2.7-.4-1.1-.6-2.3-.6-3.7 0-1.4.2-2.7.6-3.8.4-1.1 1-2 1.8-2.8.8-.7 1.7-1.3 2.8-1.8 1.1-.4 2.3-.6 3.7-.6 1.4 0 2.7.2 3.7.6 1 .4 1.9 1 2.7 1.8.7.8 1.3 1.7 1.7 2.8zM38.7 18c-.4-.1-.7-.2-1.1-.4.1.4.1.7.1 1.1v2c0 .4-.1.7-.1 1.1.4-.1.7-.2 1.1-.4.9-.4 1.6-1 2.3-1.8.7-.8 1.2-1.7 1.6-2.6.3-.9.5-1.9.6-3-.1-.4-.3-.7-.6-1zm-.7 6.8c-.6-.7-1.2-1.3-1.9-1.8-.7-.5-1.5-.9-2.3-1.2-.8-.2-1.7-.3.7-.4-2-.6-3.1-.6-1.1 0-2.1.2-3.1.6-.7.2-1.4.5-2 1.1-.6.6-1.1 1.2-1.6 1.9-.4.7-.7 1.5-1 2.3.1-.4.3-.7.5-1.1 1.1-1.7 2.5-2.7 3.8-3.5 1.3-.8 2.7-1.2 4.1-1.5 1.5-.3 3-.3 4.5 0 1.5.2 2.9.7 4.1 1.5.8 1.3 1.5 2.8 1.8 4.2.2 1.5.2 3 0 4.5-.2 1.4-.5 2.8-1.1 4.1-.6 1.4-1.4 2.7-2.4 3.8-1.1 1.1-2.3 2-3.8 2.6-1.4.6-2.9.9-4.4 1-.6.1-1.1.1-1.7.1h-.2c-.6-.1-1.1-.1-1.7-.1-1.4-.1-2.9-.4-4.4-1-.8-.3-1.6-.7-2.4-1.2-.8-.6-1.6-1.3-2.3-2-1.1-1.6-2-2.8-2.7-1.1-.7-1.9-1.3-2.6-1.9-.7-.6-1.3-1.3-1.8-2.1-.4-.8-.7-1.6-.9-2.4-.1-.6-.2-1.1-.3-1.7 0-.6 0-1.1.1-1.7 0-.6.1-1.1.3-1.6.2-.5.5-1 1-1.5.4-.4.8-.7 1.3-1 1.7-.3 3-.4 4.4-.4.4 0 .8 0 1.2.1.4.1.7.1 1.1.2-.5.5-.9 1.1-1.3 1.7-.3.6-.5 1.2-.7 1.9.2-.5.5-.9.8-1.3.5-.5 1-1 1.6-1.4.6-.4 1.2-.7 1.9-1-.5.6-.8 1.3-1 2-.2.7-.3 1.4-.3 2.2 0 .8.1 1.5.3 2.2.2.7.6 1.4 1 2.1.4.6 1.6 1.7 1.6 2.7 2.7 3.7 1.2 1 2.5 1.9 4.1 2.7 1.4.7 2.9 1.3 4.4 1.9 1.6.6 3.1 1 4.6 1.3.8.2 1.7.3 2.5.3.8 0 1.6-.1 2.3-.3 1.3-.3 2.5-.9 3.6-1.6.8-.6 1.6-1.4 2.3-2.3.6-.6 1.1-1.3 1.5-2 1.5-2.8 1.5-5.5.5-7.9zm-8.3 3.3c-1.2 1.1-2.5 1.9-3.9 2.5-.8.3-1.6.5-2.5.6-.8.1-1.5.1-2.3 0-.8-.1-1.6-.3-2.3-.6-.8-.3-1.6-.8-2.3-1.4-1.1-1.3-1.9-3.3-.6-4.6 1.2-1.2 2.6-1.8 4-2.4 1.4-.6 2.9-1.1 4.4-1.4.7-.1 1.4-.2 2.1-.2.7 0 1.3 0 2 .2 1.2.2 2.3.6 3.3 1.3-.1.1-.1.1-.2.2z"/>
                                        </svg>
                                    </Link>
                                </div>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            Главная
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="executors">
                                            Исполнители
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="customers">
                                            Заказчики
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="orders">
                                            Заказы
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="products">
                                            Продукты
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="orders_create">
                                            Создать заказ
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="products_create">
                                            Добавить продукт
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="posts">
                                            Посты
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <ul className="navbar-nav ml-auto">
                                <LoginHeader store={Store1}/>
                                {/*<li className="nav-item">*/}
                                {/*    <Link className="nav-link" to="login">*/}
                                {/*        Вход*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                <li className="nav-item">
                                    <Link className="nav-link" to="singin">
                                        Регистрация
                                    </Link>
                                </li>
                            </ul>
                            {/*<p className={"nav-link"}>{Store1.user.emall}</p>*/}

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

