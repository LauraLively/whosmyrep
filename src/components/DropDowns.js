import React, { Component } from 'react';
import { FormControl, InputLabel, MenuItem, Select, } from '@material-ui/core';
import usstates from '../InitialData/States.json';

const styles = {
  Grid: {
    minWidth: '10rem',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: '1rem'
  },
  form: {
    display: 'grid',
  }
}

class DropDowns extends Component {
  constructor(props) {
    super(props);

    this.handleUSStateChange = this.handleUSStateChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleTypeChange(event) {
    this.props.onTypeChange(event.target.value);
  }

  handleUSStateChange(event) {
    this.props.onUSStateChange(event.target.value);
  }


  render() {
    const statesOptions = usstates.map(usstate => {
      return <MenuItem value={usstate.abbreviation} key={usstate.abbreviation}>{usstate.name}</MenuItem>;
    });
    const usstate = this.props.usstate;
    const type = this.props.type;
    return (
      <form >
        <FormControl variant="outlined" style={styles.Grid}>
          <InputLabel name='type'>Type</InputLabel>
          <Select
            onChange={this.handleTypeChange}
            value= {type}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Senators">Senators</MenuItem>
            <MenuItem value="Representatives">Representatives</MenuItem>
          </Select>
        </FormControl >
        <FormControl variant="outlined" style={styles.Grid}>
          <InputLabel name='usstate'>State</InputLabel>
          <Select
            onChange={this.handleUSStateChange}
            value={usstate}
          >
            <MenuItem value={usstate}>
            None
            </MenuItem>
            {statesOptions}
          </Select>
        </FormControl>
      </form>
    )
  }
}

export default DropDowns
