import React, { Component } from 'react';
import './App.css';
import FanTable from './FanTable';
import data from './data.json';

class App extends Component {
    constructor(){
        super();
        this.state = {
            data: data,
            sorted: {
                column: "name",
                isAsc: true
            }
        };
        this.sortBy = this.sortBy.bind(this);
    }

    sortBy(key) {
        let currentOrder = !this.state.sorted.isAsc;
        this.setState({
                data: data.sort( (a, b) => (
                    currentOrder
                        ? a[key].localeCompare(b[key])
                        : b[key].localeCompare(a[key])
                )),
                sorted: {
                    column: key,
                    isAsc: currentOrder
                }
            })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">List of Fans of Jane Willborn</h1>
        </header>
          <FanTable data={this.state.data}  sortBy={this.sortBy}/>
      </div>
    );
  }
}

export default App;
