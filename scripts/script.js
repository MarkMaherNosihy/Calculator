
let firstNum, secondNum, operator, res;

const displayText = document.querySelector('.display h1');
const clearBtn = document.querySelector('.clear');
const numbersBtns = document.querySelectorAll('.buttons .num');
const opBtns = document.querySelectorAll('.buttons .op');
const eqlBtn = document.querySelector('.eql');
const decimalBtn = document.querySelector('.decimal');

function add(a, b)
{
    return a+b;
}
function subtract(a, b)
{
    return a-b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function clearButton()
{
    displayText.innerHTML = "0";
    firstNum = undefined;
    operator = undefined;
    secondNum = undefined;
}
function reset()
{
    firstNum = undefined;
    operator = undefined;
    secondNum = undefined;
}
function updateDisplay(number)
{
    displayText.innerHTML = number;
}



function captureClickedNumber(e)
{
    e.addEventListener('click', ()=>
    {
        let clickedNum = e.innerHTML;
        if(firstNum === undefined){
            firstNum = clickedNum;
            updateDisplay(firstNum);
        }
        else if(operator === undefined)
        {
            firstNum = firstNum.concat(clickedNum);
            updateDisplay(firstNum);
        }
        else if (secondNum === undefined)
        {
            secondNum = clickedNum;
            updateDisplay(secondNum);
        }
        else{
            secondNum = secondNum.concat(clickedNum);
            updateDisplay(secondNum);
        }
    });
}
function captureClickedOp(e)
{
    e.addEventListener('click', ()=>
    {
        //Check if user entered the operator first then don't do anything.
        if(firstNum === undefined) return;

        //Set operator if and only if secondNumber is not yet assigned.
        if(operator === undefined || (operator !== undefined && secondNum === undefined))
        {
            operator = e.innerHTML;
        }
        else 
        {
            //Calculate the first pair and view it to the user and replace firstNum with the result.
            res = operate(parseInt(firstNum), parseInt(secondNum), operator);
            firstNum = res;
            secondNum = undefined;
            updateDisplay(firstNum);
            operator = e.innerHTML;
        }
    })
}

function operate(a, b, operation)
{
    switch(operation)
    {
        case '+':
           return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}
console.log(firstNum);
clearBtn.addEventListener('click', clearButton);
numbersBtns.forEach(captureClickedNumber);
opBtns.forEach(captureClickedOp);
eqlBtn.addEventListener('click', ()=>
{
        if(firstNum !== undefined && secondNum !== undefined)
        {
            res = operate(parseFloat(firstNum), parseFloat(secondNum), operator);
            updateDisplay(res);
            reset();
        }
})