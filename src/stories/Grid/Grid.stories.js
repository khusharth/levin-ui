import React from 'react';

import './Grid.stories.scss';

export function DefaultBadge() {
  return (
    <>
      <div className="row">
        <div className="col bg-grey p-16 mr-8">Column 1</div>
        <div className="col bg-grey p-16">Column 2</div>
      </div>
      <div className="row mt-8">
        <div className="col bg-grey p-16 mr-8">Column 1</div>
        <div className="col bg-grey p-16 mr-8">Column 2</div>
        <div className="col bg-grey p-16">Column 3</div>
      </div>
    </>
  );
}

export default {
  title: 'Components/Grid',
};
