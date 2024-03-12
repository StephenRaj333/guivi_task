

const Container = document.createElement('div');    
Container.setAttribute('class',"container");    
document.body.appendChild(Container);   

const Topic = document.createElement('h3');
Topic.textContent = "Counter using call back hell"; 
Topic.style.textAlign = "center"; 
Container.appendChild(Topic);

const TimerText = document.createElement('h2'); 
Container.appendChild(TimerText);  

const HeadingText = document.createElement('h1');   
Container.appendChild(HeadingText);  

let Timer = 1000;      

function CallBackHell() {   
  setTimeout(() => {
    TimerText.textContent = 10;
    setTimeout(() => {
        TimerText.textContent = 9;
      setTimeout(() => {
        TimerText.textContent = 8;
        setTimeout(() => {
            TimerText.textContent = 7;
          setTimeout(() => {
            TimerText.textContent = 6;
            setTimeout(() => {
                TimerText.textContent = 5;
              setTimeout(() => {    
                TimerText.textContent = 4;
                setTimeout(() => {
                    TimerText.textContent = 3;
                  setTimeout(() => {
                    TimerText.textContent = 2;
                    setTimeout(() => {
                        TimerText.textContent = 1;  
                      setTimeout(() => {
                        HeadingText.textContent = "Happy Independence Day"; 
                        TimerText.textContent = "";
                      }, Timer);    
                    }, Timer);
                  }, Timer);
                }, Timer);
              }, Timer);
            }, Timer);
          }, Timer);
        }, Timer);
      }, Timer);
    }, Timer);
  }, 0); 
}

document.addEventListener("DOMContentLoaded",() => {
    CallBackHell();
})



