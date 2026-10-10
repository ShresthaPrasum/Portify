const $ = (id) => document.getElementById(id);
const detailInput = document.querySelectorAll(".detailInput");

let file = null;

let dataUrl = "";

const themes = {
  bluez: `
                --bg: #0c2351;
                --bg-sections: #172b5d5e;
                --text: #fff;
                --button: rgb(195,26,26);
                --border: #44a2a8a2;
                --headings: #fff1f3;
                --nav: #132343;
            `,
  midnight: `
                --bg: #171f45;
                --bg-sections: #151a2e;
                --text: #f5f7ff;
                --button: #6c63ff;
                --border: #ffffff1f;
                --headings: #f1f5ff;
                --nav: #0d1424;
            `,
  ocean: `
                --bg: #1e4458;
                --bg-sections: #0c2935;
                --text: #e9fbff;
                --button: #00a6c7;
                --border: #808182af;
                --headings: #e6faff;
                --nav: #09202b;
            `,
  latin: `
                --bg: #1a100b;
                --bg-sections: #2b1c13;
                --nav: #43291a;
                --text: #d6b89a;
                --headings: #fff0d6;
                --button: #d97736;
                --border: rgba(217, 119, 54, 0.28);
  `
//   autumn: `
//             --bg-color: #fcd5ab;
//             --bg1-color: #ffc37a;
//             --bg2-color: #ffe4c4;
//             --font-color: #f57959;
//             --red-color: #f34c3e;
//             --stem-color: #996b4c;
//   `
};

const state = {
  theme: "ocean",
  layout: "bluez",
  name: "Prasum Shrestha",
  bio: "I am a high school student and technology enthusiast from Nepal with a strong interest in software development and problem-solving. I enjoy exploring new tools, learning emerging technologies, and building practical digital projects. I am passionate about coding and continuously seek opportunities to enhance my skills and contribute to innovative solutions.",
  location: "Nepal, Rupendehi",
  email: "prasumshrestha8877@gmail.com",
  phoneno: "9812345678",
  github: "github.com/prasumshrestha",
  linkedin: "linkedin.com/in/prasum-shrestha-1a2b3c4d5e",
  twitter: "twitter.com/prasumshrestha",
  skills: "HTML, CSS, JavaScript, Python, C++, React, Node.js, Git, SQL",
  photo: "example.jpg",
  project1_name: "Project_1",
  project1_description: "This is a project",
  project1_github: "https://github.com/",
  project1_demo: "https://",
  project2_name: "Project_2",
  project2_description: "This is a project",
  project2_github: "https://github.com/",
  project2_demo: "https://",
  project3_name: "",
  project3_description: "",
  project3_demo: "",
  project3_github: "",
  project4_name: "",
  project4_description: "",
  project4_demo: "",
  project4_github: "",
  "skillss": ""
};

const inputs = [
  "nameInput",
  "bioInput",
  "locationInput",
  "emailInput",
  "phonenoInput",
  "githubInput",
  "linkedinInput",
  "twitterInput",
  "skillsInput",
  "project1_name",
  "project1_description",
  "project1_demo",
   "project1_github",
   "project2_name",
   "project2_description",
   "project2_demo",
   "project2_github",
   "project3_name",
   "project3_description",
   "project3_demo",
   "project3_github",
   "project4_name",
   "project4_description",
   "project4_demo",
   "project4_github",
   "skillss"
];

const esc = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  ); // This is so complex than I expected used AI for this new thing

const safeName = (n) => n.toLowerCase().replace(/[^a-z0-9._-]/g, "-"); // This too :)

