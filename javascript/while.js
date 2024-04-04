//Lets create program that calculates positive numbers only
//If a user enters  a negative number  that number is skipped
let prompt = require('prompt-sync')();

//negative numbers -> loop must terminate
//non numbers characters -> Skip iteration


let sum = 0;
let num = 0.1;
while(num > 0){
    sum += num



    //accept input from user
    num= parseInt(prompt('Enter a number:'));

    //continue condition NaN = not an number
    if(isNaN(num)){
        console.log('You entered a string that is not a number');
        num=0
       continue;
    }

}
console.log(`The sum is ${sum}`);


