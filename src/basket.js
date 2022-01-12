class Basket {

    constructor() {
        this.basket = []
    }

    newBasket() {
        return this.basket
    }

    addItem() {
        this.basket.push("chocolate flavoured bagel");
        {
            return this.basket
        }
    }
    removeItem() {
        this.basket.shift(0,1);
        {
            return this.basket
        }
    }
    changeItem() {
        this.basket.push("raisin bagel");
        {
            return this.basket
        }
    }
}
module.exports = Basket