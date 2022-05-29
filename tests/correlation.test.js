const Abacus = require('../');

describe('correlation tests', () => {

	it('Is equal to', () => {
		expect(new Abacus('1').eq('2')).toEqual(false);
	});

	it('Is greater than', () => {
		expect(new Abacus('5').gt('2')).toEqual(true);
	});

	it('Is greater than or equal to', () => {
		expect(new Abacus('5').gte('5')).toEqual(true);
	});

	it('Is less than', () => {
		expect(new Abacus('15').lt('3')).toEqual(false);
	});

	it('Is less than or equal to', () => {
		expect(new Abacus('5').lte('15')).toEqual(true);
	});

	it('chaning', () => {
		expect(Abacus('1').plus('2').mul('5').div('1').mod('9').gte('1.00000000')).toEqual(true);
	});

});
