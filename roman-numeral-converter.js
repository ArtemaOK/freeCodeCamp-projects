// Convert the given number into a roman numeral.
// Roman numerals	Arabic numerals
// M	            1000
// CM	            900
// D	            500
// CD	            400
// C	            100
// XC	            90
// L                50
// XL	            40
// X	            10
// IX	            9
// V	            5
// IV	            4
// I	            1
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let count = '';
    let romanNum = '';
    let f1 = function (num) {
        switch (num.toString()[count]) {
            case '1':
                romanNum = romanNum + "I";
                break;
            case '2':
                romanNum = romanNum + "II";
                break;
            case '3':
                romanNum = romanNum + "III";
                break;
            case '4':
                romanNum = romanNum + "IV";
                break;
            case '5':
                romanNum = romanNum + "V";
                break;
            case '6':
                romanNum = romanNum + "VI";
                break;
            case '7':
                romanNum = romanNum + "VII";
                break;
            case '8':
                romanNum = romanNum + "VIII";
                break;
            case '9':
                romanNum = romanNum + "IX";
                break;
        }
    };
    let f2 = function (num) {
        switch (num.toString()[count]) {
            case '1':
                romanNum = romanNum + "X";
                break;
            case '2':
                romanNum = romanNum + "XX";
                break;
            case '3':
                romanNum = romanNum + "XXX";
                break;
            case '4':
                romanNum = romanNum + "XL";
                break;
            case '5':
                romanNum = romanNum + "L";
                break;
            case '6':
                romanNum = romanNum + "LX";
                break;
            case '7':
                romanNum = romanNum + "LXX";
                break;
            case '8':
                romanNum = romanNum + "LXXX";
                break;
            case '9':
                romanNum = romanNum + "XC";
                break;
        }
    };
    let f3 = function (num) {
        switch (num.toString()[count]) {
            case '1':
                romanNum = romanNum + "C";
                break;
            case '2':
                romanNum = romanNum + "CC";
                break;
            case '3':
                romanNum = romanNum + "CCC";
                break;
            case '4':
                romanNum = romanNum + "CD";
                break;
            case '5':
                romanNum = romanNum + "D";
                break;
            case '6':
                romanNum = romanNum + "DC";
                break;
            case '7':
                romanNum = romanNum + "DCC";
                break;
            case '8':
                romanNum = romanNum + "DCCC";
                break;
            case '9':
                romanNum = romanNum + "CM";
                break;
        }
    };
    let f4 = function (num) {
        switch (num.toString()[count]) {
            case '1':
                romanNum = romanNum + "M";
                break;
            case '2':
                romanNum = romanNum + "MM";
                break;
            case '3':
                romanNum = romanNum + "MMM";
                break;
        }
    };

    if (9 >= num && num >= 0) {
        count = 0;
        f1(num);
    } else if (99 >= num && num >= 10) {
        count = 0;
        f2(num);
        count = 1;
        f1(num);
    } else if (999 >= num && num >= 100) {
        count = 0;
        f3(num);
        count = 1;
        f2(num);
        count = 2;
        f1(num);
    } else if (3999 >= num && num >= 1000) {
        count = 0;
        f4(num);
        count = 1;
        f3(num);
        count = 2;
        f2(num);
        count = 3;
        f1(num);
    } else {
        return '';
    }
    return romanNum;
}



// convertToRoman(36);
