import instance from "../store/api";

export default class AuthService {
  static async login(username, password) {
    return instance.post('/auth/token/login/', {username, password})
  }

  static async registration(username, password) {
    return instance.post('/auth/users/', {username, password})
  }

  static async logout(){
    return instance.post('/auth/token/logout/')
  }
}
