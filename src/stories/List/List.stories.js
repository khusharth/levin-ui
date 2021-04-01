import React from 'react';
import { List, ListItem } from '../../components';

export function ListVertical() {
  return (
    <List spacing={2}>
      <ListItem divider>Alex</ListItem>
      <ListItem divider color="warning">
        Bob
      </ListItem>
      <ListItem spacing={2} color="danger">
        Hello
      </ListItem>
      <ListItem color="primary">Sam</ListItem>
    </List>
  );
}

export function ListHorizontal() {
  return (
    <List horizontal spacing={2}>
      <ListItem spacing={2}>Alex</ListItem>
      <ListItem spacing={2} color="warning">
        Bob
      </ListItem>
      <ListItem spacing={2} spacing={2} color="danger">
        Hello
      </ListItem>
      <ListItem spacing={2} color="primary">
        Sam
      </ListItem>
      <ListItem spacing={2} color="success">
        Any
      </ListItem>
    </List>
  );
}

export default {
  title: 'Components/List',
  component: List,
};
