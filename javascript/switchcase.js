//Simple calculator using JS and switch case

//we need this libary module to accept user input
const prompt =require('prompt-sync')();

let results;
//accept the operator input 
const operator= prompt(' enter operator (either +, -, *, or /)');

//accept an operand input
const num1= parseFloat(prompt('Enter the first number: '));
const num2= parseFloat(prompt('Enter the second number: '));

switch(operator){
    //Formula for addition
    case '+':
    results = num1 + num2;
    console.log(`${num1} + ${num2}=${results}`);
    break;
 //Formula for  substration
    case '-':
        results = num1 - num2;
        console.log(`${num1} - ${num2}=${results}`);
        break;  
// Formula for multiplication
        case '*':
            results = num1 * num2;
            console.log(`${num1} * ${num2}=${results}`);
            break; 
// Formula for division
            case '/':
                results = num1 / num2;
                console.log(`${num1} / ${num2}=${results}`);
                break; 

// Formula for exponetial 
       case '^':
         results = num1 ** num2;
         console.log(`${num1} ** ${num2}=${results}`);
         break;  
}

