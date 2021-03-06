import React, { Component } from 'react';
import Dropdown from './Dropdown';

const dropdownList = [
  {title: "Dropdown list #1"},
  {title: "Dropdown list #2"},
  {title: "Dropdown list #3"},
];

const title = "Select title";

class App extends Component {
  state = {
    list: [],
    title: ''
  }

  componentDidMount() {
    this.setState({
      list: dropdownList,
      title
    });
  }

  itemSelected(item){
    // Do anything...
    console.log(item)
  }

  render() {
    const { list, title } = this.state;

    return (
      <Dropdown title={title} items={list} selectItem={this.itemSelected}/>
    );
  }
}

export default App;
