console.log('Engineering Training!');

const modalContainer = document.getElementById('modalContainer');
const modalButton = document.getElementById('modalButton');

console.log("modalButton", modalButton);
modalButton.addEventListener("click", ()=> {
    console.log('Clicked!');
    modalContainer.classList.toggle("hidden");
});

let closeModalButton = document.getElementsByClassName('closeModalButton');
console.log("closeModalButton", closeModalButton);

closeModalButton[0].addEventListener("click", ()=> {
    modalContainer.classList.toggle("hidden");
});
