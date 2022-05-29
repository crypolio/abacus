module.exports = {
	transform: {
		// '^.+\\.ts?$': 'ts-jest',
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest'
	},
	testEnvironment: 'node',
	testRegex: './tests/.*\\.(test|spec)?\\.(js|ts)$',
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	'roots': [
		'<rootDir>/tests'
	]
};
