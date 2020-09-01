import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css'; 


class App extends Component { 
  state = {
    children: [], 
    searchField: ''
  } 

  componentDidMount(){ 
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()).then(users => this.setState({children:users})); 
  }  ; 

  handleChange = e => {
    this.setState({searchField:e.target.value}); 
  }; 

  render(){ 
    const {children, searchField} = this.state; 
    const filteredChildren = children.filter(child=> child.name.toLowerCase().includes(searchField.toLowerCase())); 
    return(
      <div className="App">
      <h1>Children Roledex</h1>
      <SearchBox placeholder="search children" handleChange ={this.handleChange} />
      <CardList children= {filteredChildren} />
     </div>
    ); 
  }
}

export default App;