function construct(dataUrl, layout) {
  const iframe = $("preview");
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
  state.project1_name = esc($("project1_name").value);
  state.project1_description = esc($("project1_description").value);
  state.project1_demo = esc($("project1_demo").value);
  state.project1_github = esc($("project1_github").value);
  state.project2_name = esc($("project2_name").value);
  state.project2_description = esc($("project2_description").value);
  state.project2_github = esc($("project2_github").value);
  state.project2_demo = esc($("project2_demo").value);
  state.project3_name = esc($("project3_name").value);
  state.project3_description = esc($("project3_description").value);
  state.project3_github = esc($("project3_github").value);
  state.project3_demo = esc($("project3_demo").value);
  state.project4_name = esc($("project4_name").value);
  state.project4_description = esc($("project4_description").value);
  state.project4_github = esc($("project4_github").value);
  state.project4_demo = esc($("project4_demo").value);
  state.otherskills = esc($("skillss").value);

  state.photo = dataUrl;
  let htmlContent = null;
  const skillsthing = state.skills.split(",").map(skill=>skill.trim()).filter(skill=>skill!=="").map(skill=> `
    <div class="skill">
    <h3>${esc(skill)}</h3>
    </div>
    `
).join("");
const projectsthing = [1,2,3,4].map((num)=>{
    const pr_name = state[`project${num}_name`];
    const pr_description = state[`project${num}_description`];
    const pr_github = state[`project${num}_github`];
    const pr_demo = state[`project${num}_demo`];

    if(![pr_name, pr_demo, pr_description, pr_github].some(value=>value.trim()!=="")){
        return "";
    }
    return `
    <div class="project">
                    <h3>${pr_name}</h3>
                    <p>${pr_description}</p>
                    <div class="links project-links">
                        <a href="${pr_demo}" class="link project-link">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a href="${pr_github}" class="link project-link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
    `
}) 
.join("");
const projectsthing2 = [1,2,3,4].map((num)=>{
    const pr_name1 = state[`project${num}_name`];
    const pr_description1 = state[`project${num}_description`];
    const pr_github1 = state[`project${num}_github`];
    const pr_demo1 = state[`project${num}_demo`];

    if(![pr_name1, pr_demo1, pr_description1, pr_github1].some(value=>value.trim()!=="")){
        return "";
    }
    return `
    <div class="project">
        <h3>${pr_name1}</h3>
        <p>
        ${pr_description1}
        </p>

        <a class="project-button" href="${pr_demo1}">Visit </a>
    </div>
    `
}) 
.join("");
  if (layout === "bluez") {
    htmlContent = `<!doctype html>
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
                        <li><a href="#projects">Projects</a></li> 
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
                        Hello, I'm  ${state.name}<br/>
                        </h2>
                        <span id="name-text">${state.bio}</span> <br> 
                        <button>Get in touch</button>
                        <button>View my works</button>
                        <div class="social-medias">
                        <a href="${state.twitter}" id="twitter"><i class="fab fa-x-twitter"></i></a>
                        <a href="https://github.com/${state.github}" id="github"><i class="fab fa-github"></i></a>
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
                    <div id="projects">
          <div id="projects-title">
            <h2>My Projects</h2>
          </div>
          <div id="projects-content">
          <!--
            <div class="project">
              <h3>${state.project1_name}</h3>
              <p>
                ${state.project1_description}
              </p>
              <div class="project-links">
                <a class="project-link" href="${state.project1_github}"    target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  class="project-link"
                  href="${state.project1_demo}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div class="project">
              <h3>${state.project2_name}</h3>
              <p>
               ${state.project2_description}
              </p>
              <div class="project-links">
               <a class="project-link" href="${state.project2_github}"    target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="${state.project2_demo}" class="project-link" target="_blank" rel="noopener noreferrer">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            

            <div class="project">
              <h3>${state.project3_name}</h3>
              <p>
                ${state.project3_description}
              </p>

              <div class="project-links">
              <a class="project-link" href="${state.project3_github}"    target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="${state.project3_demo}" class="project-link" target="_blank" rel="noopener noreferrer">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>

            </div>
                <div class="project">
              <h3>${state.project4_name}</h3>
              <p>
                ${state.project4_description}
              </p>

              <div class="project-links">
              <a class="project-link" href="${state.project4_github}"    target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="${state.project4_demo}" class="project-link" target="_blank" rel="noopener noreferrer">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>

            </div> -->
            ${projectsthing}


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
                            <p id="github-text"><a href="${state.github}" >${state.github}</a></p>
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
  } else if (layout === "redz") {
    htmlContent = `<!doctype html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>${state.name} - Portfolio</title>
                    <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                    />
                    <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&amp;display=swap"
                    rel="stylesheet"
                    />

                    <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    :root {
                        ${currentTheme}
                    }
                    body {
                        background-color: var(--bg);
                        font-family: "Montserrat", sans-serif;
                        color: #fff;
                    }
                    nav {
                        height: 60px;
                        background-color: var(--nav);
                        color: var(--headings);
                        display: flex;
                        align-items: center;
                        padding: 10px;
                    }

                    ul {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        justify-content: space-between;
                        gap: 50px;
                        list-style: none;
                        padding: 50px;
                    }
                    a {
                        text-decoration: none;
                    }

                    header a {
                        text-decoration: none;
                        color: var(--headings);
                    }

                    .right {
                        display: flex;
                        gap: 20px;
                    }
                    #far-left {
                        font-weight: 750;
                        margin-left: 10px;
                        font-size: 25px;
                    }
                    #intro {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 80vh;
                        padding-right: 200px;
                        padding-left: 200px;
                        background-color: var(--bg-sections);
                        gap: 25px;
                    }
                    #data {
                        display: flex;
                        flex-direction: column;
                        width: 40%;
                        padding: 15px;
                    }
                    #intro-buttons {
                        margin-top: 20px;
                    }
                    button {
                        background-color: var(--button);
                        width: 110px;
                        height: 40px;
                        border: none;
                        border-radius: 10px;
                    }
                    #view-projects {
                        color: var(--bg);
                        text-decoration: none;
                        background: var(--button);
                        font-weight: 800;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    #contactt {
                        background: var(--bg);
                        margin-left: 20px;
                    }
                    #contat {
                        text-decoration: none;
                        color: var(--headings);
                        font-weight: bold;
                        height: 42px;
                    }
                    #image-div {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: var(--bg);
                        border-radius: 15px;
                    }
                    #image-div img {
                        height: 400px;
                        width: 300px;
                        object-fit: cover;
                        border-radius: 15px;
                    }
                    #about {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        padding-top: 50px;
                        padding-bottom: 100px;
                        /* height: 255px; */
                        padding-right: 200px;
                        padding-left: 84px;
                        text-align: left;
                        background-color: var(--nav);
                    }
                    #about h2 {
                        font-weight: 800;
                        font-size: 56px;
                        margin-bottom: 10px;
                        margin-top: 30px;
                        margin-left: 20px;
                        text-align: left;
                    }
                    #about p {
                        font-size: 21px;
                        color: var(--text);
                        margin-left: 20px;
                        width: 60vw;
                    }
                    #data h1 {
                        margin-bottom: 10px;
                        font-weight: 800;
                        font-size: 52px;
                    }

                    #skill {
                        margin: 20px;
                    }

                    #contact {
                        background-color: var(--bg-sections);
                        height: 40vh;
                        padding: 40px;
                    }
                    #contact-title {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 30px;
                        align-items: left;
                    }
                    #contact-title h2 {
                        color: var(--headings);
                        font-weight: 800;
                        font-size: 56px;
                        margin-bottom: 5px;
                    }
                    #contact-title p {
                        color: var(--text);
                    }
                    #contact-content {
                        display: flex;
                        justify-content: space-between;
                        flex-direction: row;
                    }
                    .contact-infos {
                        display: flex;
                        flex-direction: row;
                        /* justify-content: center; */
                        align-items: center;
                        gap: 10px;
                    }
                    .contact-icon {
                        background-color: var(--border);
                        color: var(--button);
                        font-weight: 600;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        border-radius: 10px;
                    }
                    #contactt {
                        padding: 0px;
                    }
                        #projects{
    padding: 150px;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    background-color: var(--bg);
}
#projects-title h2{
    color: var(--headings);
    display: flex;
    flex-direction: column;
    align-items: left;
    font-weight: 800;
    font-size: 56px;
}
#projects-title p{
    color: var(--text);
}
#projects-content{
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 1rem;
    margin-top: 20px;
}
.project{
    background-color: var(--bg-sections);
    height: 210px;
    padding: 50px;
    padding-top: 35px;
    padding-right: 35px;
    border: 1px solid var(--border);
    border-radius: 10px;
}
.project h3{
    display: flex;
    align-items: left;
    flex-direction: column;
    font-weight: 700;
    font-size: 35px;
    margin-bottom: 5px;
}
.project p{
    color: var(--text);
    margin-bottom: 15px;
}
.project a{
    text-decoration: none;
    color: var(--bg);
    background-color: var(--button);
    width: 110px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-weight: 800;
    justify-content: center;
}
    .skill{
    height: 200px;
    width: 250px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    border-radius: 10px;
    background-color: var(--bg-sections);
}
    .skill h3{
    margin-bottom: 10px;
    font-size: 26px;
    color: var(--headings);
}
    #skills-content{
    display: grid;
    grid-template-columns: repeat(4, minmax(250px,1fr));
    align-content: start;
    gap: 50px;
    margin-top: 15px;
}
                    </style>
                </head>
                <body data-theme="normal">
                    <div id="container">
                    <header>
                        <nav>
                        <ul>
                            <div>
                            <li id="far-left">${state.name}</li>
                            </div>
                            <div class="right">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            </div>
                        </ul>
                        </nav>
                    </header>

                    <main>
                        <div id="intro">
                        <div id="data">
                            <h1>Hi, I am ${state.name}!</h1>
                            <p>
                            ${state.bio}
                            </p>
                            <div id="intro-buttons">
                            <button>
                                <a href="#about" id="view-projects">About Me</a>
                            </button>
                            <button id="contactt">
                                <a href="#contact" id="contat">
                                <i class="fas fa-paper-plane icon"></i>
                                Contact Me
                                </a>
                            </button>
                            </div>
                        </div>
                        <div id="image-div">
                            <img src="${state.photo}" alt="${state.name}" />
                        </div>
                        </div>

                        <div id="about">
                        <h2>About Me:</h2>
                        <p>
                            ${state.bio}
                        </p>

                        <div id="skills-title">
                        <h2>Skills</h2>
                        <p>Technologies I have learnt until now!</p>
                        <div id="skills-content">
                        ${skillsthing}
                        </div>
                           <!-- <h3 id="skill">${state.skills}</h3> -->
                        </div>
                        </div>

                        <div id="projects">
                        <div id="projects-title">
                            <h2>My Projects:</h2>
                            <p>Here are my best projects that I have made throughout my journey!</p>
                        </div>

                        <div id="projects-content">
                           <!-- <div class="project">
                            <h3>${state.project1_name}</h3>
                            <p>
                            ${state.project1_description}
                            </p>

                            <a class="project-button" href="${state.project1_demo}">Visit </a>
                            </div>

                            <div class="project">
                            <h3>${state.project2_name}</h3>
                            <p>${state.project2_description}</p>

                            <a href="${state.project3_demo}" class="project-button">Visit</a>
                            </div>

                            <div class="project">
                            <h3>${state.project3_name}</h3>
                            <p>${state.project3_description}</p>

                            <a href="${state.project3_demo}" class="project-button">Visit</a>
                            </div>

                            <div class="project">
                            <h3>${state.project4_name}</h3>
                            <p>${state.project4_description}</p>

                            <a href="${state.project4_demo}" class="project-button">Visit</a>
                            </div> -->
                            ${projectsthing2}

                        </div> 

                        </div>


                        <div id="contact">
                        <div id="contact-title">
                            <h2>Contact Me</h2>
                            <p>
                            You can get in touch with me by various mediums which are given
                            below.
                            </p>
                        </div>

                        <div id="contact-content">
                            <div id="location" class="contact-infos">
                            <span class="contact-icon">
                                <i class="fas fa-map-marker-alt contact-logo"></i>
                            </span>
                            <div class="location-info contact-infoos">
                                <h3>Location</h3>
                                <p>${state.location}</p>
                            </div>
                            </div>

                            <div id="phoneno" class="contact-infos">
                            <a href="tel:${state.phone}">
                                <span class="contact-icon">
                                <i class="contact-logo fas fa-phone-alt"></i>
                                </span>
                            </a>
                            <div class="phoneno-info contact-infoos">
                                <h3>Phone No</h3>
                                <p>${state.phoneno}</p>
                            </div>
                            </div>

                            <div id="mail" class="contact-infos">
                            <a href="mailto:${state.email}">
                                <span class="contact-icon">
                                <i class="contact-logo fas fa-envelope"></i>
                                </span>
                            </a>
                            <div class="mail-info contact-infoos">
                                <h3>Mail</h3>
                                <p>${state.email}</p>
                            </div>
                            </div>

                            <div id="github" class="contact-infos">
                            <a href="${state.github}">
                                <span class="contact-icon">
                                <i class="contact-logo fa-brands fa-github"></i>
                                </span>
                            </a>
                            <div class="github-info contact-infoos">
                                <h3>Github</h3>
                                <p>${state.github}</</p>
                            </div>
                            </div>

                            <div id="linkedin" class="contact-infos">
                            <a href="${state.linkedin}">
                                <span class="contact-icon">
                                <i class="contact-logo fab fa-linkedin"></i>
                                </span>
                            </a>
                            <div class="linkedin-info contact-infoos">
                                <h3>Linkedin</h3>
                                <p>${state.name}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </main>
                    </div>
                </body>
                </html>
                `;
  }else if(layout==="latin"){
    htmlContent= `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${state.name} - Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

