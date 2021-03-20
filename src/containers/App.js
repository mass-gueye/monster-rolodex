import './App.css';
import React, { Component } from 'react';
import { CardList } from '../components/card-list/card-list.component'
import { SearchBox } from '../components/search-box/search-box.component'


class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    }
    console.log('defining state');

    

  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>
        response.json())
      .then(data => this.setState({ monsters: data }))

    console.log('component has been mounted');
  }

  handleChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {

    const { monsters, searchfield } = this.state;

    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()))


    console.log('render func');



    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} placeholder={'search monsters'} />

        <CardList monsters={filteredMonster} />
      </div>
    )
  }
}

export default App;