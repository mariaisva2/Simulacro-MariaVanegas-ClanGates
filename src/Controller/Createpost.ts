import { Ipost } from "../Model/Ipost.ts";
import { LoginModel } from "./LoginController.ts";


const form = document.querySelector("form") as HTMLFormElement;
const CreationdateR = document.querySelector("#new-Post") as HTMLInputElement;
const estimatedPublicationDateR = document.querySelector("#new-postcreate") as HTMLInputElement;
const platformR = document.querySelector("#new-Plat") as HTMLInputElement;
const  approvalPercentageR = document.querySelector("#") as HTMLInputElement;


 const PostArray: LoginModel[] = JSON.parse(localStorage.getItem("PostArray") || "[]"); // con local storage

const url = 'http://localhost:3000/';
 const Controllerlogin = new Controller(url);

form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const newPost: Ipost = {
        CreationdateR,
        estimatedPublicationDateR,
        platform: platformR.value,
        approvalPercentageR
    
    }

    try {
        const PostAdded = await Controllerlogin.postCities("CreatePost", newPost);
        alert("Se agrego un Post");
        form.reset();
        window.location.href = "../View/home.html";
        console.log(PostAdded);

    } catch (e) {
        console.log(e);
    }

    // Con local storage
    PostArray.push()
    localStorage.setItem("Postarray", JSON.stringify(PostArray));
    form.reset();
    alert("Se agrego un nuevo post");
})