:root{
    ${currentTheme}
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
body{
    background-color: var(--bg);
    color: var(--text);
    width: 100%;
}
/* header{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
} */
 nav{
    width: 100%;
 }
ul{
    list-style: none;
    display: flex;
    height: 62px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: var(--nav);
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
} 
    .right{
    margin-left: auto;
    }
#logo{
    color: var(--headings);
    font-size: 32px;
    font-weight: 800;
}
a{
    text-decoration: none;
    color: var(--headings);
}
#about{
    margin-top: 150px;
    background-color: var(--bg-sections);
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 100px;
}
#about-others{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
#about h2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 700;
}
#about-info {
    width: 100%;
    min-width: 0;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
#about-data {
    overflow-wrap: anywhere;
    word-break: normal;
}
#about-title h2{
    font-size: 56px;
    font-weight: 800;
    color: var(--headings);
}
#linkss{
    display: flex;
    gap: 10px;
}
#linkss a{
    background-color: var(--button);
    color: var(--headings);
    width: 60px;
    height: 45px;
    padding: 5px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-radius: 15px;
}
#skills{
    margin-top: 100px;
    height: auto;
    display: flex;
    background: var(--bg-sections);
    padding: 100px;
    flex-direction: column;
}
#skills-title h2{
    display: flex;
    color: var(--headings);
    align-items: center;
    justify-content: center;
    font-size: 48px;
    margin-bottom: 10px;
}
#skills-title{
    margin-bottom: 30px;
}
#skills-info{
    display: grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    gap: 20px;
}
.skill{
    width: 280px;
    height: 200px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    padding-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
}
.skill h3{
    color: var(--headings);
}
#projects{
    margin-top: 100px;
    background-color: var(--bg-sections);
    height: auto;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.projects-title{
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}
.projects-title h2{
    color: var(--headings);
    font-size: 56px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
}
.projects-info {
    display:grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    gap: 25px;
    width: 100%;
}
.project {
    width: 100%;
    min-width: 0;
    min-height: 250px;
    height: auto;
    overflow-wrap: anywhere;
    word-break: normal;
}
.project h3{
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.links{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
}
.link{
    width: 40px;
    height: 40px;
    background-color: var(--button);
    display: flex;
    border: none;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
}
#contact{
    margin-top: 100px;
    background-color: var(--bg-sections);
    padding: 100px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.contact-title{
    margin-bottom: 20px;
}
.contact-title h2{
    color: var(--headings);
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 56px;
}
.contact-info{
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    gap: 50px;
}
.contact-infoo{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.infooo{
    display: flex;
    flex-direction: column;
    /* gap: 5px; */
}
.contact-infoo a{
    color: var(--button);
    border: none;
    border-radius: 10px;
    background-color: var(--border);
}
    #about-img img{
                    height: 500px;
                    width: 400px;
                    object-fit: cover;
                    border-radius: 15px;
                }
    #about-img {
            flex-shrink: 1;
            min-width: 0;
            margin-right: 0;
}

     @media (max-width: 768px) {
    ul {
        height: auto;
        gap: 14px;
        padding: 15px;
    }

    #logo {
        font-size: 24px;
    }

    #about-others {
        flex-direction: column;
        gap: 25px;
    }

    #about-img {
        width: 100%;
        max-width: 250px;
    }

    #about-info {
        width: 100%;
        height: auto;
    }

    #about-data {
        width: 100%;
        word-break: normal;
        overflow-wrap: anywhere;
    }

    #about-title h2,
    .projects-title h2,
    .contact-title h2 {
        font-size: 36px;
    }

    #skills-info,
    .projects-info,
    .contact-info {
        grid-template-columns: minmax(0, 1fr);
    }

    #skills-title p,
    .projects-title p,
    .contact-title p {
        overflow-wrap: anywhere;
    }
        #skills-info {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.skill {
    width: 100%;
    height: auto;
    min-width: 0;
}
  }

