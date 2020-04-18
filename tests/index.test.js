const { size, internDetails, engineerDetails, managerDetails } = require('../lib/inquiry');
const index = require('../index');

describe('size', () => {
    it('should return the number of engineers then interns', () => {
        let teamSize = size();
        expect(teamSize).toEqual({engineersTotal: 2, internsTotal: 2})
    })
})