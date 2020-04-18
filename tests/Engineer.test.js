const Engineer = require('../lib/Engineer');

describe('Engineer subclass', () => {
    // Properly constructed val
    const ENG = new Engineer(1, 'John Smith', 'johnsmith@gmail.com', 'johns');
    describe('constructor', () => {
        it('should return GitHub username', () => {
            expect(ENG.github).toEqual('johns');
        });

        it('should throw an error if GitHub username is not provided', () => {
            let badENG = () => new Engineer(1, 'John Smith', 'johnsmith@gmail.com');
            expect(badENG).toThrowError(new Error('GitHub username must be provided.'));
        });
    });

    describe('getGithub', () => {
        it('should return the GitHub username', () => {
            expect(ENG.getGithub()).toEqual('GitHub: johns');
        });
    });

    describe('getRole', () => {
        it('should return the new Employee object', () => {
            expect(ENG.getRole()).toEqual(ENG);
        });
    });
});

