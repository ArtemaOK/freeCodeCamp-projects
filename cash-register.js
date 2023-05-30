// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument(price), payment as the second argument(cash), and cash -in -drawer(cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return { status: "INSUFFICIENT_FUNDS", change: [] } if cash -in -drawer is less than the change due, or if you cannot return the exact change.
// Return { status: "CLOSED", change: [...] } with cash -in -drawer as the value for the key change if it is equal to the change due.
// Otherwise, return { status: "OPEN", change: [...] }, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	        Amount
// Penny                    $0.01(PENNY)
// Nickel                   $0.05(NICKEL)
// Dime                     $0.1(DIME)
// Quarter      	        $0.25(QUARTER)
// Dollar                   $1(ONE)
// Five Dollars    	        $5(FIVE)
// Ten Dollars	            $10(TEN)
// Twenty Dollars	        $20(TWENTY)
// One - hundred Dollars	$100(ONE HUNDRED)

// See below for an example of a cash -in -drawer array:

// [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
    let dif = cash - price;
    let change = [];
    let objectOpen = { status: '', change: change };
    let objectClosed = { status: '', change: cid };
    let objectInsufficient = { status: '', change: [] };
    let remaining0 = '';
    let remaining1 = '';
    let remaining2 = '';
    let remaining3 = '';
    let remaining4 = '';
    let remaining5 = '';
    let remaining6 = '';
    let remaining7 = '';
    let remaining8 = '';

    if (dif >= 100) {
        let previousAmount = cid[8][1];
        while (dif >= 100) {
            if ((cid[8][1] - 100) >= 0) {
                dif = dif - 100;
                cid[8][1] = cid[8][1] - 100;
            }
            break;
        }
        cid[8][1] = previousAmount - cid[8][1];
        remaining8 = previousAmount - (cid[8][1])
        change.push(cid[8]);
    }
    if (dif >= 20) {
        let previousAmount = cid[7][1];
        while (dif >= 20) {
            if ((cid[7][1] - 20) >= 0) {
                dif = dif - 20;
                cid[7][1] = cid[7][1] - 20;
            } else {
                break;
            }
        }
        cid[7][1] = previousAmount - cid[7][1];
        remaining7 = previousAmount - (cid[7][1])
        change.push(cid[7]);
    }
    if (dif >= 10) {
        let previousAmount = cid[6][1];
        while (dif >= 10) {
            if ((cid[6][1] - 10) >= 0) {
                dif = dif - 10;
                cid[6][1] = cid[6][1] - 10;
            } else {
                break;
            }
        }
        cid[6][1] = previousAmount - cid[6][1];
        remaining6 = previousAmount - (cid[6][1])
        change.push(cid[6]);
    }
    if (dif >= 5) {
        let previousAmount = cid[5][1];
        while (dif >= 5) {
            if ((cid[5][1] - 5) >= 0) {
                dif = dif - 5;
                cid[5][1] = cid[5][1] - 5;
            } else {
                break;
            }
        }
        cid[5][1] = previousAmount - cid[5][1];
        remaining5 = previousAmount - (cid[5][1])
        change.push(cid[5]);
    }
    if (dif >= 1) {
        let previousAmount = cid[4][1];
        while (dif >= 1) {
            if ((cid[4][1] - 1) >= 0) {
                dif = dif - 1;
                cid[4][1] = cid[4][1] - 1;
            } else {
                break;
            }
        }
        cid[4][1] = previousAmount - cid[4][1];
        remaining4 = previousAmount - (cid[4][1])
        change.push(cid[4]);
    }
    if (dif >= 0.25) {
        let previousAmount = cid[3][1];
        while (dif >= 0.25) {
            if ((cid[3][1] - 0.25) >= 0) {
                dif = dif - 0.25;
                cid[3][1] = cid[3][1] - 0.25;
            } else {
                break;
            }
        }
        cid[3][1] = previousAmount - cid[3][1];
        remaining3 = previousAmount - (cid[3][1])
        change.push(cid[3]);
    }
    if (dif >= 0.1) {
        let previousAmount = cid[2][1];
        while (dif >= 0.1) {
            if ((cid[2][1] - 0.1) >= 0) {
                dif = parseFloat((dif - 0.1).toFixed(2));
                cid[2][1] = cid[2][1] - 0.1;
            } else {
                break;
            }
        }
        cid[2][1] = parseFloat((previousAmount - cid[2][1]).toFixed(2));
        remaining2 = previousAmount - (cid[2][1])
        change.push(cid[2]);
    }
    if (dif >= 0.05) {
        let previousAmount = parseFloat((cid[1][1]).toFixed(2));
        while (dif >= parseFloat((0.05).toFixed(2))) {
            if ((cid[1][1] - 0.05) >= 0) {
                dif = parseFloat((dif - 0.05).toFixed(2));
                cid[1][1] = parseFloat((cid[1][1] - 0.05).toFixed(2));
            } else {
                break;
            }
        }
        cid[1][1] = parseFloat((previousAmount - cid[1][1]).toFixed(2));
        remaining1 = previousAmount - (cid[1][1])
        change.push(cid[1]);
    }
    if (dif >= 0.01) {
        let previousAmount = parseFloat((cid[0][1]).toFixed(2));
        while (dif >= parseFloat((0.01).toFixed(2))) {
            if ((cid[0][1] - 0.01) >= 0) {
                dif = parseFloat((dif - 0.01).toFixed(2));
                cid[0][1] = parseFloat((cid[0][1] - 0.01).toFixed(2));
            } else {
                break;
            }
        }
        cid[0][1] = parseFloat((previousAmount - cid[0][1]).toFixed(2));
        remaining0 = previousAmount - (cid[0][1])
        change.push(cid[0]);
    }
    if (dif > 0) {
        objectInsufficient.status = "INSUFFICIENT_FUNDS";
        return objectInsufficient;
    } else if (remaining0 + remaining1 + remaining2 + remaining3 + remaining4 + remaining5 + remaining6 + remaining7 + remaining8 == 0) {
        objectClosed.status = "CLOSED";
        return objectClosed;
    } else {
        objectOpen.status = "OPEN";
        return objectOpen;
    }
}



// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
