class Basket {

    constructor(size = 4) {
        this.basket = []
        this.size = size

    }

    newBasket() {
        return this.basket
    }

    addBagel() {
        this.basket.push('chocolate flavoured bagel');
        {
            return this.basket
        }
    }
    removeBagel() {
        this.basket.shift(0, 1);
        {
            return this.basket
        }
    }
    changeBagel() {
        this.basket.push('raisin bagel');
        return this.basket
    }
    addMoreBagels() {
        if (this.basket.length < this.basket) {
            return this.basket
        }
        return 'this basket is full'
    }
    smallBagelBasket(size) {
        console.log('length' + this.smallBasket)
        this.smallBasket = size
        return this.smallBasket
    }
    mediumBagelBasket(size) {
        this.mediumBasket = size
        return this.mediumBasket
    }
    removeUnexistingItem() {
        this.basket.pop(1); {
            return "item isn't in basket"
        }
    }

}
module.exports = Basket