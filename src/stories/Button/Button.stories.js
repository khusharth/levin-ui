import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Button } from '../../components';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '500px',
};

export function PrimaryButton() {
  return (
    <div style={containerStyle}>
      <Button size="sm" type="primary">
        Primary
      </Button>
      <Button size="md" type="primary">
        Primary
      </Button>
      <Button size="lg" type="primary">
        Primary
      </Button>
    </div>
  );
}

export function SecondaryButton() {
  return (
    <div style={containerStyle}>
      <Button size="sm" type="secondary">
        Secondary
      </Button>
      <Button size="md" type="secondary">
        Secondary
      </Button>
      <Button size="lg" type="secondary">
        Secondary
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
