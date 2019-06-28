import React, { Component } from 'react';
import './App.css';
import DropDowns from './components/DropDowns';
import DisplayReps from './components/DisplayReps';
import getData from './InitialData/getData';
import DisplaySingleRep from './components/DisplaySingleRep'

const styles = {
  color: {
    color: 'DeepSkyBlue'
  },
  display: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  list: {
    width: '50vw'
  }
}
class App extends Component {
  state = {
    type: 'Senators',
    usstate: '',
    results: [],
    selected: null
  }

  onTypeChange(type) {
    this.setState({ type }, this.getMyReps);
  };

  onUSStateChange(usstate) {
    this.setState({ usstate }, this.getMyReps);
  };

  onSelectRep(rep) {
    this.setState({ selected: rep });
  };


  getMyReps() {
    console.log("getMyReps()")
    let dataPromise;
    if (this.state.type === 'Senators') {
      dataPromise = getData.senators(this.state.usstate);
    } else {
      dataPromise = getData.representatives(this.state.usstate);
    }
    dataPromise.then(data => {
      this.setState({ results: data, selected: null });
    });
  };

  render() {
    console.log("GetMyReps", this.state.results)
    return (
      <div className='App'>
        <h1 style={styles.color}>Who is my Representative?</h1>
        <DropDowns
          onTypeChange={(type) => this.onTypeChange(type)}
          onUSStateChange={(usstate) => this.onUSStateChange(usstate)}
          usstate={this.state.usstate}
        />
        <div style={styles.display}>
          <div style={styles.list}>
            <h2>List / <span style={styles.color}>{this.state.type}</span></h2>
            <DisplayReps
              style={styles.display}
              reps={this.state.results}
              onSelectRep={(rep) => this.onSelectRep(rep)}
            />
          </div>
          <div>
            <h2>Info</h2>
            <DisplaySingleRep 
              selected={this.state.selected}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
