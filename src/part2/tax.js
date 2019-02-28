const request = require('request');

const tax = {
    calculate: function (subtotal, state, done) {
        if(state !== 'CA'){
            return done({
                amount: 0
            });
        }

        request.post({
            url: 'https://some-tax-service.com/request',
            method: 'POST',
            json: {
                subtotal: subtotal
            }
        }, (error, response, body) => done(body));
    }
};

module.exports = tax;