//         @media (max-width: 1080px) {
//     nav ul {
//         padding: 0 20px;
//         gap: 20px;
//     }

//     #intro {
//         padding: 40px 5%;
//         gap: 20px;
//     }

//     #data {
//         min-width: 0;
//     }

//     #about {
//         padding: 50px 5% 80px;
//     }

//     #about p {
//         width: 100%;
//     }

//     #projects {
//         padding: 80px 5%;
//     }

//     .project {
//         padding: 25px;
//         min-width: 0;
//     }

//     .project h3 {
//         font-size: 28px;
//     }

//     #contact {
//         height: auto;
//     }

//     #contact-content {
//         flex-wrap: wrap;
//         gap: 20px;
//     }
// }
    </style>

</head>
<body data-theme="autumn">
    <div id="container">
        <header>
            <nav>
                <ul>
                    <li class="logo">
                        <h2 id="logo">
                        ${state.name}
                        </h2>
                    </li>
                    <li class="right">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>   
                </ul>
            </nav>
        </header>

        <main>

            <div id="about">

                <div id="about-title">
                    <h2>About Me</h2> 
                </div>
                <div id="about-others">
                <div id="about-img">
                    <img src="${state.photo}" alt="${state.name}">
                </div>

                <div id="about-info">
                    <h2>Hi, I am ${state.name}</h2>
                    <p id="about-data">
                        ${state.bio}
                    </p>

                    <div id="linkss">
                        <a href="https://github.com/${state.github}" class="link"> 
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="${state.linkedin}" class="link">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>

                </div>
                </div>


            </div>

            <div id="skills">
                <div id="skills-title">
                    <h2>My Skills</h2>
                    <p>All the things I have learnt until now throughout my journey!</p>
                </div>
                <div id="skills-info">
                ${skillsthing}
                </div>
            </div>

            <div id="projects">
            <div class="projects-title">
                <h2>My Projects</h2>
                <p>Down here are the projects I made along the way, made by dedication and hardwork of mine.</p>
            </div>
            <div class="projects-info">
                ${projectsthing}
               <!-- <div class="project">
                    <h3>${state.project1_name}</h3>
                    <p>${state.project1_description}</p>

                    <div class="links">
                        <a href="${state.project1_demo}" class="link">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a href="${state.project1_github}" class="link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>

                </div>

                <div class="project">
                    <h3>${state.project2_name}</h3>
                    <p>${state.project2_description}</p>
                    <div class="links">
                        <a href="${state.project2_demo}" class="link">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a href="${state.project2_github}" class="link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                <div class="project">
                    <h3>${state.project3_name}</h3>
                    <p>${state.project3_description}</p>
                    <div class="links">
                        <a  class="link" href="${state.project3_demo}">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a href="${state.project3_github}" class="link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>

                <div class="project">
                    <h3>${state.project4_name}</h3>
                    <p>${state.project4_description}</p>
                    <div class="links">
                        <a href="${state.project4_demo}" class="link">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a href="${state.project4_github}" class="link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div> -->

            </div>
            </div>

            <div id="contact">
                <div class="contact-title">
                    <h2>Contact Me</h2>
                    <p>You can contact me through various mediums which are listed below:</p>
                </div>
                <div class="contact-info">

                    <div class="contact-infoo">
                        <a href="#" class="link">
                            <i class="fas fa-map-marker-alt"></i>
                        </a>
                        <div class="infooo">
                            <h4>Location</h4>
                            <p>${state.location}</p>
                        </div>
                    </div>

                        <div class="contact-infoo">
                            <a href="tel:${state.phoneno}" class="link">
                                <i class="fas fa-phone-alt"></i>
                            </a>
                            <div class="infooo">
                                <h4>Phone No.</h4>
                                <p>${state.phoneno}</p>
                            </div>
                    </div>

                    <div class="contact-infoo">
                        <a href="mailto:${state.email}" class="link">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <div class="infooo">
                            <h4>Mail</h4>
                            <p>${state.email}</p>
                        </div>
                    </div>

                    <div class="contact-infoo">
                        <a href="https://github.com/${state.github}" class="link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <div class="infooo">
                            <h4>Github</h4>
                            <p>@${state.github}</p>
                        </div>
                    </div>

                    <div class="contact-infoo">
                        <a href="${state.linkedin}" class="link">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <div class="infooo">
                            <h4>Linked In</h4>
                            <p>@${state.name}</p>
                        </div>
                    </div>


                </div>
            </div>

        </main>

    </div>

    <script>

    </script>
