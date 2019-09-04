import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
// By using the React.Component instead of a function
// we get access to all of its built in functionality
// by using the contructor method we can then build
// upon the App class

// Class Components
class App extends React.Component {
  // working with state
  constructor() {
    super(); // used to access all functions of its parent object
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  //prettier-ignore
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users})) // sets monsters to equal the returned api data
  }

  /// I dont understand this
  handleChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    // filter returns a new array with elements that
    // fall upder a given criteria from an exisiting array

    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
