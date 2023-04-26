import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {EventsReducer} from "./reducers/events-reducer";
import {FilterReducer} from "./reducers/filter-reducer";
import {CompetitionsReducer} from "./reducers/competitions-reducer";
import {ProjectsReducer} from "./reducers/projects-reducer";
import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService";
import axios from "axios";
import {BASE_URL} from "../store/api";
import {CrowdfundingReducer} from "./reducers/crowdfunding-reducer";

let reducers = combineReducers({
  events: EventsReducer,
  competitions: CompetitionsReducer,
  projects: ProjectsReducer,
  filter: FilterReducer,
  crowdfunding: CrowdfundingReducer
})

export let store = createStore(reducers, compose(applyMiddleware(thunk)))



export default class Store {
  user = {} ;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(username, password) {
    try {
      const response: any = await AuthService.login(username, password);
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
      const response: any = await AuthService.registration(username, password);
      localStorage.setItem('token', response.data['auth_token']);
      this.setAuth(true)
      this.setUser(response.data.user)
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
