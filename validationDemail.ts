module.exports = class ValidationDemail {

    isEmailValide(email: string): boolean {

        if(!email.includes('@')){
            return false;
        }

        if(!email.includes('.')){
            return false;
        }
        
        return true;
    }

}