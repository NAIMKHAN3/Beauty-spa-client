import { removeUser, userAdded } from "@/redux/feature/user/userSlice";
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode";
export const getInfoToLocal = (info: string) => {
    if (typeof window === "undefined") {
        return null
    }

    const data = Cookies.get('token');
    const decoded = data ? jwtDecode(data) : null;


    const dataInfo = data ? data : null
    return dataInfo
}