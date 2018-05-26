import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard.js'
import Form from './Components/Form/Form.js'
import Header from './Components/Header/Header.js'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventoryList: []
    }
  }
  
  componentDidMount(){
    console.log(this.state)
    axios.get('/api/inventory')
    .then((res) => {
      this.setState({
        inventoryList: res.data
      })
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard inventory = {this.state.inventoryList}/>
      </div>
    );
  }
}

export default App;
