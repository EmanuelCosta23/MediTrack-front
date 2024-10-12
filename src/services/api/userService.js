import axiosInstance from "../AxiosInstance";

export class UserService {
    constructor(http = axiosInstance) {
        this.http = http;
    }

    async login(loginRequest) {
        try {
            const response = await this.http.post('usuario/login', loginRequest);
            return response.data;
        } catch (error) {
            console.error("Login failed", error);
            throw error;
        }
    }

    async signup(signupRequest) {
        try {
            const response = await this.http.post('usuario/cadastro', signupRequest);
            return response.data;
        } catch (error) {
            console.log('Signup failed', error);
            throw error;
        }
    }
}