let greetings = "Hello Fs Cohort"; //Variable 1
let times = 5;// Condition for comparision
//Block scope
//False And True = false
if(times ==5 && times >5){
    greetings = "Hi So and so "; // Variable 2
  console.log(greetings);
 //end of block scope  
}else{
    console.log(greetings + " "+ "The value is false");
}

var hello= "Welcome note"
//False or True = True
if(times ==5 || times>5){
hello = "Welcome to Javascript"


console.log(greetings + " : " + hello);

}else{
    console.log(hello + " " + "Value is false") 
}

if(times !=5){
    console.log(greetings + " : " + "Guesswork")
}else{
    console.log("I knew it !!!")
}