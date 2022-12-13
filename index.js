const display = document.querySelector("#display");
const numberButton = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equalSign");
const clear = document.querySelector(".clear");
const deleteLast = document.querySelector(".delete");
let a = "";
let b = "";
let c = "";
let operatorClicked = false;
let operation = "";

function add() {
    c = parseInt(a) + parseInt(b);
};

function subtract() {
    c = a - b;
};

function multiply() {
    c = a * b;
};

function divide() {
    c = a / b;
};

for (let number of numberButton) {
    number.addEventListener("click", () => {
        if (display.innerText == "( ͡° ͜ʖ ͡°)" || display.innerText == c) display.innerText = "";
        if(operatorClicked == true) {
            b += number.innerText;
            display.innerHTML = b;
            return;
        }
        display.innerHTML += number.innerText;
    });
};

for (let operator of operators) {
    operator.addEventListener("click", () => {
        if (operatorClicked == true) {
            if (operation == "+") add();
            else if (operation == "-") subtract();
            else if (operation == "*") multiply();
            else if (operation == "/") divide();
            a = c;
            b = "";
            c = ""; 
            operation = operator.innerText;
            return;       
        };
        operation = operator.innerText;
        a = display.innerText;
        operatorClicked = true;
    });
};

equalSign.addEventListener("click", () => {
    if (operation == "/" && b == 0) {
        display.innerText = "( ͡° ͜ʖ ͡°)";
        a = "";
        b = "";
        operatorClicked = false;
        return
    };
    if (operation == "+") add();
    else if (operation == "-") subtract();
    else if (operation == "*") multiply();
    else if (operation == "/") divide();
    a = c;
    b = "";
    display.innerText = c;
    operation = "";
    operatorClicked = false;
});

clear.addEventListener("click", () => {
    operation = "";
    operatorClicked = false;
    display.innerText = "";
    a = "";
    b = "";
    c = "";
});

deleteLast.addEventListener("click", () => display.innerText = display.innerText.slice(0, -1))