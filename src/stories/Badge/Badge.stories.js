import React from 'react';
import { Badge } from '../../components';

export function DefaultBadge() {
  return (
    <div>
      <Badge className="mr-8" color="primary">
        Primary!
      </Badge>
      <Badge className="mr-8" color="warning">
        Primary!
      </Badge>
      <Badge className="mr-8" color="danger">
        Primary!
      </Badge>
      <Badge className="mr-8" color="success">
        Primary!
      </Badge>
    </div>
  );
}

export function RoundBadge() {
  return (
    <div>
      <Badge type="round" className="mr-8" color="primary">
        2
      </Badge>
      <Badge type="round" className="mr-8" color="warning">
        10
      </Badge>
      <Badge type="round" className="mr-8" color="danger">
        50
      </Badge>
      <Badge type="round" className="mr-8" color="success">
        100
      </Badge>
    </div>
  );
}

export default {
  title: 'Components/Badge',
  component: Badge,
};
