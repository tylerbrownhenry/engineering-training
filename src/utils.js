let gridContainer = document.getElementsByClassName("grid-container");
// This is an array of all elements that have the class 'grid container' on the page
gridContainer = gridContainer[0];
// This is now the first element from the array
const modalContainer = document.getElementById("modalContainer");

const utils = {
    renderData: async () => {
    return new Promise(async(resolve)=>{
        const result = await fetch('/getJiraTickets');
        result.json().then((data)=>{
            resolve(data.jirasObject);
        })
    })
    },
    loadData: function (callback) {
    console.log("Data loaded",this);
    this.renderData().then((response)=>{
        modalContainer.classList.add("hidden");
        callback();
    })
    }
}

export default utils;