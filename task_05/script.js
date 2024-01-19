// TASK DAY _ 05 

// Task 1

class Person {
    constructor (name,email,age,place) {
        this.person_name = name;
        this.person_email = email;
        this.person_age = age;
        this.person_place = place;
    }
}

const person = new Person("Stephen","stephen@gmail.com",30,"Tamil Nadu");

console.log(person);

// Task 2 

class UberFareCalculator {
    constructor (carPreference,distancePerKm,waitingCharges) {
        this.uber_CarPreference = carPreference;
        this.uber_DistancePerKm = distancePerKm;
        this.uber_WaitingCharges = waitingCharges;
    }
    getUberFair () {
     const total = this.uber_CarPreference + this.uber_DistancePerKm + this.uber_WaitingCharges;  
     return total;  
    }   
}   

const Per_Passenger = new UberFareCalculator(200,300,50);  

const Total_Fair = Per_Passenger.getUberFair(); 

console.log(`Your Total Uber Fair is Rupees ${Total_Fair}`);  