</body>
</html>
    `;
  }else if(layout==="autumn"){
    htmlContent = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${state.name}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&amp;family=Pacifico&amp;display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>

    <style>

        :root{
            --bg-color: #fcd5ab;
            --bg1-color: #ffc37a;
            --bg2-color: #ffe4c4;
            --font-color: #f57959;
            --red-color: #f34c3e;
            --stem-color: #996b4c;
        }
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body{
            color: #4e372f;
            background-color: var(--bg-color);
            font-family: "DM Sans", Arial, sans-serif;
        }

        .hero-container{
            width: 100%;
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            background-color: var(--bg-color);
            z-index: 1;
        }

        .top-box{
            height: 37%;
            top: 0;
            right: 0;
            width: 75%;
            border-radius: 0 0 0 36% / 0 0 0 64%;
            background-color: var(--bg1-color);
            position: absolute;
            z-index: -1;
        }
        .bottom-box{
            height: 27%;
            bottom: 0;
            left: 0;
            width: 100%;
            border-radius: 30% 46% 0 0  / 20% 64% 0 0;
            background-color: var(--bg1-color);
            position: absolute;
            z-index: -1;
        }

        header{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
        }

        a{
            color: inherit;
            text-decoration: none;
        }

        .nav{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 90%;
            height: 100%;
        }

        .brand{
            display: inline-flex;
            width: fit-content;
            align-items: center;
            gap: 8px;
            width: 33%;
        }

        .logo{
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            position: relative;
            color: var(--font-color);
            font: 700 25px Georgia, serif;
            border: 1px solid var(--font-color);
        }

        .logo-name{
            font-size: 15px;
            font-weight: 800;
            line-break: auto;
            line-height: 1.1;
        }

        .logo-name small{
            font-size: 11px;
        }

        .nav-bar{
            display: flex;
            width: 33%;
            justify-content: space-between;
        }

        .nav-bar a{
            font-weight: bold;
            font-size: 16px;
        }

        .social-medias{
            width: 33%;
            display: flex;
            justify-content: flex-end;
            gap: 15px;
        }

        .leaf-branch{
            position: absolute;
            
        }

        .top-branch{
            width: 15%;
            height: auto;
            right: 8%;
            top: 4%;
            transform: rotate(3deg);
        }

        .branch-stem{
            fill: none;
            stroke-width: 1.2;
            stroke: var(--stem-color);
            stroke-linecap: round;
        }
        .red-leaf {
            fill: var(--red-color);
        }

        .hero-content{
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            height: 80vh;
            
        }
        
        .hero-name{
            
        }

        .hero-title{
            display: block;
            font-family: "Pacifico", "Segoe Script", cursive;
            line-height: 1.1;
            color: var(--font-color);
            font-size: clamp(50px, 9vw, 110px);
            font-weight: 400;
            letter-spacing: -1px;
            
        }
        .hero-subtitle{
            color: var(--font-color);
            font-size: clamp(20px, 2.8vw, 40px);
            font-weight: 400;
            letter-spacing: -1px;
        }

        .hero-description{
            max-width: 520px;
            margin: 20px 0px;
            font-size: clamp(10px, 1vw, 14px);
            line-height:1.6;
            
        }

        .capsule-btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 45px;
            color: white;
            background-color: var(--font-color);
            padding: 14px 20px;
            font-size: 14px;
        }
        
        .hero-profile{
            width: 34%;
            aspect-ratio: 1/1;
            border-radius: 50%;
            background-color: #edc49e;
            border: clamp(3px, 1vw, 14px) solid var(--font-color);
        }

        .hero-profile img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }

        .bottom-branch{
            width: 15%;
            height: auto;
            left: 28%;
            bottom: -3%;
            transform: rotateY(180deg);
        }
        .gold-leaf{
            fill: #ffaa21;
        }

        .left-branch{
            width: 12%;
            height: auto;
            left: -1%;
            bottom: 19%;
            transform: rotate(-7deg);
        }

        .tiny-leafs{
            position: absolute;
            left: 13%;
            top: 15%;
            width: 35px;
            height: 40px;
            transform: rotate(-20deg);
        }

        .tiny-leafs span{
            position: absolute;
            width: 40px;
            height: 60px;
            border-radius: 100% 0 100% 0;
            background-color: #f34c3e;
        }

        .tiny-leafs span:nth-child(2){
            background-color: #ff6822;
            transform: rotate(20deg);
            left: 8px;
            top: 5px;
        }
        .tiny-leafs span:nth-child(3){
            background-color: #ff9822;
            transform: rotate(40deg);
            left: 12px;
            top: 15px;
        }

        .about{
            position: relative;
            overflow: hidden;
            padding: clamp(70px, 6vw, 130px) 5vw;
            min-height: 100vh;
            background-color: var(--bg-color);
        }

        .about-header{
            text-align: center;
            margin-bottom: 55px;
        }

        .about-header h2{
            font-size: clamp(30px, 5.5vw, 60px);
            letter-spacing: -3px;
            padding-bottom: 10px;
        }

        .about-content{
            display: flex;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            gap: 80px;
            justify-content: center;
        }

        .about-note{
            display: flex;
            flex-direction: column;
            height: 52vh;
            width: 36%;
            border-top: 8px solid var(--bg1-color);
            background-color: #fff;
            padding: 2vw;
            transform: rotate(-2deg);
            gap: 10px;
        }

        .about-details{
            height: 50vh;
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 40px;
        }

        .detail h3{
            font-size: 1vw;
            margin-bottom: 10px;
        }

        .note-head{
            font: 28px "Pacifico", cursive;
            margin: 0 0 10px;
        }

        .note-content p{
            font-size: 15px;
            line-height: 2;
        }

        .projects{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            overflow: hidden;
            padding: clamp(70px, 6vw, 130px) 5vw;
            min-height: 100vh;
            background-color: var(--bg2-color);
        }

        .projects-header{
            text-align: center;
            margin-bottom: 55px;
        }

        .projects-header h2{
            font-size: clamp(30px, 5.5vw, 60px);
            letter-spacing: -3px;
            padding-bottom: 10px;
        }

        .project-container{
            display: grid;
            width: 70%;
            justify-content: center;
            grid-template-columns: repeat(2, minmax(0,1fr));
            gap: 3rem;
            margin-top: 20px;
        }

        .project-card{
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 30px;
            gap: 15px;
            border: 1px solid var(--font-color);
            border-radius: 12px;
            background-color: var(--bg2-color);
        }

        .project-description{
            color: #8e7468;
            font-size: 15px;
            line-height: 1.8;
        }

        .project-title{
            font-size: 4vh;
            color: var(--font-color);
            letter-spacing: -2px;
        }

        .project-view{
            display: inline-flex;
            width: 135px;
            height: 45px;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            border: none;
            border-radius: 45px;
            color: white;
            background-color: var(--font-color);
            padding: 14px 20px;
            font-size: 18px;
        }

        .contact{
            position: relative;
            overflow: hidden;
            padding: clamp(70px, 6vw, 130px) 5vw;
            min-height: 40vh;
            background-color: var(--bg-color);
            background-image: url(leafs.png);
            background-size: cover;
            /* background-position:; */
            color: #ede9e9;
        }

        .contact-header{
            text-align: center;
            margin-bottom: 55px;
        }

        .contact-header h2{
            font-size: clamp(30px, 5.5vw, 60px);
            letter-spacing: -3px;
            padding-bottom: 10px;
        }
        
        .contact-details{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
        }

        .contact-info{
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .contact-logo{
            display: inline-flex;
            background-color: #573710;
            border-radius: 12px;
            color: white;
            width: 50px;
            height: 50px;
            align-items: center;
            justify-content: center;

        }

    </style>
</head>
<body>
    <main>
        <section class="hero">
            <div class="hero-container">
                <div class="top-box"></div>
                <div class="bottom-box"></div>

                <header>
                    <div class="nav">
                        <a href="#home" class="brand">
                            <span class="logo">
                                ${state.name[0].toUpperCase()}
                            </span>
                            <span class="logo-name">
                                ${state.name.toUpperCase()}
                            </span>
                        </a>
                        <div class="nav-bar">
                            <a href="#">Home</a>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#contacts">Contact</a>
                        </div>
                        <div class="social-medias">
                            <a href="${state.twitter}">
                                <i class="fa-brands fa-x"></i>
                            </a>
                            <a href="https://github.com/${state.github}">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="mailto:${state.email}">
                                <i class="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </header>

                <svg class="leaf-branch top-branch" viewBox=" 0 0 190 112">
                    <path class="branch-stem" d="M8 12 C54 25 91 52 176 100"/>
                    <path class="red-leaf" d="M30 22 C7 5 14 -1 43 15 C39 2 51 -3 55 22 C68 6 80 10 65 31 C57 39 43 34 30 22Z"></path>
                    <path class="red-leaf" d="M66 39 C49 17 59 12 81 32 C79 17 91 15 93 39 C109 26 116 33 97 48 C87 54 76 49 66 39Z"></path>
                    <path class="red-leaf" d="M101 61 C87 39 98 33 115 54 C116 39 128 39 127 62 C144 52 151 60 130 72 C119 77 110 70 101 61Z"></path>
                    <path class="red-leaf" d="M139 82 C130 62 141 57 153 77 C157 64 167 68 163 87 C180 81 185 91 165 99 C154 101 145 91 139 82Z"></path>
                </svg>

                <svg class="leaf-branch bottom-branch" viewBox=" 0 0 190 112">
                    <path class="branch-stem" d="M8 12 C54 25 91 52 176 100"/>
                    <path class="red-leaf" d="M30 22 C7 5 14 -1 43 15 C39 2 51 -3 55 22 C68 6 80 10 65 31 C57 39 43 34 30 22Z"></path>
                    <path class="red-leaf" d="M66 39 C49 17 59 12 81 32 C79 17 91 15 93 39 C109 26 116 33 97 48 C87 54 76 49 66 39Z"></path>
                    <path class="red-leaf" d="M101 61 C87 39 98 33 115 54 C116 39 128 39 127 62 C144 52 151 60 130 72 C119 77 110 70 101 61Z"></path>
                    <path class="red-leaf" d="M139 82 C130 62 141 57 153 77 C157 64 167 68 163 87 C180 81 185 91 165 99 C154 101 145 91 139 82Z"></path>
                </svg>

                <svg class="leaf-branch left-branch" viewBox="0 0 140 160" aria-hidden="true">
                    <path class="branch-stem" d="M8 152 C44 112 66 70 105 8"></path>
                    <path class="gold-leaf" d="M24 132 C1 132 -3 118 25 116 C10 103 18 93 38 113 C42 123 34 131 24 132Z"></path>
                    <path class="gold-leaf" d="M43 105 C20 99 21 86 48 91 C37 74 47 67 62 90 C63 101 53 106 43 105Z"></path>
                    <path class="gold-leaf" d="M62 77 C43 66 48 54 69 66 C65 46 76 43 85 68 C83 78 72 82 62 77Z"></path>
                    <path class="gold-leaf" d="M82 48 C66 34 75 25 91 40 C90 21 101 20 106 44 C102 53 91 56 82 48Z"></path>
                </svg>

                <div class="tiny-leafs">
                    <span></span><span></span><span></span>
                </div>

                <div class="hero-content">
                    <div class="hero-name">
                        <h1>
                            <span class="hero-title">
                                ${state.name}
                            </span>
                            <span class="hero-subtitle">
                                CREATIVE DEVELOPER
                            </span>
                        </h1>

                        <p class="hero-description">
                            ${state.bio}
                        </p>

                        <a href="#project" class="capsule-btn">View My Projects</a>
                    </div>
                    <div class="hero-profile">
                        <img src="${state.photo}" alt="${state,name}">
                    </div>
                </div>
            </div>
        </section>

        <section class="about" id="about">
            <div class="about-header">
                <svg class="leaf-branch top-branch" viewBox=" 0 0 190 112">
                    <path class="branch-stem" d="M8 12 C54 25 91 52 176 100"/>
                    <path class="red-leaf" d="M30 22 C7 5 14 -1 43 15 C39 2 51 -3 55 22 C68 6 80 10 65 31 C57 39 43 34 30 22Z"></path>
                    <path class="red-leaf" d="M66 39 C49 17 59 12 81 32 C79 17 91 15 93 39 C109 26 116 33 97 48 C87 54 76 49 66 39Z"></path>
                    <path class="red-leaf" d="M101 61 C87 39 98 33 115 54 C116 39 128 39 127 62 C144 52 151 60 130 72 C119 77 110 70 101 61Z"></path>
                    <path class="red-leaf" d="M139 82 C130 62 141 57 153 77 C157 64 167 68 163 87 C180 81 185 91 165 99 C154 101 145 91 139 82Z"></path>
                </svg>

                <svg class="leaf-branch bottom-branch" viewBox=" 0 0 190 112">
                    <path class="branch-stem" d="M8 12 C54 25 91 52 176 100"/>
                    <path class="red-leaf" d="M30 22 C7 5 14 -1 43 15 C39 2 51 -3 55 22 C68 6 80 10 65 31 C57 39 43 34 30 22Z"></path>
                    <path class="red-leaf" d="M66 39 C49 17 59 12 81 32 C79 17 91 15 93 39 C109 26 116 33 97 48 C87 54 76 49 66 39Z"></path>
                    <path class="red-leaf" d="M101 61 C87 39 98 33 115 54 C116 39 128 39 127 62 C144 52 151 60 130 72 C119 77 110 70 101 61Z"></path>
                    <path class="red-leaf" d="M139 82 C130 62 141 57 153 77 C157 64 167 68 163 87 C180 81 185 91 165 99 C154 101 145 91 139 82Z"></path>
                </svg>

                <svg class="leaf-branch left-branch" viewBox="0 0 140 160" aria-hidden="true">
                    <path class="branch-stem" d="M8 152 C44 112 66 70 105 8"></path>
                    <path class="gold-leaf" d="M24 132 C1 132 -3 118 25 116 C10 103 18 93 38 113 C42 123 34 131 24 132Z"></path>
                    <path class="gold-leaf" d="M43 105 C20 99 21 86 48 91 C37 74 47 67 62 90 C63 101 53 106 43 105Z"></path>
                    <path class="gold-leaf" d="M62 77 C43 66 48 54 69 66 C65 46 76 43 85 68 C83 78 72 82 62 77Z"></path>
                    <path class="gold-leaf" d="M82 48 C66 34 75 25 91 40 C90 21 101 20 106 44 C102 53 91 56 82 48Z"></path>
                </svg>

                <div class="tiny-leafs">
                    <span></span><span></span><span></span>
                </div>
                <h2>A little about me.</h2>
                <p class="about-quote">
                    Always collecting ideas like autumn leaves and turning it into beauty.
                </p>
            </div>

            <div class="about-content">
                <div class="about-note">
                    <div class="note-head">
                        Hello, there!
                    </div>

                    <div class="note-content">
                       <!-- <p>I’m Prasum, a student developer from Nepal who loves figuring out how things work—and then building something of my own. I’m exploring web development, game development, and AI one experiment at a time.</p>
                        <p>My favourite projects sit where useful ideas meet delightful details. I believe every bug has a lesson, every sketch can become a product, and good work starts with asking better questions.</p> -->
                        <p> ${state.bio} </p>
                    </div>
                </div>
                <div class="about-details">
                    <div class="detail">
                        <h3>Skills</h3>
                        <p>${state.skills}</p>
                    </div>
                    <div class="detail">
                        <h3>How I work</h3>
                        <p>Thinking big starting small and solve the real world problems.</p>
                    </div>
                    <div class="detail">
                        <h3>Outside the pixels</h3>
                        <p>${state.otherskills}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="projects" id="projects">
            <div class="projects-header">
                <h2>Collected Projects</h2>
                <p class="project-quote">
                    A collection of beautiful project created by me due to my curiosity and will to learn new thing
                </p>
            </div>
            <svg class="leaf-branch top-branch" viewBox=" 0 0 190 112">
                    <path class="branch-stem" d="M8 12 C54 25 91 52 176 100"/>
                    <path class="red-leaf" d="M30 22 C7 5 14 -1 43 15 C39 2 51 -3 55 22 C68 6 80 10 65 31 C57 39 43 34 30 22Z"></path>
                    <path class="red-leaf" d="M66 39 C49 17 59 12 81 32 C79 17 91 15 93 39 C109 26 116 33 97 48 C87 54 76 49 66 39Z"></path>
                    <path class="red-leaf" d="M101 61 C87 39 98 33 115 54 C116 39 128 39 127 62 C144 52 151 60 130 72 C119 77 110 70 101 61Z"></path>
                    <path class="red-leaf" d="M139 82 C130 62 141 57 153 77 C157 64 167 68 163 87 C180 81 185 91 165 99 C154 101 145 91 139 82Z"></path>
                </svg>

                <svg class="leaf-branch bottom-branch" viewBox=" 0 0 190 112">
                    <path class="branch-stem" d="M8 12 C54 25 91 52 176 100"/>
                    <path class="red-leaf" d="M30 22 C7 5 14 -1 43 15 C39 2 51 -3 55 22 C68 6 80 10 65 31 C57 39 43 34 30 22Z"></path>
                    <path class="red-leaf" d="M66 39 C49 17 59 12 81 32 C79 17 91 15 93 39 C109 26 116 33 97 48 C87 54 76 49 66 39Z"></path>
                    <path class="red-leaf" d="M101 61 C87 39 98 33 115 54 C116 39 128 39 127 62 C144 52 151 60 130 72 C119 77 110 70 101 61Z"></path>
                    <path class="red-leaf" d="M139 82 C130 62 141 57 153 77 C157 64 167 68 163 87 C180 81 185 91 165 99 C154 101 145 91 139 82Z"></path>
                </svg>

                <svg class="leaf-branch left-branch" viewBox="0 0 140 160" aria-hidden="true">
                    <path class="branch-stem" d="M8 152 C44 112 66 70 105 8"></path>
                    <path class="gold-leaf" d="M24 132 C1 132 -3 118 25 116 C10 103 18 93 38 113 C42 123 34 131 24 132Z"></path>
                    <path class="gold-leaf" d="M43 105 C20 99 21 86 48 91 C37 74 47 67 62 90 C63 101 53 106 43 105Z"></path>
                    <path class="gold-leaf" d="M62 77 C43 66 48 54 69 66 C65 46 76 43 85 68 C83 78 72 82 62 77Z"></path>
                    <path class="gold-leaf" d="M82 48 C66 34 75 25 91 40 C90 21 101 20 106 44 C102 53 91 56 82 48Z"></path>
                </svg>

                <div class="tiny-leafs">
                    <span></span><span></span><span></span>
                </div>

            <div class="project-container">
                <div class="project-card">
                    <h3 class="project-title">
                        NevaEdu
                    </h3>
                    <p class="project-description">
                        An educational platform focused on structured learning resources, concept clarity, and student-friendly explanations to support academic growth.
                    </p>

                    <a href="" class="project-view">Live Demo</a>
                </div>
                <div class="project-card">
                    <h3 class="project-title">
                        Nessay AI
                    </h3>
                    <p class="project-description">
                        An AI-assisted writing platform designed to help users generate, refine, and structure essays with clarity and logical coherence.
                    </p>

                    <a href="" class="project-view">Live Demo</a>
                </div>
                <div class="project-card">
                    <h3 class="project-title">
                        Quiz Mama
                    </h3>
                    <p class="project-description">
                        A dynamic quiz-based web application offering interactive questions across multiple domains to improve knowledge retention and engagement.
                    </p>

                    <a href="" class="project-view">Live Demo</a>
                </div>
                <div class="project-card">
                    <h3 class="project-title">
                        Woof Style
                    </h3>
                    <p class="project-description">
                        A modern dog-themed website showcasing different dog breeds, breed information, Care Guides and a engaging quiz with woof style mode.
                    </p>

                    <a href="" class="project-view">Live Demo</a>
                </div>
            </div>
        </section>
    
        <section class="contact" id="contact">
            <div class="contact-header">
                <h2>Contact Me</h2>
                <p class="contact-quote">
                    I’m always up for thoughtful conversations, fun experiments, and collaborating on projects that help me learn something new.
            </div>

            <div class="contact-details">
                <div class="contact-info">
                    <i class="fas fa-map-marker-alt location-logo contact-logo"></i>

                    <div class="contact-detail">
                        <h3>Location</h3>
                        <p>Kathmandu, Nepal</p>
                    </div>
                </div>
                <div class="contact-info">
                    <i class="contact-logo phoneno-logo fas fa-phone-alt"></i>

                    <div class="contact-detail">
                        <h3>Phone No</h3>
                        <p>+977 1 2345678</p>
                    </div>
                </div>
                <div class="contact-info">
                    <i class="contact-logo mail-logo fas fa-envelope"></i>

                    <div class="contact-detail">
                        <h3>Mail</h3>
                        <p>prasumshrestha8877@gmail.com</p>
                    </div>
                </div>
                <div class="contact-info">
                    <i class="contact-logo github-logo fa-brands fa-github"></i>

                    <div class="contact-detail">
                        <a href=""><h3>Github</h3></a>
                        <p>ShresthaPrasum</p>
                    </div>
                </div>
                <div class="contact-info">
                    <i class="contact-logo linkedin-logo fab fa-linkedin"></i>

                    <div class="contact-detail">
                        <a href=""><h3>Linked In</h3></a>
                        <p>ShresthaPrasum</p>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
</body>
</html>
    `
  }

  doc.open();
  doc.write(htmlContent);
  doc.close();
}

