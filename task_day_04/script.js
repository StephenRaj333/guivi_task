
// Create your own resume data 

const Stephen_resume = {
    Name: "Stephen",
    Father_Name: "Velumayil",
    Gender: "Male",
    Contact: {
      Mail: "stephenvijay093@gmail.com",
      Phone : "7339158278"
    },
    Education: [
      {
        Level: "School",
        Graduate: "12th"
      },
      {
        Level: "College",
        Graduate: "B.A English"
      }
    ],
    Hobbies: ["Cricket", "Music", "Coding", "Lights"],
    Jobs_Preference: {  
      Position : "Developer",
      Tech_Stack :  ["HTML","CSS","JS","React","Angular"]
    }
  }  

// for mapping into Object using for loop im converting object into array in the below method   

const ObjectKeys = Object.keys(Stephen_resume);     

const ObjectValues = Object.values(Stephen_resume);       

// now i can use Basic for loop  

console.log("----------------- USING FOR LOOP -----------------");   

for(let i = 0;i<ObjectValues.length;i++) {
    console.log(ObjectValues[i]); 
}

//  im directly looping the  object 

console.log("----------------- USING FOR IN LOOP -----------------");  

for(let key in Stephen_resume) { 
    console.log(Stephen_resume[key])
}

// im calling a string from ObjectValues loop to perform the looping on a string

console.log("----------------- USING FOR OF LOOP -----------------");   

const LoopthisString =  ObjectValues[3].Mail;

for(let key of LoopthisString) {
    console.log(key);   
}   

// cconverting the object into array for using looping using for each function 

console.log("----------------- USING FOR EACH LOOP -----------------");   

const ObjectkeyValuesPairs = Object.entries(Stephen_resume);    

ObjectkeyValuesPairs.forEach((val,key,arr) => 
    console.log(val,key)
) 
