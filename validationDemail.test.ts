const ValidationDemail = require('./validationDemail');

describe('test', () => {

    let validateEmail = new ValidationDemail();

    it('test 1 : should return false when giving a', () => {

        let actual = validateEmail.isEmailValide('a');

        expect(actual).toBe(false);
    })

    it('test 2 : should return false when giving amine', () => {

        let actual = validateEmail.isEmailValide('amine');

        expect(actual).toBe(false);
    })

    it('test 3 : should return false when giving fzabubf', () => {

        let actual = validateEmail.isEmailValide('fzabubf');

        expect(actual).toBe(false);
    })

    it('test 4 : should return false when giving an email without @', () => {

        let actual = validateEmail.isEmailValide('fhef');

        expect(actual).toBe(false);
    })

    it('test 5 : should return false when giving an email with @ and .', () => {

        let actual = validateEmail.isEmailValide('fhef');

        expect(actual).toBe(false);
    })

    it('test 6 : should return false when giving an email with @ and . AND . is in the end', () => {

        let actual = validateEmail.isEmailValide('fh.ef@.');

        expect(actual).toBe(false);
    })


})