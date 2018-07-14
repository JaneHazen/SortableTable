import React, { Component } from 'react';
import './App.css';
import FanTable from './FanTable';
import data from './data.json';
import {Asc, Desc} from './Constants';

class App extends Component {
    constructor(){
        super();
        this.state = {
            data: data,
            direction: {
                name: Asc,
                address: Asc,
                city: Asc,
                region: Asc,
                country: Asc,
                birthday: Asc
            }
        };
        this.sortBy = this.sortBy.bind(this);
    }

    sortBy(key) {
        if(key === "birthday"){
            this.setState({
                data: data.sort( (a, b) => (
                    this.state.direction[key] === Asc
                        ? parseFloat(a[key]) - parseFloat(b[key])
                        : parseFloat(b[key]) - parseFloat(a[key])
                )),
                direction: {
                    [key]: this.state.direction[key] === Asc
                        ? Desc
                        : Asc
                }
            })
        } else {
            this.setState({
                data: data.sort( (a, b) => (
                    this.state.direction[key] === Asc
                        ? a[key].localeCompare(b[key])
                        : b[key].localeCompare(a[key])
                )),
                direction: {
                    [key]: this.state.direction[key] === Asc
                        ? Desc
                        : Asc
                }
            })
        }

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
