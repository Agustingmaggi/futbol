import AxiosClient from "./AxiosClient";

export default class AuthService {
    constructor() {
        this.client = new AxiosClient()
    }

    registerUser = (formData) => {
        const requestInfo = {
            url: `http://localhost:3000/api/sessions/register`,
            body: formData,
            headers: {
                'Content-Type': 'application/json'
            },
        }
        console.log(formData)
        return this.client.makePostRequest(requestInfo)
    }
}