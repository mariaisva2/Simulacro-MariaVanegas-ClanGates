import { Ipost } from "../Model/Ipost";
import '../scss/Card.scss'

export const Card = (props: Ipost): HTMLElement => {
    let { Creationdate } = props;
    const cardContainer = document.createElement("article") as HTMLElement;
    cardContainer.className = "card-container";

    const infoContainer = document.createElement("div") as HTMLElement;
    infoContainer.className = "cardInfo-container";

    const cardTitle = document.createElement("h4") as HTMLHeadElement;
    cardTitle.className = "card-title"
    const cardCountry = document.createElement("p") as HTMLParagraphElement;

    const crossContainer = document.createElement("span");
    crossContainer.className = "cross-container";
    crossContainer.innerHTML = `<i product-id = ${Creationdate} class="bi bi-x-circle-fill"></i>`;

    infoContainer.append(cardTitle, cardCountry);

    return cardContainer;
}