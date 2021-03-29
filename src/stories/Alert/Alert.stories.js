import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Alert } from '../../components';

export function Alerts() {
  return (
    <div>
      <Alert className="mb-8" type="info" text="This is some Info!" />
      <Alert className="mb-8" type="danger" text="This is an Error!" />
      <Alert className="mb-8" type="warning" text="This is a Warning!" />
      <Alert
        className="mb-8"
        type="success"
        text="This is a success message!"
      />
    </div>
  );
}

export default {
  title: 'Components/Alert',
  component: Alert,
};
