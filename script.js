           // assign variable names to elements

            const demo = document.querySelector('#demo');
            const input = document.querySelector('#input');
            const button = document.querySelector('#submit');
            const body = document.querySelector('#body');
            const container = document.querySelector('.container');
            const light = document.querySelector('#light');
            const toDoContainer = document.querySelector('.todoContainer');
            
            // creating a new element<p> and appending it to the parent element when add button is clicked

            button.addEventListener('click', function (){
                let paragraph = document.createElement('p');
                paragraph.innerText = ' ■ ' + input.value;
                container.appendChild(paragraph);
                input.value=" "; // when the add button is clicked it the input bar should return an empty bar 

                //deleting the Paragraph tag <p>  when clicked on
                paragraph.addEventListener('click', function(){     
                    container.removeChild(paragraph);
                })
            })
            //setting the the demo Paragraph tag <p> to a style of display none  when clicked on
            demo.addEventListener('click' , function(){
                demo.style.display="none";
            })

            // create a condition

            let status = 1;

            light.addEventListener('click' , function(){
                if (status == 1){  //using the condition to make an argument
                    container.style.backgroundColor="black";
                    container.style.color="white";
                    light.style.backgroundColor="white";
                    body.style.backgroundColor="white";
                    light.style.color="black";
                    status = 0;
                }else{
                    container.style.backgroundColor="white";
                    container.style.color="black";
                    light.style.backgroundColor="black";
                    body.style.backgroundColor="black";
                    light.style.color="white";
                    status = 1;
                }
            })


            const splashScreen = document.querySelector('.splash-screen');
            const progress = document.querySelector('.progress');
            let width = 0;
            
            let interval = setInterval(function() {
                if(width ==  100 ){
                    clearInterval(interval);
                    splashScreen.style.display="none";
                    container.style.visibility = 'visible';
                } else{
                    width = width + 10;
                    progress.style.width = width + '%';
                }
            }, 500);
