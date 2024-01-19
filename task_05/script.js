// TASK DAY _ 05 

// Task 1
console.log("-----TASK 1 ------");

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getPG(movies) {
      const pgMovies = [];
  
      for (let i = 0; i < movies.length; i++) {   
        if (movies[i].rating === "PG") {
          pgMovies.push(movies[i]);
        }   
      }  
  
      return pgMovies;
    }
  }
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4", "PG"),
  ];
  
  const pgMoviesArray = casinoRoyale.getPG(moviesArray);
  
  console.log(casinoRoyale);
  console.log(pgMoviesArray);
  
  
  console.log("-----TASK 2 ------");
  // Task 2
  
  // Convert the UML diagram to class. - use number for double  
  
  class Circle {
      radius = 1.0;     

      color = "red"; 

      constructor(radius, color) {
        if (radius !== undefined) {
          this.radius = radius;
        }
    
        if (color !== undefined) {
          this.color = color;
        }
      }
    
      getRadius() {
        return this.radius;
      }   
    
      setRadius(radius) {
        this.radius = radius;
      }
    
      getColor() {
        return this.color;
      }
    
      setColor(color) {   
        this.color = color;
      }
    
      toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
      }
      
      getArea() {
        return Math.PI * Math.pow(this.radius, 2);
      }
    
      getCircumference() {
        return 2 * Math.PI * this.radius; 
      }
    }
    
    
    const myCircle = new Circle();
    console.log(myCircle.toString());
    
    const anotherCircle = new Circle(5, "blue");
    console.log(anotherCircle.toString());
    console.log("Area:", anotherCircle.getArea());
    console.log("Circumference:", anotherCircle.getCircumference());    

// Task 3
console.log("-----TASK 3 ------");

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


console.log("-----TASK 4 ------");  
// Task 4 

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
