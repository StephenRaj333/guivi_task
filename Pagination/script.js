
const perPage = 5;  
let currentPage = 1;        

function fetchData(page) {
    fetch(`https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json`)
    .then(response => response.json())
    .then(data => {
        showData(data, page);   
        renderPagination(data.length);
    })
    .catch(error => console.error('Error fetching data:', error));  
}

function showData(data, page) { 
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    const start = (page - 1) * perPage;
    const end = start + perPage;    

    for (let i = start; i < end; i++) {
        if (data[i]) {
            const item = document.createElement('div');
            item.setAttribute('class',"card");
            const CardBody = document.createElement('div')
            CardBody.setAttribute("class",'card-body'); 
            const Image = document.createElement('img');
            Image.setAttribute("class",'card-img-top');
            Image.src = "https://picsum.photos/200";    
            CardBody.appendChild(Image);
            const CardTitle = document.createElement('h5');
            CardTitle.setAttribute("class","card-title");
            const CardText = document.createElement('p');
            CardText.setAttribute("class",'card-text');
            CardText.innerHTML = data[i].name;
            CardTitle.innerHTML = data[i].email;
            container.appendChild(item);
            item.appendChild(CardBody)
            CardBody.appendChild(CardTitle);
            CardBody.appendChild(CardText);
        }
    }
}

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / perPage);
    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    const prevButton = document.createElement('li');
    prevButton.innerHTML = '<button>&laquo; Prev</button>';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchData(currentPage); 
        }
    });

    paginationElement.appendChild(prevButton);  

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.setAttribute("class","btn btn-primary");
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            fetchData(currentPage);
        });
        li.appendChild(button);
        paginationElement.appendChild(li);
    }

    const nextButton = document.createElement('li');
    nextButton.innerHTML = '<button>Next &raquo;</button>';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchData(currentPage);
        }
    });
    paginationElement.appendChild(nextButton);
}   

document.addEventListener('DOMContentLoaded', () => {
    const MainContainer = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = "Pagination";  
    MainContainer.appendChild(h1);  
    document.body.appendChild(MainContainer);
    MainContainer.setAttribute("class","container");
    const dataContainer = document.createElement('div');
    dataContainer.id = 'data-container';
    const paginationList = document.createElement('ul');
    paginationList.id = 'pagination';
    paginationList.classList.add('pagination'); 
    MainContainer.appendChild(dataContainer);
    MainContainer.appendChild(paginationList);
    

    fetchData(currentPage);
}); 
