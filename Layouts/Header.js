import { Navbar } from "./Navbar";
import { HeroHeader } from "../Components/HeroHeader";

export class Header {
    constructor() {
        this.navbar = new Navbar();
        this.heroHeader = new HeroHeader();
    }

    render() {
        const div = document.createElement('div');
        div.appendChild(this.heroHeader.render());
        div.appendChild(this.navbar.render());
        return div;

    }
}