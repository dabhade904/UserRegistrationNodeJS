var assert = require('chai').assert;
var validator = require('../Main/UserRegistration');
describe('User Registration Test for FirstName validity', function () {
    it('should return true when user firstName valid.', function () {
        assert.equal(validator.firstAndLastName("Sachin"), true);
    });

    it('should return false when user firstName inValid.', function () {
        assert.equal(validator.firstAndLastName("sachin"), false);
    });

    it('should return false when user firstName in Capital latter.', function () {
        assert.equal(validator.firstAndLastName("SACHIN"), false);
    });

    it('should return false when user firstName in Small latter.', function () {
        assert.equal(validator.firstAndLastName("sachin"), false);
    });

    it('should return false when user firstName start with number.', function () {
        assert.equal(validator.firstAndLastName("904sachin"), false);
    });

    it('should return false when user firstName start with Symbol.', function () {
        assert.equal(validator.firstAndLastName("@sachin"), false);
    });

    it('should return false when user firstName End with Symbol.', function () {
        assert.equal(validator.firstAndLastName("sachin@"), false);
    });

    it('should return false when user firstName End with Number.', function () {
        assert.equal(validator.firstAndLastName("sachin904"), false);
    });
});

describe('User Registration Test for FirstName validity', function () {
    it('should return true when user firstName valid.', function () {
        assert.equal(validator.firstAndLastName("Dabhade"), true);
    });

    it('should return false when user firstName inValid.', function () {
        assert.equal(validator.firstAndLastName("dabhade"), false);
    });

    it('should return false when user firstName in Capital latter.', function () {
        assert.equal(validator.firstAndLastName("DABHADE"), false);
    });

    it('should return false when user firstName in Small latter.', function () {
        assert.equal(validator.firstAndLastName("sachin"), false);
    });

    it('should return false when user firstName start with number.', function () {
        assert.equal(validator.firstAndLastName("904Dabhade"), false);
    });

    it('should return false when user firstName start with Symbol.', function () {
        assert.equal(validator.firstAndLastName("@Dabhade"), false);
    });

    it('should return false when user firstName End with Symbol.', function () {
        assert.equal(validator.firstAndLastName("dabhade@"), false);
    });

    it('should return false when user firstName End with Number.', function () {
        assert.equal(validator.firstAndLastName("Dabhade904"), false);
    });
});

describe('User Registration Test for email validity', function () {
    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("dabhade904@gmail.com"), true);
    });

    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("dabhade.com"), false);
    });

    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("abc@yahoo.com"), true);
    });
    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("abc-100@yahoo.com"), true);
    });
    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("abc.100@abc.com.au"), true);
    });
    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("abc111@abc.com"), true);
    });

    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("abc-100@abc.net"), true);
    });

    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("abc@gmail.com.com"), true);
    });

    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("abc+100@gmail.com"), true);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("abc"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("abc123@gmail.a"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("abc123@.com"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("abc123@.com.com"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail(".abc@abc.com"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("abc@%*.com"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("abc..2002@gmail.com"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("abc.@gmail.com"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("abc@abc@gmail.com"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("abc@gmail.com.1a"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("abc@gmail.com.aa.au"), false);
    });
});

describe('User Registration Test for Password validity', function () {
    it('should return true when user Password valid.', function () {
        assert.equal(validator.checkPassword("Password@1234"), true);
    });

    it('hould return true when user Password valid..', function () {
        assert.equal(validator.checkPassword("123Password@"),true);
    });

    it('hould return true when user Password valid..', function () {
        assert.equal(validator.checkPassword("Password123@"),true);
    });

    it('hould return true when user Password valid.', function () {
        assert.equal(validator.checkPassword("1234A78@"),true);
    });
    
    it('should return false when user Password without capital letter.', function () {
        assert.equal(validator.checkPassword("password@1234"), false);
    });

    it('should return false when user Password without any special symbol.', function () {
        assert.equal(validator.checkPassword("Password1234"), false);
    });

    it('should return false when user Password without any number.', function () {
        assert.equal(validator.checkPassword("Password@"), false);
    });
});

describe('User Registration Test for mobile number validity', function () {
    it('should return true when user mobile number valid.', function () {
        assert.equal(validator.checkMobNumber("91 9876543210"), true);
    });
    it('should return false when user mobile number without state code.', function () {
        assert.equal(validator.checkMobNumber("9876543210"), false);
    });
    it('should return false when user mobile number not exact 10 digits.', function () {
        assert.equal(validator.checkMobNumber("91 987654321"), false);
    });
    it('should return false when user mobile number null.', function () {
        assert.equal(validator.checkMobNumber(""), false);
    });
});


