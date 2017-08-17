import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        term: ''
    };
  }

  saveTerm(text) {
    this.setState({
      term: text
    });
  }

  render() {
    console.log(`${this.state.term} --term`);
    return (
      <div>
        <input onChange={(event) => this.saveTerm(event.target.value)}/>
      </div>
    );
  }
}

export default SearchBar;
