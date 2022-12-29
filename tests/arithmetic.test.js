const Abacus = require('../');

describe('arithmetical tests', () => {

	it('addition', () => {
		const res = Abacus('1').plus('2').toString();
		expect(res).toEqual('3.00000000');
	});

	it('substraction', () => {
		const res = Abacus('5').min('2').toString();
		expect(res).toEqual('3.00000000');
	});

	it('multiplication', () => {
		const res = Abacus('5').mul('2').toString();
		expect(res).toEqual('10.00000000');
	});

	it('division', () => {
		const res = Abacus('15').div('3').toString();
		expect(res).toEqual('5.00000000');
	});

	it('modlo', () => {
		const res = Abacus('5').mod('15').toString();
		expect(res).toEqual('5.00000000');
	});

	it('chaning', () => {
		const res = Abacus('1').plus('2').mul('5').div('1').mod('9').toString();
		expect(res).toEqual('6.00000000');
	});

});
