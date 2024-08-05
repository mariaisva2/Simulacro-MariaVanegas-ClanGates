import { LoginModel } from "../Model/LoginModel.ts";

export class postcontroller {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getCities(endPoint: string): Promise<LoginModel[]> {
        const response = await fetch(`${this.url}${endPoint}`);
        const data = await response.json();
        console.log(response.status);

        return data
    }

    async postCities(endPoint: string, dataCity: LoginModel) {
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(dataCity)
        });

        console.log(response.status);

        const data = response.json();
        if (response.status != 201) {
            throw new Error("No se puede publicar el Post");
        }

        return data

    }
}