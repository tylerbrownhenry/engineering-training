import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import utils from './utils'
import Button from './components/button';

ReactDOM.render(
  <Button/>,
  document.getElementById('root')
);

(async function() {

    console.log("Engineering Training!");
  
    const modalContainer = document.getElementById("modalContainer");
    const modalButton = document.getElementById("modalButton");
  
    console.log("modalButton", modalButton);
  
  
   function initModalButton() {
     return new Promise((resolve)=>{
        let dataLoaded = false;
        modalButton.addEventListener("click", () => {
          console.log("Clicked!");
          if (dataLoaded) { 
            return
          }
          modalContainer.classList.toggle("hidden");
          utils.loadData(()=>{
            dataLoaded = true;
            resolve();
          });
        });
      })
    }
    
    console.log("BEFORE initModalButton is called");
    await initModalButton();
    console.log("AFTER initModalButton is called");
  
  })();