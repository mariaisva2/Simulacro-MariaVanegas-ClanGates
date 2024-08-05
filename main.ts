import { LoginControler } from "./src/Controller/LoginController.ts";
const url = "http://localhost:3000";

const loginForm = document.querySelector("#loginForm") as HTMLFormElement;
const emailUser = document.querySelector("#emailUser") as HTMLInputElement;
const passwordUser = document.querySelector("#passwordUser") as HTMLInputElement;


loginForm.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const user = {
        email: emailUser.value,
        password: passwordUser.value,
    }

    try {
        const loginController = new LoginControler(url);
        const responseOfLogin = await loginController.login(user, "login")

        sessionStorage.setItem("token", responseOfLogin.token);

        const getToken = sessionStorage.getItem("token");
        if (getToken === responseOfLogin.token) {
            window.location.href = "./src/View/home.html"
        }
    } catch (e) {
        console.log(e);

    }

})