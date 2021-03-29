import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
state = {
    persons :[
    {name:'Tuong', age:12},
    {name:'Tu', age:32},
    {name:'Minh', age:43}
    ]
}
  render() {
    return (
      <div className="App">
        <h1>"clgt" </h1>
        <p>This is really working</p>
        <button> Switch Button! </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

  }
}

export default App;
