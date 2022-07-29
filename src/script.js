import React, { Component } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.Fragment><h1>Hello World!</h1></React.Fragment>,
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
  
    let gridContainer = document.getElementsByClassName("grid-container");
    // This is an array of all elements that have the class 'grid container' on the page
    gridContainer = gridContainer[0];
    // This is now the first element from the array
  
    const utils = {
      renderData: async () => {
        return new Promise(async(resolve)=>{
            const result = await fetch('/getJiraTickets');
            result.json().then((data)=>{
              let response = '';
              data.jirasObject.forEach((jira) => {
                const { title, link, icon } = jira;
                response += `
                <li></i><i class="${icon}"></i><a href="${link}">${title}</a></li>
                `;
              });
              resolve(response);
            })
        })
      },
      loadData: function (callback) {
        console.log("Data loaded",this);
        this.renderData().then((response)=>{
          console.log('response', response)
          gridContainer.innerHTML = response;
          modalContainer.classList.add("hidden");
          callback();
        })
      }
    }
  
    console.log("BEFORE initModalButton is called");
    await initModalButton();
    console.log("AFTER initModalButton is called");
  
  })();