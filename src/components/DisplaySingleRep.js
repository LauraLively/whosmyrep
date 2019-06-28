import React, { Component } from 'react';
import { List, ListItem,}  from '@material-ui/core';

const styles = {
  listItem: {
    backgroundColor: '#F6F6F6',
    margin: '.5rem'
  },
}
class DisplaySingleRep extends Component {
  render() {
    const rep = this.props.selected;
      if (!rep) {
        return null;
      };
    const nameArr = rep.name.split(' ');
    const firstName = nameArr.shift();
    const lastName = nameArr.join(' ');
    return (
        <List >
          <ListItem style={styles.listItem}>{firstName}</ListItem>
          <ListItem style={styles.listItem}>{lastName}</ListItem>
          <ListItem style={styles.listItem}>{rep.district}</ListItem>
          <ListItem style={styles.listItem}>{rep.phone}</ListItem>
          <ListItem style={styles.listItem}>{rep.office}</ListItem>
          <ListItem style={styles.listItem}><a href={rep.link} target="_blank" rel="noopener noreferrer" >View Website</a></ListItem>
        </List>
    )
  }
}

export default DisplaySingleRep
