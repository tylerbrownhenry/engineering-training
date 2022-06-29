console.log("Engineering Training!");

const modalContainer = document.getElementById("modalContainer");
const modalButton = document.getElementById("modalButton");

console.log("modalButton", modalButton);
modalButton.addEventListener("click", () => {
  console.log("Clicked!");
  if (dataLoaded) { 
    return
  }
  modalContainer.classList.toggle("hidden");
  utils.loadData();
});

let closeModalButton = document.getElementsByClassName("closeModalButton");
console.log("closeModalButton", closeModalButton);

closeModalButton[0].addEventListener("click", () => {
  modalContainer.classList.toggle("hidden");
});

const jiraTitles = [
  "Create and publish a public repository in GitHub under your personal account named 'Engineering Training'",
  "Create index.html with basic html markup and perform first commit",
  "Add anchor tags for each completed subtasks",
  "Make unordered list of anchor tags",
  "Add the TWM logo as an image to the beginning of the body of the page",
  "Add style attributes to img tag to setting the height and width of the logo",
  "Add a head, add a style tag to the head, add a class to style tag, move logo styles to style tag, remove inline styles from logo, add class to the logo",
  "Add a selector inside style tag that targets the list items and removes the bullet",
  "Pseudo-selectors - Add hover styling to list elements",
  "UI Libraries - Add Bootstrap to your page, add check icons to your list, and convert your list into a bootstrap list-group",
];

const jiraLinks = [
  "https://totalwine.atlassian.net/browse/DIG-70749",
  "https://totalwine.atlassian.net/browse/DIG-70771",
  "https://totalwine.atlassian.net/browse/DIG-70804",
  "https://totalwine.atlassian.net/browse/DIG-70805",
  "https://totalwine.atlassian.net/browse/DIG-70905",
  "https://totalwine.atlassian.net/browse/DIG-70918",
  "https://totalwine.atlassian.net/browse/DIG-70993",
  "https://totalwine.atlassian.net/browse/DIG-71030",
  "https://totalwine.atlassian.net/browse/DIG-71062",
  "https://totalwine.atlassian.net/browse/DIG-71085",
];

const jirasObject = [];

jiraTitles.forEach((e) => console.log(e));
jiraLinks.forEach((e) => console.log(e));

for (let index = 0; index < jiraTitles.length; index++) {
  jirasObject.push({
    link: jiraLinks[index],
    title: jiraTitles[index],
  });
}

console.log("jirasObject", jirasObject);

let gridContainer = document.getElementsByClassName("grid-container");
// This is an array of all elements that have the class 'grid container' on the page
gridContainer = gridContainer[0];
// This is now the first element from the array

const utils = {
  renderData: function () {
    return new Promise((resolve)=>{
      setTimeout(() => {
        let response = '';
        jirasObject.forEach((jira) => {
          const { title, link } = jira;
          response += `
          <li><i class="bi bi-x"></i><i class="bi bi-check-circle-fill"></i><a href="${link}">${title}</a></li>
          `;
        });
        resolve(response);
      }, 1000);
    })
  },
  loadData: function () {
    console.log("Data loaded",this);
    this.renderData().then((response)=>{
      dataLoaded = true;
      gridContainer.innerHTML = response;
      modalContainer.classList.add("hidden");
    })
  }
}

let dataLoaded = false;