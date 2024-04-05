let prompt = require("prompt-sync")();
//Lets write a program that will check if the user is old enough access the site


let age= prompt("How old are you?", 18)

function checkAge(age){

    if(age>=18){
       return true
    }else{
        return console.log("You do not have permission from your parents")
    }
}
    if(checkAge(age)){
        console.log("Access is grated")
    }else {
    console.log("Access is denied!!")
    }

    function showMovie(){
      let d = 100
      let i= 0
      for(i=100000;i>d;i--){
        console.log("Access is grated");
        console.log("Playing a movie times" , i);
      }
       
    }
    showMovie();
