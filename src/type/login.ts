/**
 * 表单数据接口
 */
export interface LoginDataInt{
    username: string
    password: string
}

export class LoginData{
    ruleForm: LoginDataInt = {
        username: "admin",
        password: "12345"
    }
}
