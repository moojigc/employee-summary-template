const Manager = require('../lib/Manager');

describe('Manager subclass', () => {
    // Properly constructed val
    const MAN = new Manager(1, 'John Smith', 'johnsmith@gmail.com', 212);
    describe('constructor', () => {
        it('should return a value for the officeNumber', () => {
            expect(MAN.officeNumber).toEqual(212);
        });
        it('should throw an error if office number is not provided', () => {
            let badMAN = () => new Manager(1, 'John Smith', 'johnsmith@gmail.com');
            expect(badMAN).toThrowError(new Error('Office number must be provided.'));
        });
    });

    describe('getRole', () => {
        it('should return the new Employee object', () => {
            expect(MAN.getRole()).toEqual(MAN);
        });
    });
});

