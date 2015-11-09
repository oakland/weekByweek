var arrOperator;

function plus() {
    arrOperator = document.getElementById('operator-plus').innerHTML;
    document.getElementById('display').value = arrOperator;
    return arrOperator
}

function minus() {
    arrOperator = document.getElementById('operator-minus').innerHTML;
    document.getElementById('display').value = arrOperator;
    return arrOperator
}

function multiply() {
    arrOperator = document.getElementById('operator-multiply').innerHTML;
    document.getElementById('display').value = arrOperator;
    return arrOperator
}

function div() {
    arrOperator = document.getElementById('operator-div').innerHTML;
    document.getElementById('display').value = arrOperator;
    return arrOperator
}
// ------------------------------运算符的方法 end-----------------------------

var arrBefore = new Array();
var arrAfter = new Array();
var num7 = document.getElementById('number7');
var num8 = document.getElementById('number8');
var num9 = document.getElementById('number9');
var num4 = document.getElementById('number4');
var num5 = document.getElementById('number5');
var num6 = document.getElementById('number6');
var num1 = document.getElementById('number1');
var num2 = document.getElementById('number2');
var num3 = document.getElementById('number3');
var num0 = document.getElementById('number0');
var numdot = document.getElementById('numberdot');

function add7() {
    if (arrOperator == null) {
        arrBefore.push(num7.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(num7.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}

function add8() {
    if (arrOperator == null) {
        arrBefore.push(num8.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(num8.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}

function add9() {
    if (arrOperator == null) {
        arrBefore.push(num9.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(num9.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}

function add4() {
    if (arrOperator == null) {
        arrBefore.push(num4.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(num4.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}

function add5() {
    if (arrOperator == null) {
        arrBefore.push(num5.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(num5.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}

function add6() {
    if (arrOperator == null) {
        arrBefore.push(num6.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(num6.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}

function add1() {
    if (arrOperator == null) {
        arrBefore.push(num1.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(num1.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}

function add2() {
    if (arrOperator == null) {
        arrBefore.push(num2.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(num2.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}

function add3() {
    if (arrOperator == null) {
        arrBefore.push(num3.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(num3.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}

function add0() {
    if (arrOperator == null) {
        arrBefore.push(num0.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(num0.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}

function adddot() {
    if (arrOperator == null) {
        arrBefore.push(numdot.innerHTML);
        document.getElementById('display').value = parseFloat(arrBefore.join(''));
    } else {
        arrAfter.push(numdot.innerHTML);
        document.getElementById('display').value = parseFloat(arrAfter.join(''));
    }
}


// ------------------------------数字的方法 end-----------------------------


function eq() {
    if (arrOperator == "+") {
        document.getElementById('display').value = parseFloat(arrBefore.join('')) + parseFloat(arrAfter.join(''));
    } else if (arrOperator == "-") {
        document.getElementById('display').value = parseFloat(arrBefore.join('')) - parseFloat(arrAfter.join(''));
    } else if (arrOperator == "*") {
        document.getElementById('display').value = parseFloat(arrBefore.join('')) * parseFloat(arrAfter.join(''));
    } else if (arrOperator == "/") {
        document.getElementById('display').value = parseFloat(arrBefore.join('')) / parseFloat(arrAfter.join(''));
    }
}

function cancel() {
    var arrBefore = [0];
    var arrOperator = "";
    var arrAfter = [0];
    document.getElementById('display').value = 0;
}
// ------------------------------等于的方法 end-----------------------------
