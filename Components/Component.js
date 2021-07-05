export class Component {

    createElement(elementName) {
        return document.createElement(elementName);
    }

    addClass(element, className) {
        return element.className = className;
    }

    addId(element, id) {
        return element.id = id;
    }

}
