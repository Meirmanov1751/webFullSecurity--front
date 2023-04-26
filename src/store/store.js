import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService";
import axios from "axios";
import {BASE_URL} from "./api";
import Executor from "./reducers/executor";
import Customer from "./reducers/customer";
import Order from "./reducers/order";
import Product from "./reducers/product";
import Posts from "./reducers/posts";

let reducers = combineReducers({
    executors: Executor, customers: Customer, orders: Order, products: Product, posts: Posts,
})

export let store = createStore(reducers, compose(applyMiddleware(thunk)))


export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

  async login(username, password) {
    try {
      const response = await AuthService.login(username, password);
      console.log(response.data['auth_token'])
      localStorage.setItem('token', response.data['auth_token']);
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }

  async registration(username,password) {
    try {
      const response = await AuthService.registration(username, password);
      localStorage.setItem('token', response.data['auth_token']);
      this.setAuth(true)
      this.setUser(response)
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }

  async logout(username, password) {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false)
      this.setUser({})
    } catch (e) {
      console.log(e.response?.data?.message)
    }
  }

    async checkAuth() {
        try {

            const response = await axios.get(`${BASE_URL}auth/jwt/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data['auth_token']);
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response.data.message)
        }

    }

}
