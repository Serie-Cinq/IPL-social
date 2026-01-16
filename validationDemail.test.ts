const ValidationDemail = require('./validationDemail');

describe('test', () => {

    it('should return false if giving a', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('a');

        expect(actual).toBe(false);
    })

    it('should return false if giving amine', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('amine');

        expect(actual).toBe(false);
    })

})