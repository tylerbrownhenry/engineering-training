import React from 'react';
import utils from '../utils'
import store from '../store';
export default class Button extends React.Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick () {
      const modalContainer = document.getElementById("modalContainer");
      const dataLoaded = store.getState().dataLoaded;
      if (dataLoaded) { 
        return
      }
      modalContainer.classList.toggle("hidden");
      utils.loadData(()=>{
        store.dispatch({ type:"TOGGLE_DATALOADED" })
      });
    }
  
    render() {
      return <button onClick={this.handleOnClick}>Load Data</button>;
    }
}