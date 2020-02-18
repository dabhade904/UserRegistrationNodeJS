module.exports = {

    firstAndLastName(name) {
        var pattern = RegExp('^[A-Z]{1}[a-z]{3,}$');
        return pattern.test(name);
    },

    checkvalidEmail(email) {
        let pat = RegExp('^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$');
        return pat.test(email);
    },

    checkMobNumber(mobileNumber) {
        let pat = RegExp('^[0-9]{2}\\s[0-9]{10}$');
        return pat.test(mobileNumber);
    },

    checkPassword(password) {
        let pat = RegExp('((?=.*[0-9])(?=.*[a-z]?)(?=.*[A-Z])(?=.*[@#*$%]).{8,})');
        return pat.test(password);
    }
}

