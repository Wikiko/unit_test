const tax = require('./tax');

class CartSummary {
    constructor(items) {
        this._items = items;
    }

    getSubtotal() {
        if (!this._items.length) {
            return 0;
        }

        return this._items.reduce((subtotal, item) => {
            return subtotal += (item.quantity * item.price);
        }, 0);
    }

    getTax(state, done) {
        tax.calculate(this.getSubtotal(), state, taxInfo => done(taxInfo.amount));
    }
}

module.exports = CartSummary;