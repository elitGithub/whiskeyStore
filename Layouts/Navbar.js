import { Component } from "../Components/Component";
import { navbarItems } from '../Interfaces/NavBarItems';

export class Navbar extends Component {

    render() {
        const container = this.createElement('div');
        this.addClass(container, 'container-fluid');
        const ul = this.createElement('ul');
        this.addClass(ul, 'nav nav-tabs justify-content-center');
        container.appendChild(ul);
        navbarItems.forEach(item => {
            const listItem = this.createElement(item.element);
            this.addClass(listItem, item.className);
            if (item.element.innerText) {
                listItem.innerText = item.element.innerText;
            }
            if (item.children) {
                item.children.forEach(child => {
                    const elementChild = this.createElement(child.element);
                    this.addClass(elementChild, child.className);
                    if (child.innerText) {
                        elementChild.innerText = child.innerText;
                    }
                    listItem.appendChild(elementChild)
                });
            }
            ul.appendChild(listItem);
        });
        return container;
    }
}