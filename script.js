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