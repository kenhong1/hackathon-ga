import React, { Component } from 'react';

import Money from './Components/Money';
// import Status from './Components/Status';
import ProductShow from './Pages/ProductShow';
// import Purchase from './Pages/Purchase';
import Search from './Pages/Search';


import { Route, Link } from 'react-router-dom';
import Home from './Pages/Home';

import './App.css';

import { productData } from './Data/Products.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productData,
      money: 50000,
      searchResults: []
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    let query = e.target.value;
    if (query) {
      this.setState((state, props) => {
        let searchResults = state.products.filter(product => product.name.toLowerCase().includes(query));
        return { searchResults }
      })
    } else {
      this.setState({ searchResults: [] })
    }
  }

  render() {
    let content = <Home products={this.state.products} />;

    if (this.state.searchResults.length > 0) {
      content = <Search searchResults={this.state.searchResults} />
    }

    return (
      <div className='App'>
        <header>
          <h1>KITT</h1>
          <input type='text' placeholder='search' onChange={e => this.handleSearch(e)} />
        </header>

        <main className='Content'>

          {content}

        </main>
      </div>
    );
  }
}

export default App;
