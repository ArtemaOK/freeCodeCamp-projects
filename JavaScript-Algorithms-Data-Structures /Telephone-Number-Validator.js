// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
    // Formato 555-555-5555
    function f1(str) {
        if (str[0] + str[1] + str[2] <= 999 && str[0] + str[1] + str[2] >= 0 &&
            str[3] == '-' &&
            str[4] + str[5] + str[6] <= 999 && str[4] + str[5] + str[6] >= 0 &&
            str[7] == '-' &&
            str[8] + str[9] + str[10] + str[11] <= 9999 && str[8] + str[9] + str[10] + str[11] >= 0) {
            return true
        }
    }
    // Formato (555)555-5555
    function f2(str) {
        if (str[0] == '(' &&
            str[1] + str[2] + str[3] <= 999 && str[1] + str[2] + str[3] >= 0 &&
            str[4] == ')' &&
            str[5] + str[6] + str[7] <= 999 && str[5] + str[6] + str[7] >= 0 &&
            str[8] == '-' &&
            str[9] + str[10] + str[11] + str[12] <= 9999 && str[9] + str[10] + str[11] + str[12] >= 0) {
            return true
        }
    }
    // Formato (555) 555-5555
    function f3(str) {
        if (str[0] == '(' &&
            str[1] + str[2] + str[3] <= 999 && str[1] + str[2] + str[3] >= 0 &&
            str[4] == ')' && str[5] == ' ' &&
            str[6] + str[7] + str[8] <= 999 && str[6] + str[7] + str[8] >= 0 &&
            str[9] == '-' &&
            str[10] + str[11] + str[12] + str[13] <= 9999 && str[10] + str[11] + str[12] + str[13] >= 0) {
            return true
        }
    }
    // Formato 555 555 5555
    function f4(str) {
        if (str[0] + str[1] + str[2] <= 999 && str[0] + str[1] + str[2] >= 0 &&
            str[3] == ' ' &&
            str[4] + str[5] + str[6] <= 999 && str[4] + str[5] + str[6] >= 0 &&
            str[7] == ' ' &&
            str[8] + str[9] + str[10] + str[11] <= 9999 && str[8] + str[9] + str[10] + str[11] >= 0) {
            return true
        }
    }
    // Formato 5555555555
    function f5(str) {
        if (str.length == 10 && str <= 9999999999 && str >= 0) {
            return true
        }
    }
    // Formato 1 555 555 5555
    function f6(str) {
        if (str[0] == 1 &&
            str[1] + str[2] + str[3] <= 999 && str[1] + str[2] + str[3] >= 0 &&
            str[4] == ' ' &&
            str[5] + str[6] + str[7] <= 999 && str[5] + str[6] + str[7] >= 0 &&
            str[8] == ' ' &&
            str[9] + str[10] + str[11] + str[12] <= 9999 && str[9] + str[10] + str[11] + str[12] >= 0) {
            return true
        }
    }
    // Función 5 pero con código internacional
    function f7(str) {
        if (str.length == 11 && str <= 19999999999 && str >= 0) {
            return true
        }
    }
    // Función 1 pero formato "1 555-555-5555"
    function f8(str) {
        if (str[0] == 1 && str[1] == ' ' &&
            str[2] + str[3] + str[4] <= 999 && str[2] + str[3] + str[4] >= 0 &&
            str[5] == '-' &&
            str[6] + str[7] + str[8] <= 999 && str[6] + str[7] + str[8] >= 0 &&
            str[9] == '-' &&
            str[10] + str[11] + str[12] + str[13] <= 9999 && str[10] + str[11] + str[12] + str[13] >= 0) {
            return true
        }
    }
    // Función 3 pero formato "1 (555) 555-5555"
    function f9(str) {
        if (str[0] == 1 && str[1] == ' ' && str[2] == '(' &&
            str[3] + str[4] + str[5] <= 999 && str[3] + str[4] + str[5] >= 0 &&
            str[6] == ')' && str[7] == ' ' &&
            str[8] + str[9] + str[10] <= 999 && str[8] + str[9] + str[10] >= 0 &&
            str[11] == '-' &&
            str[12] + str[13] + str[14] + str[15] <= 9999 && str[12] + str[13] + str[14] + str[15] >= 0) {
            return true
        }
    }
    // Función 2 pero formato "1(555)555-5555"
    function f10(str) {
        if (str[0] == 1 && str[1] == '(' &&
            str[2] + str[3] + str[4] <= 999 && str[2] + str[3] + str[4] >= 0 &&
            str[5] == ')' &&
            str[6] + str[7] + str[8] <= 999 && str[6] + str[7] + str[8] >= 0 &&
            str[9] == '-' &&
            str[10] + str[11] + str[12] + str[13] <= 9999 && str[10] + str[11] + str[12] + str[13] >= 0) {
            return true
        }
    }
    // Función 4 pero formato "1 555 555 5555"
    function f11(str) {
        if (str[0] == 1 && str[1] == ' ' &&
            str[2] + str[3] + str[4] <= 999 && str[2] + str[3] + str[4] >= 0 &&
            str[5] == ' ' &&
            str[6] + str[7] + str[8] <= 999 && str[6] + str[7] + str[8] >= 0 &&
            str[9] == ' ' &&
            str[10] + str[11] + str[12] + str[13] <= 9999 && str[10] + str[11] + str[12] + str[13] >= 0) {
            return true
        }
    }

    switch (f1(str) || f2(str) || f3(str) || f4(str) || f5(str) || f6(str) || f7(str) || f8(str) || f9(str) || f10(str) || f11(str)) {
        case true:
            return true;
        default:
            return false;
    }
}



// telephoneCheck("555-555-5555");