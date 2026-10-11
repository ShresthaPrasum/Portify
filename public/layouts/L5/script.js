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
        <span class="output-user"> clear </span> - <strong> Clears the screen </strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> about </span> - <strong> To Know about me </strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> skills </span> - <strong> Lists all of my skills</strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> project1 </span> - <strong> Lists my 1st project infos </strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> project2 </span> - <strong> Lists my 2nd project infos </strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> project3 </span> - <strong> Lists my 3rd project infos </strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> project4 </span> - <strong> Lists my 4th project infos </strong>
         </p>
         <p class="result-line"> 
        <span class="output-user"> contact </span> - <strong> Lists the mediums from where you can contact me! </strong>
         </p>
        `;
        result.insertAdjacentHTML('beforeend',helpoutput);
        
    }else if(commandinput.toLowerCase()==="about"){
        const aboutoutput = `
        <br>
        <p class="result-line">
        <span class="output-user"> name@portfolio </span>
        <span class="output-design"> :-$ </span>
        about
        </p>
        <h2 class="aboutme result-line"> About Me </h2>
        <p class="result-line bio"> I am a blah blah blah </p>
        <img src=".." alt="">
        `;
        result.insertAdjacentHTML('beforeend', aboutoutput);

    }else if(commandinput==="skills"){
        const skillsoutput = `
        <br>
        <p class="result-line">
        <span class="output-user"> name@portfolio </span>
        <span class="output-design"> :-$ </span>
        skills
        </p>
        <h2 class="aboutme result-line"> My Skills </h2>
        <p class = "result-line output-user">• All skills </p>

        `;
        result.insertAdjacentHTML('beforeend', skillsoutput);

    }else if(commandinput==="project1"){
        const projectoutput = `
        <br>
        <p class="result-line">
        <span class="output-user"> name@portfolio </span>
        <span class="output-design"> :-$ </span>
        project1
        </p>
     <!--   <h2 class="aboutme result-line">My Projects</h2> -->
        <h2 class="result-line output-user"> <strong> Project No.1 </strong> </h2>
            <p class="result-line">  
            <strong> Description: </strong> 
            Description
            </p>
            <p class="result-line">
            <strong> Demo: </strong>
            link
            </p>
            <p class= "result-line">
            <strong> Github: </strong>
            link
            </p>
            `;
            result.insertAdjacentHTML('beforeend', projectoutput);

    }else if(commandinput==="project2"){
        const projectoutput = `
        <br>
        <p class="result-line">
        <span class="output-user"> name@portfolio </span>
        <span class="output-design"> :-$ </span>
        project1
        </p>
     <!--   <h2 class="aboutme result-line">My Projects</h2> -->
        <h2 class="result-line output-user"> <strong> Project No.2 </strong> </h2>
            <p class="result-line">  
            <strong> Description: </strong> 
            Description
            </p>
            <p class="result-line">
            <strong> Demo: </strong>
            link
            </p>
            <p class= "result-line">
            <strong> Github: </strong>
            link
            </p>
            `;
            result.insertAdjacentHTML('beforeend', projectoutput);

    }else if(commandinput==="project3"){
        const projectoutput = `
        <br>
        <p class="result-line">
        <span class="output-user"> name@portfolio </span>
        <span class="output-design"> :-$ </span>
        project1
        </p>
     <!--   <h2 class="aboutme result-line">My Projects</h2> -->
        <h2 class="result-line output-user"> <strong> Project No.3 </strong> </h2>
            <p class="result-line">  
            <strong> Description: </strong> 
            Description
            </p>
            <p class="result-line">
            <strong> Demo: </strong>
            link
            </p>
            <p class= "result-line">
            <strong> Github: </strong>
            link
            </p>
            `;
            result.insertAdjacentHTML('beforeend', projectoutput);

    }else if(commandinput==="project4"){
        const projectoutput = `
        <br>
        <p class="result-line">
        <span class="output-user"> name@portfolio </span>
        <span class="output-design"> :-$ </span>
        project1
        </p>
     <!--   <h2 class="aboutme result-line">My Projects</h2> -->
        <h2 class="result-line output-user"> <strong> Project No.4 </strong> </h2>
            <p class="result-line">  
            <strong> Description: </strong> 
            Description
            </p>
            <p class="result-line">
            <strong> Demo: </strong>
            link
            </p>
            <p class= "result-line">
            <strong> Github: </strong>
            link
            </p>
            `;
            result.insertAdjacentHTML('beforeend', projectoutput);

    }else if(commandinput==="contact"){
        const contactoutput = `
            <br>
            <p class="result-line">
            <span class="output-user"> name@portfolio </span>
            <span class="output-design"> :-$ </span>
            contact
            </p>
            <h2 class="aboutme result-line"> Contact Me </h2>
            <p class="result-line location"> <strong> Location </strong>: </p>
            <p class="result-line"> <strong> Github </strong>: link </p>
            <p class="result-line linkedin"> <strong> Linked In </strong>: </p>
            <p class="result-line mail"> <strong> Mail </strong>: </p>
            <p class="result-line phoneno"> <strong> Phone No </strong>: </p> 
        `;
        return result.insertAdjacentHTML('beforeend', contactoutput);
    } else if(commandinput==="clear"){
        result.innerHTML = ``;
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