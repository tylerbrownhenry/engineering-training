console.log("Engineering Training");

const modalButton = document.getElementById("modalButton");
console.log('modalButton', modalButton);
modalButton.addEventListener("click", function(){
    console.log("clicked button!");
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.classList.toggle("hidden");
});

const closeModalButton = document.getElementsByClassName("close-modal-button");
console.log('closeModalButton', closeModalButton);

closeModalButton[0].addEventListener("click", function(){
    console.log("clicked close modal button!");
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.classList.toggle("hidden");
});

const jiraLinks = [
    "https://totalwine.atlassian.net/browse/TT-2",
    "https://totalwine.atlassian.net/browse/TT-16",
    "https://totalwine.atlassian.net/browse/TT-17",
    "https://totalwine.atlassian.net/browse/TT-18",
    "https://totalwine.atlassian.net/browse/TT-19"
];

const jiraTitles = [
    "Create a public repository under your GitHub account",
    "Create a new script file, and import it into index.html and add a console log",
    "JavaScript: Variables",
    "JavaScript: Event Listeners - Add Toggle Button Inside of Modal",
    "JavaScript: Functions - Write a function to toggle hidden class on modal"
];

console.log("jiraTitles", jiraTitles);
console.log("jiraLinks", jiraLinks);

const jirasArray = [];


jiraTitles.forEach((e, i)=>{
    const title = jiraTitles[i];
    const link = jiraLinks[i];
    jirasArray.push({
        title: jiraTitles[i],
        link: jiraLinks[i]w
    })
    console.log(e)
});

jiraLinks.forEach((e)=>console.log(e));

console.log("jirasArray", jirasArray);
