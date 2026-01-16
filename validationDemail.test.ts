describe('first test', () => {

    it('should return false if giving a', () => {

        let validateEmail = new ValidationDemail();

        let actual = validateEmail.isEmailValide('a');

        expect(actual).toBe(false);
    })
})