'use strict';

const abacus = require('./build/Release/abacus');

const DEFAULT_CONFIG = {
	precision: 8,
};

/**
 * Check is value is numerical.
 * @params {number|string} val - Numerical parameter.
 * @returns {bool} Returns flag if numerical value.
 */
const _isNumerical = (val) => {
	const reg = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i
	return !!(reg.exec(val) || []).length;
};

/**
 * Stringify number.
 * @params {number|string} val - Numerical value.
 * @returns {bool} Returns flag if numerical value.
 */
const _stringifyNum = (n) => {

	// TODO: Add support for instance of abacus.

	if (!_isNumerical(n)) {
		throw new Error('Input is not numerical');
	}

	return String(n);
};


function Abacus(n, config = {}) {

	var x = this;

	// Enable constructor call without `new`.
	if (!(x instanceof Abacus)) return new Abacus(n);

	// Check if input is numerical.
	const hasNumeric = _isNumerical(n);
	if (!hasNumeric) throw new Error('Input is not numerical');

	this.n = _stringifyNum(n);

	this.options = Object.assign(DEFAULT_CONFIG, config);

	this.add = this.plus;
	this.min = this.minus;
	this.pow = this.power;
	this.mod = this.modulo;
	this.mul = this.multiply;
	this.div = this.division;

	this.eq = this.isEqualTo;
	this.lt = this.isLessThan;
	this.gt = this.isGreaterThan;
	this.lte = this.isLessThanOrEqualTo;
	this.gte = this.isGreaterThanOrEqualTo;

}

/**
 * Set value.
 * @params {number|string|Abacus} n.
 * @returns Set Abacus instance value.
 */
Abacus.prototype.setValue = function(n) {
	let res = false;

	if (_isNumerical(n) && n.length) {
		res = _stringifyNum(n);
	} else if (Number.isInteger(n)) {
		res = Boolean(n);
	} else {
		res = JSON.parse(n);
	}

	this.n = res;
}

/* ----------------------- [ Arithmetical methods ] ----------------------- */

/**
 * Plus.
 * @params {number|string|Abacus} n.
 * @returns Returns an Abacus whose value is the value of this Abacus plus n.
 */
Abacus.prototype.plus = function(n) {
	this.setValue(abacus.calc(this.n, "plus", _stringifyNum(n), this.options.precision));
	return this;
}

/**
 * Minus.
 * @params {number|string|Abacus} n.
 * @returns Returns an Abacus whose value is the value of this Abacus minus n.
 */
Abacus.prototype.minus = function(n) {
	this.setValue(abacus.calc(this.n, "minus", _stringifyNum(n), this.options.precision));
	return this;
}

/**
 * Modulo.
 * @params {number|string|Abacus} n.
 * @returns Returns an Abacus whose value is the value of this Abacus modulo n.
 */
Abacus.prototype.modulo = function(n) {
	this.setValue(abacus.calc(this.n, "modulo", _stringifyNum(n), this.options.precision));
	return this;
}

/**
 * Multiply.
 * @params {number|string|Abacus} n.
 * @returns Returns an Abacus whose value is the value of this Abacus multiplied by n.
 */
Abacus.prototype.multiply = function(n) {
	this.setValue(abacus.calc(this.n, "multiply", _stringifyNum(n), this.options.precision));
	return this;
}

/**
 * Division.
 * @params {number|string|Abacus} n.
 * @returns Returns an Abacus whose value is the value of this Abacus divided by n.
 */
Abacus.prototype.division = function(n) {
	this.setValue(abacus.calc(this.n, "division", _stringifyNum(n), this.options.precision));
	return this;
}

/**
 * Power.
 * @params {number|string|Abacus} n.
 * @returns Returns an Abacuse whose value is the value of this Abacuse exponentiated by n.
 */
Abacus.prototype.power = function(n) {
	this.setValue(abacus.calc(this.n, "power", _stringifyNum(n), this.options.precision));
	return this;
}

/* ----------------------- [ Logical operators ] ----------------------- */

/**
 * Is equal to.
 * @params {number|string|Abacus} n.
 * @returns Returns true if the value of this Abacus is equal to the value of n, otherwise returns false.
 */
Abacus.prototype.isEqualTo = function(n) {
	return Boolean(abacus.compare(this.n, "eq", _stringifyNum(n)));
}

/**
 * Is greater than.
 * @params {number|string|Abacus} n.
 * @returns Returns true if the value of this Abacus is greater than the value of n, otherwise returns false.
 */
Abacus.prototype.isGreaterThan = function(n) {
	return Boolean(abacus.compare(this.n, "gt", _stringifyNum(n)));
}

/**
 * Is greater than or equal to.
 * @params {number|string|Abacus} n.
 * @returns Returns true if the value of this Abacus is greater than or equal to the value of n, otherwise returns false.
 */
Abacus.prototype.isGreaterThanOrEqualTo = function(n) {
	return Boolean(abacus.compare(this.n, "gte", _stringifyNum(n)));
}

/**
 * Is less than.
 * @params {number|string|Abacus} n.
 * @returns Returns true if the value of this Abacus is less than the value of n, otherwise returns false.
 */
Abacus.prototype.isLessThan = function(n) {
	return Boolean(abacus.compare(this.n, "lt", _stringifyNum(n)));
}

/**
 * Is less than or equal to.
 * @params {number|string|Abacus} n.
 * @returns Returns true if the value of this Abacus is less than or equal to the value of n, otherwise returns false.
 */
Abacus.prototype.isLessThanOrEqualTo = function(n) {
	return Boolean(abacus.compare(this.n, "lte", _stringifyNum(n)));
}

/* ----------------------- [ Utilities methods ] ----------------------- */

/**
 * To number.
 * @returns Returns the value of this Abacus as a JavaScript number primitive.
 */
Abacus.prototype.toNumber = function() {
	return Number(this.n);
}

/**
 * To number.
 * @returns Returns the value of this Abacus as a JavaScript number primitive.
 */
Abacus.prototype.toString = function() {
	return String(this.n);
}

module.exports = Abacus;
