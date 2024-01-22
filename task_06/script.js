
// Task  

const xml = new XMLHttpRequest();
xml.open("GET","https://restcountries.com/v3.1/all");
xml.send();
xml.onload = function () {  
const xmlData = JSON.parse(xml.response);  


// A.)  Get all the countries from Asia continent /region using Filter function 

   const AsiaCountries =  xmlData.filter((data) => data.continents[0] === "Asia").map((data) => data.name.common); 
   const AsiaRegions =  xmlData.filter((data) => data.region === "Asia").map((data) => data.name.common); 
   console.log("----------Filtered All  Asian Countries----------");
   console.log(AsiaCountries);  // filtered by Continent     
   console.log("----------Filtered All  Asian Region----------");
   console.log(AsiaRegions);   // filtered by region 


   
// B.)  Get all the countries with a population of less than 2 lakhs using Filter function

   const CalcPopulation =  xmlData.filter((data) =>  data.population < 200000).map((data) => data.name.common); 
   console.log("----------Filtered All  Countries Population Less than 2LAKH's----------"); 
   console.log(CalcPopulation);     



// C.)  Print the following details name, capital, flag, using forEach function
    console.log("----------Printing All Name, Capital, Flag----------");            
    xmlData.forEach((data) => { 
        console.log(`Name: ${data.name.common}`); 
        console.log(`Capital: ${data.capital}`);
        console.log(`Flag: ${data.flag}`);  
    })



// D.) Print the total population of countries using reduce function    
    console.log("----------Printing Total Population of Countries----------");      
    const totalPopulation = xmlData.reduce((accumulator, country) => {
        const population = country.population ? parseInt(country.population) : 0;
        return accumulator + population;    
    }, 0);      

    console.log(totalPopulation);   



// E.) Print the country that uses US dollars as currency.  
    console.log("----------Printing All Countries having US Dollars as Currencies ----------");     
    xmlData.map((data) => {
            if(data.currencies?.USD) { 
                console.log(data.name.common);  
            }   
    });  
}        
