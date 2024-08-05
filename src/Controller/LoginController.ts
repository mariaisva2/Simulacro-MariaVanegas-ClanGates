import { LoginModel, ResponseLogin } from "../Model/LoginModel";

 export class LoginControler {
    url:string;
    tokenLog: string | undefined;

    constructor (url:string){
        this.url = url;
    }

    async login(data: LoginModel, endPoint: string ): Promise<ResponseLogin>{
        const response = await fetch(`${this.url}${endPoint}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(data)

        });
        if (response.status != 200){
            throw new Error("No se puede iniciar sesion");
        }
        const responseLogin = await response.json();
        this.tokenLog = responseLogin.token;
        return responseLogin;
    }
 }




export type { LoginModel };

