import Cookies from "js-cookie"
export const isLogin = () => {
    const data = Cookies.get('token');
    if (data) {
        return true
    } else {
        return false
    }
}