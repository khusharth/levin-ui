import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Button } from '../../components';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '500px',
};

export function DefaultButton() {
  return (
    <div style={containerStyle}>
      <Button size="sm">Primary</Button>
      <Button size="md">Primary</Button>
      <Button size="lg">Primary</Button>
    </div>
  );
}

export function OutlinedButton() {
  return (
    <div style={containerStyle}>
      <Button size="sm" type="outlined">
        Outlined
      </Button>
      <Button size="md" type="outlined">
        Outlined
      </Button>
      <Button size="lg" type="outlined">
        Outlined
      </Button>
    </div>
  );
}

export function IconButtton() {
  return (
    <div style={containerStyle}>
      <Button size="sm" type="icon">
        <MdSearch />
      </Button>
      <Button size="md" type="icon">
        <MdSearch />
      </Button>
      <Button size="lg" type="icon">
        <MdSearch />
      </Button>
    </div>
  );
}

export default {
  title: 'Components/Button',
  component: Button,
};
