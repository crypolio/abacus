# Abacus

abacus.js is a light javascript library for node.js built with c code and gyp bindings. It supports arithmetic operations on floting point.


# How to install
```bash
npm i abacus
```

or

```bash
yarn add abacus
```

# Usage

In all examples below, semicolons and `toString` calls are not shown. If a commented-out value is in quotes it means toString has been called on the preceding expression.

The library exports a single constructor function, Abacus, which expects a single argument that is a number, string or Abacus instance.

```javascript
n = new Abacus(15);

n.min(2)		// '13'
n.plus(5)		// '18'
n.gte(20)		// false
```

If using values with more than a few digits, it is recommended to pass strings rather than numbers to avoid a potential loss of precision.


### addition
```javascript
Abacus(15).plus(5) 	// '20.00000000'
```

### Substraction
```javascript
Abacus(15).minus(5); 	// '10.00000000'
```

### Multiplication
```javascript
Abacus(15).multiply(5); // '75.00000000'
```

### Division
```javascript
Abacus(15).div(5); 	// '3.00000000'
```

### Modulo
```javascript
Abacus(15).mod(5); 	// '0.00000000'
```

### Power
```javascript
Abacus(15).pow(5); 	// '759375.00000000'
```

### Floor
```javascript
Abacus(15.12345).floor(); // '15'
```

# Test

To run the tests using Node.js from the root directory:

```bash
npm run test
```

Each separate test module can also be executed individually, for example:

```bash
npm run test ./tests/arithmetic.test.js
```

