const MainContainer = document.createElement('div');
MainContainer.setAttribute("class","container");
document.body.appendChild(MainContainer);

const Form = document.createElement('form'); 
MainContainer.appendChild(Form);

const FormContainer = document.createElement("div");
const FormHeading = document.createElement("h1");
FormHeading.innerHTML = "Form";
FormContainer.appendChild(FormHeading);
FormContainer.setAttribute("class","form-container"); 
Form.appendChild(FormContainer);    

const FormGroup1 = document.createElement('div');
FormGroup1.setAttribute("class","form-group"); 
Form.appendChild(FormGroup1);   

const FirstNameLabel = document.createElement('label'); 
FirstNameLabel.htmlFor = "firstName";
FirstNameLabel.innerHTML = "FirstName";
const FirstNameInput = document.createElement("input"); 
FirstNameInput.type = "text"; 
FirstNameInput.name = "firstName";
FormGroup1.appendChild(FirstNameLabel);
FormGroup1.appendChild(FirstNameInput);


const FormGroup2 = document.createElement('div');
FormGroup2.setAttribute("class","form-group"); 
Form.appendChild(FormGroup2);

const LastNameLabel = document.createElement('label'); 
LastNameLabel.htmlFor = "lastName";   
LastNameLabel.innerHTML = "LastName"; 
const LastNameInput = document.createElement("input"); 
LastNameInput.type = "text";  
LastNameInput.name = "lastName";  
FormGroup2.appendChild(LastNameLabel); 
FormGroup2.appendChild(LastNameInput); 

const FormGroup3 = document.createElement('div');
FormGroup3.setAttribute("class","form-group"); 
Form.appendChild(FormGroup3);


const AddressLabel = document.createElement('label'); 
AddressLabel.htmlFor = "address";   
AddressLabel.innerHTML = "Address";  
const AddressTextArea = document.createElement('textarea');  
AddressTextArea.type = "text";      
AddressTextArea.name = "address";      
FormGroup3.appendChild(AddressLabel); 
FormGroup3.appendChild(AddressTextArea); 

const FormGroup4 = document.createElement('div');   
FormGroup4.setAttribute("class","form-group"); 
Form.appendChild(FormGroup4); 

const PincodeLabel = document.createElement('label'); 
PincodeLabel.htmlFor = "pin";   
PincodeLabel.innerHTML = "Pincode";  
const PinInput = document.createElement('input');   
PinInput.type = "text";      
PinInput.name = "pin";      
FormGroup4.appendChild(PincodeLabel); 
FormGroup4.appendChild(PinInput);    

const FormGroup5 = document.createElement('div');   
FormGroup5.setAttribute("class","form-group"); 
Form.appendChild(FormGroup5); 

const LabelTag = document.createElement('h4');
LabelTag.innerHTML = "Gender";
LabelTag.style.margin = 0;
FormGroup5.appendChild(LabelTag);

const MaleGender = document.createElement("label");    
MaleGender.htmlFor = "male";    
MaleGender.innerHTML = "Male";
const MaleInput = document.createElement('input');      
MaleInput.type = "radio";
MaleInput.name = "gender";
MaleInput.value = "Male";
const FemaleGender = document.createElement("label");   
FemaleGender.htmlFor = "female"; 
FemaleGender.innerHTML = "Female";
const FemaleInput = document.createElement('input');    
FemaleInput.type = "radio";
FemaleInput.name = "gender";
FemaleInput.value = "Female";
FormGroup5.appendChild(MaleGender);
FormGroup5.appendChild(MaleInput);
FormGroup5.appendChild(FemaleGender);
FormGroup5.appendChild(FemaleInput);

const FormGroup6 = document.createElement('div');   
FormGroup6.setAttribute("class","form-group"); 
Form.appendChild(FormGroup6); 

const PLabel = document.createElement('h4'); 
PLabel.style.margin = 0;
PLabel.innerHTML = "Fruits";    

const Apple = document.createElement("label");    
Apple.htmlFor = "apple";    
Apple.innerHTML = "Apple";
const AppleInput = document.createElement('input');      
AppleInput.type = "checkbox";
AppleInput.name = "fruit"; 
AppleInput.value = "Apple";

const Mango = document.createElement("label");      
Mango.htmlFor = "mango"; 
Mango.innerHTML = "Mango"; 
const MangoInput = document.createElement('input');    
MangoInput.type = "checkbox";
MangoInput.name = "fruit";
MangoInput.value = "Mango";

const Orange = document.createElement("label");   
Orange.htmlFor = "orange"; 
Orange.innerHTML = "Orange"; 
const OrangeInput = document.createElement('input');    
OrangeInput.type = "checkbox";
OrangeInput.name = "fruit";
OrangeInput.value = "Orange";

const Grapes = document.createElement("label");   
Grapes.htmlFor = "grapes"; 
Grapes.innerHTML = "Grapes"; 
const GrapesInput = document.createElement('input');    
GrapesInput.type = "checkbox";
GrapesInput.name = "fruit";
GrapesInput.value = "Grapes";