function getindexhtml() {
  const iframe = document.getElementById("preview");
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  return "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
}

document.querySelectorAll(".choice-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".choice-btn").forEach((button) => {
      button.classList.remove("active");
    });
    btn.classList.add("active");
    const selectedLayout = btn.getAttribute("data-layout");
    if (selectedLayout) {
      state.layout = selectedLayout;
      construct(dataUrl, state.layout);
    }
  });
});

document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".theme-btn").forEach((button) => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    const selectedTheme = btn.getAttribute("data-theme");
    if (selectedTheme) {
      state.theme = selectedTheme;
      construct(dataUrl, state.layout);
    }
  });
});

inputs.forEach((id) => {
  const inputElem = document.getElementById(id);
  if (inputElem) {
    inputElem.addEventListener("input", (e) => {
      const key = id.replace("Input", "");
      state[key] = e.target.value;
      construct(dataUrl, state.layout);
    });
  }
});

$("photo").addEventListener("change", (e) => {
  file = e.target.files[0];

  if (!file || !file.type.startsWith("image/")) {
    file = null;
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    dataUrl = reader.result;
    construct(dataUrl, state.layout);
  };

  reader.readAsDataURL(file);
});

$("exportbtn").addEventListener("click", async () => {
  try {
    const zip = new JSZip();
    let imgPath = "";
    if (file) {
      imgPath = "images/" + safeName(file.name);
      zip.file(imgPath, file);
    }

    zip.file("index.html", getindexhtml());
    const blob = await zip.generateAsync({
      type: "blob",
    });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "portfolio.zip";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  } catch (error) {
    console.error("Failed to export profile:", error);
  }
});

construct(dataUrl, state.layout);