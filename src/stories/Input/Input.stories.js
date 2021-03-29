import React, { useState } from 'react';
import { Input } from '../../components';

export function DefaultInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <Input
        type="text"
        id="name"
        value={name}
        placeholder="Enter your name here"
        onChange={(e) => setName(e.target.value)}
        label="Name"
        fullWidth
        // error={true}
        helperText="An error occured!"
      />
    </div>
  );
}

export default {
  title: 'Components/Input',
  component: Input,
};
