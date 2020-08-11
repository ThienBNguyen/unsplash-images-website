import React, { Component } from "react";
import style from "./SearchBar.css";
export default class SearchBar extends Component {
  state = {
    term: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            type="text"
          />
        </form>
      </div>
    );
  }
}
