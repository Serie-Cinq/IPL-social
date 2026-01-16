const ValidationDemail = require('./validationDemail');

describe('test', () => {

    it('should return false when giving a', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('a');

        expect(actual).toBe(false);
    })

    it('should return false when giving amine', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('amine');

        expect(actual).toBe(false);
    })

    it('should return true when giving amine@', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('amine@');

        expect(actual).toBe(true);
    })

})