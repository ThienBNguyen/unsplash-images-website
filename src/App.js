import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import unsplash from '../src/api/unsplash';
import ImageItems from './components/ImageItems';
export default class App extends Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageItems images={this.state.images} />
      </div>
    );
  }
}
