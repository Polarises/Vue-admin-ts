import service from "@/request/index";
import {LoginDataInt} from "@/type/login";
export function login(data:LoginDataInt){
    return service({
        url:'/login',
        method:'POST',
        data
    })
}
