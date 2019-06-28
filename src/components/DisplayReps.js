import React, { Component } from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';

class DisplayReps extends Component {

  render() {
    const tableReps = this.props.reps.map( rep => {
      return (
        <TableRow key={rep.name} onClick={() => this.props.onSelectRep(rep)}>
          <TableCell>{rep.name}</TableCell>
          <TableCell>{rep.party}</TableCell>
        </TableRow>
      )
    }
      )
    return (
      <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Party</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableReps}
        </TableBody>
      </Table>
    </Paper>
    )
  }
}

export default DisplayReps
