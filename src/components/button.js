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

      store.dispatch({ type:"LOAD_DATA" })
      utils.loadData((jiras)=>{
        store.dispatch({ type:"JIRAS_LOADED", jiras })
      });
    }
  
    render() {
      return <button onClick={this.handleOnClick}>Load Data</button>;
    }
}