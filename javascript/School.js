let school={
    name: "Secunda Secondary School",
    established: "199",
    location: "Mpumalanga",
    learners: 100,

    displayinginfo: function(){
        console.log(`The name of school is ${school.name} 
         ${"\n"} located at
         ${school.location} established at ${school.established})`)
    },//End of function displayinfo

    hardData: function(){
      console.log("The name of school is " +  school.name + "\n" +
      "located at "  + school.location)
    },

    notationData: function(){
        console.log("The name of school " + school['name'] + "\n" +
        "located at " 
     )
    }
}

     
//End of Object

school.displayinginfo()

 