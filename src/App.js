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

  render() {
    const { list, title } = this.state;

    console.log(list, title)
    return (
      <Dropdown title={title} items={list}/>
    );
  }
}

export default App;
