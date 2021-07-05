import { ProductsList } from "./ProductsList";

export class Renderer {
    static render(path = '/') {
        const main = document.querySelector('main');
        switch (path) {
            case '/':
                const prodList = new ProductsList();
                main.appendChild(prodList.render());
                break;
            default:
                main.innerHTML = '<h1>Not Found</h1>';
        }
    }
}