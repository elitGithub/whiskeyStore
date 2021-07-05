
import { Footer } from "./Footer";
import { Header } from "./Header";

export class Layout {
    constructor() {
        this.header = new Header();
        this.footer = new Footer();
    }

    render() {
        document.body.appendChild(this.header.render());
        const main = document.createElement('main');
        main.className = 'flex-shrink-0';
        main.name = 'main';
        document.body.appendChild(main);
        document.body.appendChild(this.footer.render());
    }
}