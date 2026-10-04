const $ = (id) => document.getElementById(id);
        const detailInput = document.querySelectorAll('.detailInput');

        
        let file= null;

        let dataUrl = ''

        const themes = {
            bluez:`
                --bg: #0c2351;
                --bg-sections: #172b5d5e;
                --text: #fff;
                --button: rgb(195,26,26);
                --border: #44a2a8a2;
            `,
            midnight:`
                --bg: #171f45;
                --bg-sections: #151a2e;
                --text: #f5f7ff;
                --button: #6c63ff;
                --border: #ffffff1f;
            `
            ,
            ocean: `
                --bg: #1e4458;
                --bg-sections: #0c2935;
                --text: #e9fbff;
                --button: #00a6c7;
                --border: #31334caf;
            `
        }
        const state = {
            theme: 'ocean',
            name: '',
            bio: '',
            location: '',
            email: '',
            phoneno: '',
            github: '',
            linkedin: '',
            twitter: '',
            skills: '',
            photo: ''
        };

        const inputs = ['nameInput', 'bioInput', 'locationInput', 'emailInput', 'phonenoInput', 'githubInput', 'linkedinInput', 'twitterInput', 'skillsInput'];

        const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); // This is so complex than I expected used AI for this new thing

        const safeName = n => n.toLowerCase().replace(/[^a-z0-9._-]/g, "-"); // This too :)

        function construct(dataUrl) {
            const iframe = $('preview')
            const doc = iframe.contentDocument || iframe.contentWindow.document;

            const currentTheme = themes[state.theme] || themes.ocean;

            state.name = esc($("nameInput").value);
            state.bio = esc($("bioInput").value);
            state.location = esc($("locationInput").value);
            state.email = esc($("emailInput").value);
            state.phoneno = esc($("phonenoInput").value);
            state.github = esc($("githubInput").value);
            state.linkedin = esc($("linkedinInput").value);
            state.twitter = esc($("twitterInput").value);
            state.skills = esc($("skillsInput").value);
            state.phoneno = esc($("phonenoInput").value);
            state.photo =  dataUrl;

            const htmlContent =  `<!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${state.name} - Portfolio</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
            <style>
            :root{
            ${currentTheme}
            }
            
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            body{
                background-color: var(--bg);
                color: var(--text);
                font-family: 'Courier New', Courier, monospace;
            }
            nav{
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid var(--border);
                height: 70px;
                padding: 0 20px;
            }
            nav ul{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 80%;
                list-style: none;
                font-weight: bold
            }

            a{
                text-decoration: none;
                color: #fff;
            }

            .nav-right{
                display: flex;
                gap: 20px;
            }
            #introoo{
                display: flex;
                height: 80vh;
                align-items: center;
                justify-content: center;
                gap: 4rem;
                border-bottom: 2px solid var(--border);
            }
            #code-block{
                position: relative;
                height: 300px;
                width: 80%;
                max-width: 450px;
                font-size: 0.9rem;
                position: relative;
                background-color: #0d101b;
                border: 2px solid var(--border);
                border-radius: 16px;
                padding: 1.5rem;
            }
            .code-header{
                display: flex;
                padding-bottom: 0.75rem;
                margin-bottom: 1rem;
                border-bottom: 1px solid var(--border);
                gap: 0.5rem;
            }
            .code-red{
                border-radius: 50%;
                width: 12px;
                height: 12px;
                background-color: red;
            }
            .code-orange{
                background-color: orange;
                width: 12px;
                height: 12px;
                border-radius: 50%;
            }
            .code-green{
                background-color: green;
                width: 12px;
                height: 12px;
                border-radius: 50%;
            }
            .code-content{
                margin-top: 15px;
            }
            .keyword{
                color: #d73a49;
            }
            .string{
                color: #1ee24c;
            }
            .textt{
                color: #005cc5;
            }
            .code-line{
                margin-bottom: 10px;
            }
            
            #intro h2{
                font-size: 3.5rem;
            }
            #name{
                color: var(--button);
            }
            button{
                height: 45px;
                width: 120px;
                background-color: var(--button);
                border-radius: 16px;
                color: #fff;
                margin-top: 15px;
                font-weight: bold;
            }
            
            #about{
                display: flex;
                justify-content: center;
                gap: 4rem;
                font-family: "Poppins", sans-serif;
            }
            #title h1{
                font-size: 2.5rem;
                font-weight: 800; 
                border-bottom: 2px solid var(--border);
                margin-bottom: 60px;
                text-align: center;
            }
            #hero{
                height: max-content;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                width: 100%;
                padding: 5rem;
                border-bottom: 2px solid var(--border);
            }
            #your-image img{
                height: 500px;
                width: 400px;
                object-fit: cover;
                border-radius: 15px;
            }
            #your-image{
                flex-shrink: 0;
            }
            #your-data{
                display: flex;
                flex-direction: column;
                color: var(--text);
                height: 100%;
                width: 25%;
                gap: 1.5rem;
                font-size: large;
            }
            

            #skills-text{   
                display: flex;
                gap: 20px;
                margin-top: 10px;
            }
            #projects{
                height: max-content;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                width: 100%;
                padding: 5rem;
                background-color: var(--bg-sections);
                border-bottom: 2px solid var(--border);
            }
            #projects-title{
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                margin-bottom: 50px;
            }
            #projects-title h2{
                font-size: 2rem;
                font-weight: 800;
                border-bottom: 2px solid var(--button);
            }
            #projects-content{
                display: grid;
                width: 100%;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
            }
            .project{
                display: flex;
                flex-direction: column;
                text-align: left;
                height: 100%;
                background-color: var(--bg);
                color: var(--text);
                padding: 20px;
                gap: 10px;
                border: 1px solid var(--border);
                border-radius: 10px;
            }
            .project h3{
                margin-bottom: 7px;
            }
            .project-links{
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-top: 5px;
            }
            .project-link{
                display: inline-flex;
                justify-content: center;
                align-items: center;
                padding: 12px;
                border-radius: 12px;
                background-color: var(--button);
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }
            #contact{
                width: 100%;
                background: var(--bg);
                margin: 80px 0px;
                padding: 20px;
            }
            #contact-title{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            #contact-title h2{
                font-size: 56px;
                font-weight: 800;
                border-bottom: 1px solid var(--button);
            }
            #contact-data{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem;
            }
            .contact-infos{
                display: flex;
                
                gap: 10px;
                margin-top: 50px;
            }
            .contact-logo{
                background-color: var(--button);
                display: inline-flex;
                width: 40px;
                height: 40px;
                border-radius: 12px;
                padding: 12px;
                align-items: center;
                justify-content: center;
            }
            @media(max-width:768px){
                #about{
                    flex-direction: column;
                    align-items: center;
                    margin: 0 20px;
                    font-size: 1rem;
                }
                #your-image img{
                    height: auto;
                    width: min(100%, 405px);
                }
                #your-data{
                    max-width: 100%;
                    margin-left: 0;
                }
                #hero{
                    height: auto;
                    padding-bottom: 40px;
                }
                #hero h1{
                    font-size: 1.6rem;
                }
            }
            #logo-text{
                font-size: 24px;
                animation: logo 2s infinite ease-in-out;
            }

            @keyframes logo {
                0%{
                transform: translateY(0px);
                }

                50%{
                transform: translateY(-5px);
                }

                100%{
                transform: translateY(0px);
                }
            }
            .social-medias {
                display: flex;
                margin-top: 1rem;
                gap: 1rem;
            }
            .social-medias a {
                gap: 1.5rem;
                font-size: 1.5rem;
                padding: 10px 15px;
                border-radius: 15px;
                background-color: black;
            }

            </style>
        </head>
        <body data-theme="ocean">
            <!--First layout lets goo-->
            <div id="container">
            <header>
                <nav>
                <ul>
                    <li>
                    <a href="#"><h3 id="logo-text">${state.name}</h3></a>
                    </li>
                    <div class="nav-right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <!-- <li><a href="#projects">Projects</a></li> -->
                    <li><a href="#contact">Contact</a></li>
                    </div>
                </ul>
                </nav>
            </header>

            <main>
                <div id="introoo">
                <div id="code-block">
                    <div class="code-header">
                    <div class="code-red"></div>
                    <div class="code-orange"></div>
                    <div class="code-green"></div>
                    </div>
                    <div class="code-content">
                    <div class="code-line">
                        <span class="keyword">#include</span>
                        <span class="string">&lt;stdio.h&gt;</span>
                    </div>
                    <div class="code-line">
                        <span class="keyword">int main() &#123;</span>
                        <span class="string"></span>
                    </div>
                    <div class="code-line">
                        <span class="string" id="hello-text">&nbsp;&nbsp;&nbsp;&nbsp;printf("Hello, I am ${state.name}\n");</span>
                    </div>
                    <div class="code-line">
                        <span class="string">&nbsp;&nbsp;&nbsp;&nbsp;printf("Welcome to my portfolio!\n");</span>
                    </div>
                    <div class="code-line">
                        <span class="keyword">&nbsp;&nbsp;&nbsp;&nbsp;return</span>
                        <span class="string">0;</span>
                    </div>
                    <div class="code-line">
                        <span class="keyword">&#125;</span>
                    </div>
                    </div>
                </div>
                <div id="intro">
                    <h2>
                    Hello, I'm <br />
                    <span id="name-text">${state.name}</span>
                    </h2>
                    <button>Get in touch</button>
                    <button>View my works</button>
                    <div class="social-medias">
                    <a href="${state.twitter}" id="twitter"><i class="fab fa-x-twitter"></i></a>
                    <a href="${state.github}" id="github"><i class="fab fa-github"></i></a>
                    <a href="${state.linkedin}" id="linkedin"><i class="fab fa-linkedin"></i></a>

                    </div>
                </div>
                </div>

                <div id="hero">
                <div id="title">
                    <h1>About Me</h1>
                </div>
                <div id="about">
                    <div id="your-image">
                    <img src="${state.photo}" alt="Add your image here!" id="img-text"/>
                    </div>
                    <div id="your-data">
                    <h1>Who am I?</h1>
                        <!--Add info about you here!-->
                        <p id="bio-text">
                        ${state.bio}
                        </p>
                        <div id="skills">
                        <h2>Skills:</h2>
                        <p id="skills-text">
                            ${state.skills}
                        </p>
                        </div>
                    </div>

                    </div>
                </div>
                

                <div id="contact">
                <div id="contact-title">
                    <h2>Contact</h2>
                </div>
                <div id="contact-data">

                    <div id="location" class="contact-infos">
                    <i class="fas fa-map-marker-alt location-logo contact-logo"></i>
                    <div class="location-infoss contact-infoss">
                    <h3>Location</h3>
                    <p id="location-text">${state.location}</p>
                    </div>
                    </div>

                    <div id="phoneno" class="contact-infos">
                    <i class="contact-logo phoneno-logo fas fa-phone-alt"></i>
                    <div class="phoneno-infoss contact-infoss">
                        <h3>Phone No</h3>
                        <p id="phoneno-text">${state.phoneno}</p>
                    </div>
                    </div>

                    <div id="mail" class="contact-infos">
                    <i class="contact-logo mail-logo fas fa-envelope"></i>
                    <div class="mail-infoss contact-infoss">
                        <h3>Mail</h3>
                        <p id="mail-text">${state.email}</p>
                    </div>
                    </div>

                    <div id="github" class="contact-infos">
                    <i class="contact-logo github-logo fa-brands fa-github"></i>
                    <div class="github-infoss contact-infoss">
                        <h3><a href="${state.github}" >Github</a></h3>
                        <p id="github-text"><a href="${state.github}" >${state.name}</a></p>
                    </div>
                    </div>

                    <div id="linkedin" class="contact-infos">
                    <i class="contact-logo linkedin-logo fab fa-linkedin"></i>
                    <div class="linkedin-infoss contact-infoss">
                        <h3><a href="${state.linkedin}" >Linked In</a></h3>
                        <p id="linkedin-text"><a href="${state.linkedin}" >${state.name}</a></p>
                    </div>
                    </div>

                </div>

                </div>

            </main>
            </div>

        </body>
        </html>

        `;
            doc.open();
            doc.write(htmlContent);
            doc.close();
        }
        
        function getindexhtml() {
            const iframe = document.getElementById('preview');
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            return "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
        }

        document.querySelectorAll('.theme-btn').forEach(btn => {
            
           
            btn.addEventListener('click', (e)=>{
                 document.querySelectorAll('.theme-btn').forEach(button =>{
                    button.classList.remove('active')
                 })
                 
                btn.classList.add('active')
                
                const selectedTheme = btn.getAttribute('data-theme');
                if(selectedTheme){
                    state.theme = selectedTheme;
                    construct(dataUrl);
                }
            })
        })

        
    
        inputs.forEach(id => {
            const inputElem = document.getElementById(id);
            if (inputElem) {
                inputElem.addEventListener('input', (e) => {
                    const key = id.replace('Input', '');
                    state[key] = e.target.value;
                    construct(dataUrl);
                });
            }
        });

        $("photo").addEventListener('change', e=>{
            file = e.target.files[0];

            if(!file || !file.type.startsWith("image/") ){
                file=null;
                return;
            }

            const reader = new FileReader();
            reader.onload =()=>{
                dataUrl = reader.result;
                construct(dataUrl);
            };
            
            reader.readAsDataURL(file);
        })
        
        $('exportbtn').addEventListener('click', async()=>{
            try{
                const zip = new JSZip();
                let imgPath = ''
                if(file){
                    imgPath = "images/"+ safeName(file.name);
                    zip.file(imgPath, file);
                }

                zip.file("index.html", getindexhtml());
                const blob = await zip.generateAsync({
                    type: "blob"
                });

                const a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                a.download = "portfolio.zip";
                a.click();
                setTimeout(() =>
                 URL.revokeObjectURL(a.href), 1000);

            } catch (error) {
                console.error("Failed to export profile:", error);
            }
        });

        construct(dataUrl);

