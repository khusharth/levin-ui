import React from 'react';
import { MdCancel } from 'react-icons/md';
import { Card, CardHeader, CardImage, Button } from '../../components';

import './Card.stories.scss';

export function DefaultCard() {
  return (
    <div style={{ width: '300px' }}>
      <Card>
        <CardImage image="https://images.dog.ceo/breeds/retriever-golden/n02099601_7312.jpg" />
        <CardHeader
          header="Dog: Tietian Terrier bread bread bread"
          subheader="this is sub"
        />
        <div
          style={{
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button type="outlined">Share</Button>
          <Button>Like</Button>
        </div>
      </Card>
    </div>
  );
}

const flexColumn = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export function HorizontalCard() {
  return (
    <div style={{ width: '800px' }}>
      <Card horizontal>
        <CardImage image="https://images.dog.ceo/breeds/retriever-golden/n02099601_7312.jpg" />
        <div style={flexColumn}>
          <CardHeader
            header="Dog: Tietian Terrier bread bread bread"
            subheader="this is sub"
          />
          <div className="p-16" style={flexColumn}>
            <Button className="mb-12" type="outlined">
              Share
            </Button>
            <Button>Like</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export function TextCard() {
  return (
    <div style={{ width: '300px' }}>
      <Card horizontal>
        <p className="p-16">This is a text only Card!</p>
      </Card>
    </div>
  );
}

export function BadgeCard() {
  return (
    <div style={{ width: '300px' }}>
      <Card showBadge>
        <CardImage image="https://images.dog.ceo/breeds/retriever-golden/n02099601_7312.jpg" />
        <CardHeader
          header="Dog: Tietian Terrier bread bread bread"
          subheader="this is sub"
        />
        <div
          style={{
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button type="outlined">Share</Button>
          <Button>Like</Button>
        </div>
      </Card>
    </div>
  );
}

export function DismissCard() {
  return (
    <div style={{ width: '300px' }}>
      <Card horizontal>
        <CardHeader header="Dog: Tietian Terrier" subheader="this is sub" />
        <div className="p-16 card__cancel">
          <MdCancel />
        </div>
      </Card>
    </div>
  );
}

export default {
  title: 'Components/Card',
  component: Card,
};
