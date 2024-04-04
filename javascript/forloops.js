let courses = ["Javascript", "Java", "Angular", "React"];
let i ;//Counter for the for-loop
let length = courses.length; //total Number course (Array
let space = " ";//Home made space



for(i=0; i<length;i++){
   courses[i]+= space
   //
}
console.log(courses)


//Lets display text five times according to number of days in week
const n=5

for (let i=1; i<=n; i++){
    console.log(`Lets code in JavaScript ` + i + ' days of week')
}