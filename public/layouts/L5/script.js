let form = document.querySelector('#input-form');
form.addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
    event.preventDefault();
    let commandinput = document.querySelector('#input-area').value;
    let result = document.querySelector('.result');

    if(commandinput.toLowerCase()==='help'){
        const helpoutput = `
        <br>
         <p class="result-line">
         <span class="output-user"> name@portfolio </span>
         <span class="output-design"> :-$ </span>
         help</p>
         <p class="result-line grey">
         There are several commands to see my portfolio which are listed below :)
         </p>
         <p class="result-line"> 
        <span class="output-user"> ls </span> - <strong> Lists all the sections </strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> about </span> - <strong> To Know about me </strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> skills </span> - <strong> Lists all of my skills</strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> projects </span> - <strong> Lists my best projects </strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> contact </span> - <strong> Lists the mediums from where you can contact me! </strong>
         </p>
        `;
        result.insertAdjacentHTML('beforeend',helpoutput);
        
    }else{
        const otheroutput = `
        <br>
        <p class="result-line>
        <span class="output-user"> name@portfolio </span>
        <span class="output-design"> :-$ </span>
        ${commandinput.toLowerCase()}
        </p>
        <p class="result-line red"> Error: Command not found </p>
        `;
        result.insertAdjacentHTML('beforeend', otheroutput);
    }

    }
    
})