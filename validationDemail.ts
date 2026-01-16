module.exports = class ValidationDemail {

    isEmailValide(email: string): boolean {

        if(email.includes('@')){
            return true;
        }

        if(email.includes('.')){
            return true;
        }
        
        return false;
    }

}