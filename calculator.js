let add = document.getElementById('add');
let sub = document.getElementById('sub');
let mul = document.getElementById('mul');
let div = document.getElementById('divi');
let ac = document.getElementById('allclear');
let del = document.getElementById('delete');
let ans = document.getElementById('answer');
let display = document.getElementById('display');
let deci = document.getElementById('deci');
let buttons = document.querySelectorAll('.button');

let result = '';
let operator = '';
let previousOperator = 0;

const appendnumbers = (number) =>{
    if(number === '.' && result.includes('.')){
        return;
    }
    else{
        result += number;
        updatedisplay();
    }
}

const updatedisplay = ()=>{
    if(operator){
        display.innerHTML = `${previousOperator} ${operator} ${result}`;
    }
    else{
        display.innerHTML = result;
    }
}

buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        appendnumbers(button.value);
        // display.innerHTML = button.value;
    })
})

const selectoperator= (operatorvalue)=>{
    if (result === '') return;
    if(operator !== ''  && result !==''){
        calculateResult();
    }
        previousOperator = result;
        operator = operatorvalue;
        result = '';
        updatedisplay();
}

const calculateResult = ()=>{
    let finalResult;
    const pre = Number(previousOperator);
    const current  = Number(result);
    if(isNaN(pre) || isNaN(current)) result;

    switch(operator){
        case '+':
            finalResult = pre + current;
            break;
        case '-':
            finalResult = pre - current;
            break;
        case '*':
            finalResult = pre * current;
            break;
        case '/':
            finalResult = pre / current;
            break;
        default:
            break;
    }

    result = finalResult.toString();
    operator=''
    previousOperator ='';
}



ac.addEventListener('click',()=>{
    result ='';
    operator ='';
    previousOperator = 0;
    updatedisplay();
})


del.addEventListener('click',()=>{
    result = result.slice(0,-1);
    if(result === ''){
        result = previousOperator
        operator = ''
    }
    updatedisplay();
})
// del.addEventListener('click',()=>{
//     result = result.slice(0,-1);
//     updatedisplay();
// })

deci.addEventListener('click',()=> appendnumbers('.'));

add.addEventListener('click',()=>selectoperator('+'));
sub.addEventListener('click',()=>selectoperator('-'));
mul.addEventListener('click',()=>selectoperator('*'));
div.addEventListener('click',()=>selectoperator('/'));

ans.addEventListener('click',()=>{
    if(result === '') return;
    calculateResult();
    updatedisplay();
})