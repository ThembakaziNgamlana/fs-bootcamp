const Person={
   //data properties
   //Key  Value
  firstName: 'Alice',

get getName() {
     return this.firstName;
}
,
set changeName(newName){//A parameter for re-assigning or mapping new values
this.firstName = newName //take the firstName and re
}
}

//Set method
console.log(Person)//This is just an object
console.log(Person.firstName)
console.log(Person.getName);

Person.newName = "Alice"
console.log(Person.firstName)