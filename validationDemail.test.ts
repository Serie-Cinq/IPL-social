const ValidationDemail = require('./validationDemail');

describe('test', () => {

    it('test 1 : should return false when giving a', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('a');

        expect(actual).toBe(false);
    })

    it('test 2 : should return false when giving amine', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('amine');

        expect(actual).toBe(false);
    })

    it('test 3 : should return true when giving amine@', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('amine@');

        expect(actual).toBe(true);
    })

    it('test 4 : should return true when giving an email with @', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('fhef@');

        expect(actual).toBe(true);
    })

    it('test 5 : should return false when giving an email without @', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('fhef');

        expect(actual).toBe(false);
    })

})