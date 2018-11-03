import React, { Component } from 'react';

import './App.css';
import Game from './pages/Game'
import MainPage from './pages/Main'

const testcard = (value) => {
  return <h1>{value}</h1>
}

class App extends Component {
  constructor(){
    super()
    this.createAlert = this.createAlert.bind(this)
    this.state ={
      parent:'momma'
    }
  }
  createAlert(e){
    alert(e)
    alert(this.state.parent)
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <MainPage />
        <Game name={"Rolando"} car={"awesome"} magic={this.createAlert}/>
        <Test />
        {testcard("testing")}
      
      </div>
    );
  }
}

class Test extends Component {
  render(){
    return(
      <h1>Some Component</h1>
    )
  }
}

export default App;
