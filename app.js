let fromDollarToYen = (value) => (value / 1.07) * 156.5;
let fromEuroToDollar = (value) => value * 1.07;
let fromYenToPound = (value) => (value / 156.5) * 0.87;

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
