const Employee = require('../lib/Employee');

describe('Employee class', () => {
    // Properly constructed val
    const EMP = new Employee(1, 'John Smith', 'johnsmith@gmail.com');
    describe('constructor', () => {
        it('should return a string for the name', () => {
            expect(EMP.name).toEqual('John Smith');
            expect(EMP.id).toEqual(1);
            expect(EMP.email).toEqual('johnsmith@gmail.com');
        });
        it('should throw an error if name is not a string', () => {
            let badEMP = () => new Employee(1, 25, 'john@gmail.com');
            expect(badEMP).toThrowError(new Error('Name required, and name must be a string!'));
        });
        it('should throw an error if name is empty', () => {
            let badEMP = () => new Employee(1, "", 'john@gmail.com');
            expect(badEMP).toThrowError(new Error('Name required, and name must be a string!'));
        });
        it('should throw an error if ID is empty', () => {
            let badEMP = () => new Employee('', 'John', 'john@gmail.com');
            expect(badEMP).toThrowError(new Error('ID value must be provided.'));
        });
        it('should throw an error if email invalid', () => {
            let badEMP = () => new Employee(1, 'John', 'john');
            expect(badEMP).toThrowError(new Error('Not a valid email or email not provided.'));
        });
    });

    describe('getName', () => {
        it('should return the name', () => {
            expect(EMP.getName()).toEqual('John Smith');
        })
    });
    
    describe('getId', () => {
        it('should return the id', () => {
            expect(EMP.getId()).toEqual(1);
        })
    });
    
    describe('getEmail', () => {
        it('should return the email', () => {
            expect(EMP.getEmail()).toEqual('johnsmith@gmail.com');
        })
    });
    describe('getRole', () => {
        it('should return the new Employee object', () => {
            expect(EMP.getRole()).toEqual(EMP);
        });
    })
});
