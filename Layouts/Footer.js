import { Component } from "../Components/Component";

export class Footer extends Component {
    render() {
        const footer = this.createElement('footer');
        this.addClass(footer, 'footer mt-auto py-3 bg-light');
        const container = this.createElement('div');
        this.addClass(container, 'container');
        const footerContent = this.createElement('span');
        this.addClass(footerContent, 'text-muted');
        footerContent.innerText = 'Place sticky footer content here.';
        container.appendChild(footerContent);
        footer.appendChild(container);
        return footer;
    }
}