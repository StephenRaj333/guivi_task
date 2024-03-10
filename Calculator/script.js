
const MainContainer = document.createElement('div');
MainContainer.setAttribute("class","container");
document.body.appendChild(MainContainer);   
const H1 = document.createElement('h1');
H1.innerHTML = "Calculator";
MainContainer.appendChild(H1); 

const calculator = document.createElement('div');
calculator.setAttribute("class", "calculator");
calculator.setAttribute("id", 'calculator');
MainContainer.appendChild(calculator);
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.id = 'input';
inputField.readOnly = true;
calculator.appendChild(inputField);

const buttonValues = [
    ['C', '<', '.', '*'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '00', '='],
];

buttonValues.forEach(rowValues => {
    const row = document.createElement('div');
    row.classList.add('row');
    rowValues.forEach(value => {
        const button = document.createElement('button');
        button.textContent = value;
        button.classList.add('button');
        button.onclick = () => {
            if (value === 'C') {
                clearInput();
            } else if (value === '=') {
                calculate();
            } else {
                addToInput(value);
            }
        };
        row.appendChild(button);
    });
    calculator.appendChild(row);
});


function addToInput(value) {
    inputField.value += value;
}

function clearInput() {
    inputField.value = '';
}

function calculate() {
    try {
        const result = eval(inputField.value);
        inputField.value = result;  
    } catch (error) {
        alert("Invalid expression!");
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const keyCode = event.code;

    if (!isNaN(key) || ['+', '-', '*', '/', 'Enter'].includes(key) || keyCode === 'Backspace') {
        if (key === 'Enter') {
            calculate();
        } else if (keyCode === 'Backspace') { 
            inputField.value = inputField.value.slice(0, -1); 
        } else {
            addToInput(key);
        }
    } else {
        alert("Only numbers and operators are allowed!");
    }
});
