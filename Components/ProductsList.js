import { ApiService } from "../Services/ApiService";
import { Component } from "./Component";
import { Whiskey } from "../Interfaces/Whiskey";

export class ProductsList extends Component {

    constructor() {
        super();
        this.apiService = new ApiService('whiskey.json');
    }

    getItems() {
        return this.apiService.get().slice(0, 4);
    }

    render() {
        const container = this.createElement('div');
        this.addClass(container, 'container-fluid mt-5');
        const row = this.createElement('div');
        this.addClass(row, 'row justify-content-center');
        container.appendChild(row);

        this.getItems().forEach(item => {
            if (item) {
                const whiskey = new Whiskey(item);
                const card = this.createElement('div');
                const cardImage = this.createElement('img');
                cardImage.src = whiskey.image;
                card.appendChild(cardImage);
                const cardBody = this.createElement('div');
                card.appendChild(cardBody);
                const cardHeading = this.createElement('h5');
                cardBody.appendChild(cardHeading);
                cardHeading.innerText = whiskey.name;
                if (whiskey.description) {
                    const whiskeyDesc = this.createElement('p');
                    this.addClass(whiskeyDesc, 'card-text');
                    whiskeyDesc.innerText = whiskey.description;
                    cardBody.appendChild(whiskeyDesc);
                }
                const addToCartBtn = this.createElement('button');
                cardBody.appendChild(addToCartBtn);
                const wishListBtn = this.createElement('button');
                const heartIcon = this.createElement('i');

                this.addClass(card, 'card m-2 whiskey');
                this.addClass(cardImage, 'img-thumbnail img-fluid card-img-top');
                this.addClass(cardBody, 'card-body');
                this.addClass(addToCartBtn, 'btn btn-primary add-to-cart');
                this.addClass(wishListBtn, 'btn btn-outline-secondary wish-list');
                this.addClass(heartIcon, 'fa-solid fa-heart');
                this.addId(addToCartBtn, whiskey.id);
                this.addId(wishListBtn, `wish_${whiskey.id}`);
                addToCartBtn.innerText = 'Add to Card';
                wishListBtn.innerText = 'Add to Wishlist';
                wishListBtn.appendChild(heartIcon);
                cardBody.appendChild(wishListBtn);
                row.appendChild(card);
            }
        });
        return container;
    }
}