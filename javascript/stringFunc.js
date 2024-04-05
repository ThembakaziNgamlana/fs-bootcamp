let userName = "Alice"
let message = "Welcome, "
let from = "";
let text = "";

function sendMsg(){
    let message = "Welcome , " + userName;
    console.log(message);
}

sendMsg(); //Always call// Initialize the variable in oder to //get return values

function showMessage(){
    userName = "Bob"
    console.log(message, userName)
}

showMessage()//Always call// Initialize the variable in oder to //get return values
console.log(message, userName)

function sendMsg(from, text){
    from = "Anonymous, "
    text = "Welcome to the channel!"

    return from, text 
}

console.log(sendMsg())