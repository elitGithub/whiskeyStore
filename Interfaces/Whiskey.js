export class Whiskey {
    constructor(whiskey = {}) {
        // TODO: whiskey will each have a unique id, for now - fake
        this.id = this.uid();
        this.name = whiskey.name;
        this.country = whiskey.country;
        this.age = whiskey.age;
        this.price = whiskey.price;
        this.description = this.describe();
        this.image = whiskey.image || 'https://www.winel.co.il/images/storeProductImages_3573.jpg'

    }

    describe() {
        return `${this.name} is a ${this.age} years old whiskey.`;
    }

    uid() {
        let counter = Math.random() * +Number.MAX_SAFE_INTEGER;
        let currentTime = Date.now().toString(36).toLocaleUpperCase();
        let randomNumber = +Math.random() * +Number.MAX_SAFE_INTEGER;
        randomNumber = randomNumber.toString(36).slice(0, 12).padStart(12, '0').toLocaleUpperCase();
        return ''.concat(currentTime, '-', randomNumber, counter);
    };
}