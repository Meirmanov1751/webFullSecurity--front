import instance from "../store/api";

export default class AuthService {
    static async login(email, password) {
        return instance.post('/auth/token/login/', {email: email, password: password})
    }

    static async registration(email, password) {
        return instance.post('/auth/users/', {email: email, password: password})
    }

    static async logout() {
        return instance.post('/auth/token/logout/')
    }
}

