const Abacus = require('./index');

const n = new Abacus(2).pow(3).plus(0.12345).floor();

console.log('n:::', n.toString());
