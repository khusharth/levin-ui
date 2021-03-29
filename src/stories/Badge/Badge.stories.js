import React from 'react';
import { Badge } from '../../components';

export function DefaultBadge() {
  return (
    <div>
      <Badge>Primary!</Badge>
    </div>
  );
}

export function RoundBadge() {
  return (
    <div>
      <Badge type="round">10</Badge>
    </div>
  );
}

export default {
  title: 'Components/Badge',
  component: Badge,
};
