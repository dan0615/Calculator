let currentNumber='';
let previousNumber='';
let operator='';
        
const numButtons=document.querySelectorAll(".number");
const opButtons=document.querySelectorAll(".operator");
const eqButton=document.querySelector(".equals");
const clrButton=document.querySelector(".clear");
const display=document.querySelector(".display");

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentNumber += button.innerText;
        display.innerText = currentNumber;
    });
});
opButtons.forEach(button => {
    button.addEventListener("click", () => {
        previousNumber=currentNumber;
        currentNumber='';
        operator=button.innerText;
        display.innerText=operator;
    });
});
eqButton.addEventListener("click", () => {
    let result;
    const prev=parseFloat(previousNumber);
    const curr=parseFloat(currentNumber);

    switch(operator)
        {
        case '+':
            result=prev+curr;
            break;
        case '-':
            result=prev-curr;
            break;
        case "*":
            result=prev*curr;
            break;
        case '/':
            result=prev/curr;
            break;
        }
    display.innerText=result;
    currentNumber=result.toString();
    previousNumber='';
});
clrButton.addEventListener("click", () => {
    currentNumber='';
    previousNumber='';
    operator='';
    display.innerText='0';
});