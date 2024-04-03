const gpa = 51
const pass_mark = 50
const exp = 70;
const dist= 85;
const avg= 50; 
const fail= 49;
const dnw= 0;

if( gpa >= dist){
    console.log("You passed with distinction")
 }else if(gpa >=avg ) {
   console.log( "You have pass above the pass_mark");
 }else if(gpa > avg && gpa === exp){
    console.log("You have pass with expemption")
 }
else  if(gpa ===avg || gpa >avg) {
    console.log("You have pass with average mark");
}else if(gpa < pass_mark && gpa < 0){
    console.log("You did not write")
}else{
    console.log("You have failed")
}