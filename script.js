console.log('Engineering Training!');


const modalContainer = document.getElementById('modalContainer');
const modalButton = document.getElementById('modalButton');
console.log("modalButton", modalButton);
modalButton.addEventListener("click", ()=> {
    console.log('Clicked!');
    modalContainer.classList.toggle("hidden");
});