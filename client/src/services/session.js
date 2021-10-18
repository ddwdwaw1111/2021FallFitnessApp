import router from "../router";
import { Login } from "./user";

const session = {
    user: null,
    messages: [],
    toRoute: '/discover',
    Login(handle, password) {

        const response = Login(handle, password);

        this.user = response.user;

        router.push(this.toRoute);

    }
};

export function Logout() {
    session.user == null
}
export default session;

//export function