const Melon = document.createElement("label");   
Melon.htmlFor = "melon"; 
Melon.innerHTML = "Melon"; 
const MelonInput = document.createElement('input');    
MelonInput.type = "checkbox"; 
MelonInput.name = "fruit"; 
MelonInput.value = "Melon"; 

FormGroup6.appendChild(PLabel);
FormGroup6.appendChild(Apple);
FormGroup6.appendChild(AppleInput);
FormGroup6.appendChild(Mango);
FormGroup6.appendChild(MangoInput);
FormGroup6.appendChild(Orange);
FormGroup6.appendChild(OrangeInput);
FormGroup6.appendChild(Grapes);
FormGroup6.appendChild(GrapesInput);
FormGroup6.appendChild(Melon);
FormGroup6.appendChild(MelonInput); 


const checkboxes = [AppleInput, MangoInput, OrangeInput, GrapesInput, MelonInput];
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const checkedCount = checkboxes.filter(cb => cb.checked).length;
        if (checkedCount > 2) {
            this.checked = false;
        }
    });
});     

const FormGroup7 = document.createElement('div');   
FormGroup7.setAttribute("class","form-group"); 
Form.appendChild(FormGroup7); 

const StateLabel = document.createElement('label');  
StateLabel.innerHTML = "State";
StateLabel.htmlFor = "state";
const StateInput = document.createElement("select");
StateInput.name = "state";  
FormGroup7.appendChild(StateLabel)
FormGroup7.appendChild(StateInput)
const StateOption1 = document.createElement('option'); 
StateOption1.value = "chennai";
StateOption1.innerHTML = "Chennai"
StateInput.appendChild(StateOption1)
const StateOption2 = document.createElement('option'); 
StateOption2.value = "erode";
StateOption2.innerHTML = "Erode"
StateInput.appendChild(StateOption2)
const StateOption3 = document.createElement('option'); 
StateOption3.value = "madurai"; 
StateOption3.innerHTML = "Madurai"; 
StateInput.appendChild(StateOption3) 

const FormGroup8 = document.createElement('div');   
FormGroup8.setAttribute("class","form-group"); 
Form.appendChild(FormGroup8);    


const CountryLabel = document.createElement('label');  
CountryLabel.innerHTML = "Country";
CountryLabel.htmlFor = "country";
const CountryInput = document.createElement("select");
CountryInput.name = "country";  
FormGroup8.appendChild(CountryLabel)
FormGroup8.appendChild(CountryInput)
const Option1 = document.createElement('option'); 
Option1.value = "India";
Option1.innerHTML = "India"
CountryInput.appendChild(Option1);  
const Option2 = document.createElement('option'); 
Option2.value = "Canada";
Option2.innerHTML = "Canada"
CountryInput.appendChild(Option2)
const Option3 = document.createElement('option'); 
Option3.value = "Israel";   
Option3.innerHTML = "Israel";   
CountryInput.appendChild(Option3) 

const FormGroup9 = document.createElement('div');   
FormGroup9.setAttribute("class","form-group"); 
Form.appendChild(FormGroup9);    

const SubmitButton = document.createElement('button');
SubmitButton.innerHTML = "Submit";
SubmitButton.setAttribute("class","btn");

FormContainer.appendChild(FormGroup1)
FormContainer.appendChild(FormGroup2)
FormContainer.appendChild(FormGroup3)
FormContainer.appendChild(FormGroup4)
FormContainer.appendChild(FormGroup5)
FormContainer.appendChild(FormGroup6)
FormContainer.appendChild(FormGroup7)
FormContainer.appendChild(FormGroup8)
FormContainer.appendChild(FormGroup9)
FormGroup9.appendChild(SubmitButton);   


const TableContainer = document.createElement('div');
TableContainer.setAttribute("class","table-container");
document.body.appendChild(TableContainer);

const table = document.createElement('table');
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();
const headers = ['First Name', 'Last Name', 'Address', 'Pincode', 'Gender', 'Fruit', 'State', 'Country'];

headers.forEach(headerText => {
    const th = document.createElement('th');
    const text = document.createTextNode(headerText);
    th.appendChild(text);
    headerRow.appendChild(th);
});

const TableHeading = document.createElement("h1");
TableHeading.innerHTML = "Table Data";
TableContainer.appendChild(TableHeading); 

TableContainer.appendChild(table);

function appendToTable(formData) {
    const row = table.insertRow();
    for (const value of Object.values(formData)) {
        const cell = row.insertCell();
        const text = document.createTextNode(value);    
        cell.appendChild(text);
    }
}

Form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const formData = {
        'First Name': FirstNameInput.value,
        'Last Name': LastNameInput.value,   
        'Address': AddressTextArea.value,
        'Pincode': PinInput.value,
        'Gender': document.querySelector('input[name="gender"]:checked').value,
        'Fruit': Array.from(document.querySelectorAll('input[name="fruit"]:checked')).map(fruit => fruit.value).join(', '),
        'State': StateInput.value,
        'Country': CountryInput.value
    };

    appendToTable(formData);

    Form.reset();
});   
