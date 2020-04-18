const Intern = require('../lib/Intern');

describe('Intern subclass', () => {
    // Properly constructed val
    const INT = new Intern(1, 'John Smith', 'johnsmith@gmail.com', 'NYU');
    describe('constructor', () => {
        it('should return school name', () => {
            expect(INT.school).toEqual('NYU');
        });

        it('should throw an error if school name is not provided', () => {
            let badINT = () => new Intern(1, 'John Smith', 'johnsmith@gmail.com');
            expect(badINT).toThrowError(new Error('School name must be provided.'));
        });
    });

    describe('getSchool', () => {
        it('should return the school name', () => {
            expect(INT.getSchool()).toEqual('School: NYU');
        });
    });

    describe('getRole', () => {
        it('should return the new Employee object', () => {
            expect(INT.getRole()).toEqual(INT);
        });
    });
});

