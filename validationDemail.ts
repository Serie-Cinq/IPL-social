module.exports = class ValidationDemail {

    isEmailValide(email: string): boolean {

        if(!email.includes('@')){
            return false;
        }

        if(!email.includes('.')){
            return false;
        }

        if(email.endsWith('.')){
            return false;
        }

        if(email.includes(' ')){
            return false;
        }

        const parts = email.split('@');

        if (parts.length !== 2) {
            return false;
        }

        const [before, after] = parts;

        if (before.length === 0 || after.length === 0) {
            return false;
        }
        
        return true;
    }

}