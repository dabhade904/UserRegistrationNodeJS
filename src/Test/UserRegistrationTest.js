var assert = require('chai').assert;
var validator = require('../Main/UserRegistration');

describe('User Registration Test for FirstName validity', function () {
    it('should return true when user firstName valid.', function () {
        assert.equal(validator.cheeckFirstAndLastName("Sachin"), true);
    });

    it('should return false when user firstName inValid.', function () {
        assert.equal(validator.cheeckFirstAndLastName("sachin"), false);
    });

    it('should return false when user firstName in Capital latter.', function () {
        assert.equal(validator.cheeckFirstAndLastName("SACHIN"), false);
    });

    it('should return false when user firstName in Small latter.', function () {
        assert.equal(validator.cheeckFirstAndLastName("sachin"), false);
    });

    it('should return false when user firstName start with number.', function () {
        assert.equal(validator.cheeckFirstAndLastName("904sachin"), false);
    });

    it('should return false when user firstName start with Symbol.', function () {
        assert.equal(validator.cheeckFirstAndLastName("@sachin"), false);
    });

    it('should return false when user firstName End with Symbol.', function () {
        assert.equal(validator.cheeckFirstAndLastName("sachin@"), false);
    });

    it('should return false when user firstName End with Number.', function () {
        assert.equal(validator.cheeckFirstAndLastName("sachin904"), false);
    });

    it('should return false when user First Name is in Number.', function () {
        assert.equal(validator.cheeckFirstAndLastName("90423231"), false);
    });

    it('should return false when user First Name is in Number.', function () {
        assert.equal(validator.cheeckFirstAndLastName("90423231"), false);
    });

    it('should return false when user First Name empty.', function () {
        assert.equal(validator.cheeckFirstAndLastName(" "),false);
    });
});

describe('User Registration Test for FirstName validity', function () {
    it('should return true when user LastName valid.', function () {
        assert.equal(validator.cheeckFirstAndLastName("Dabhade"), true);
    });

    it('should return false when user LastName inValid.', function () {
        assert.equal(validator.cheeckFirstAndLastName("dabhade"), false);
    });

    it('should return false when user LastName in Capital latter.', function () {
        assert.equal(validator.cheeckFirstAndLastName("DABHADE"), false);
    });

    it('should return false when user LastName in Small latter.', function () {
        assert.equal(validator.cheeckFirstAndLastName("sachin"), false);
    });

    it('should return false when user LastName start with number.', function () {
        assert.equal(validator.cheeckFirstAndLastName("904Dabhade"), false);
    });

    it('should return false when user LastName start with Symbol.', function () {
        assert.equal(validator.cheeckFirstAndLastName("@Dabhade"), false);
    });

    it('should return false when user LastName End with Symbol.', function () {
        assert.equal(validator.cheeckFirstAndLastName("dabhade@"), false);
    });

    it('should return false when user LastName End with Number.', function () {
        assert.equal(validator.cheeckFirstAndLastName("Dabhade904"), false);
    });

    it('should return false when user Last Name is in Number.', function () {
        assert.equal(validator.cheeckFirstAndLastName("90423231"), false);
    });

    it('should return false when user Last Name empty.', function () {
        assert.equal(validator.cheeckFirstAndLastName(" "),false);
    });
});

describe('User Registration Test for email validity', function () {
    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("dabhade904@gmail.com"), true);
    });

    it('should return true when user email valid.', function () {
        assert.equal(validator.checkvalidEmail("dabhade.com"), false);
    });

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("12345@gmail.com"),true);
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

    it('should return false when user email Invalid.', function () {
        assert.equal(validator.checkvalidEmail("123453435"), false);
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

    it('should return false when user mobile number is in string.', function () {
        assert.equal(validator.checkMobNumber("dsac"),false);
    });

    it('should return false when user mobile number start with string.', function () {
        assert.equal(validator.checkMobNumber("dsac1322"),false);
    });

    it('should return false when user mobile number end with string.', function () {
        assert.equal(validator.checkMobNumber("9585dsac"),false);
    });
});


