import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Avatar, AvatarGroup } from '../../components';

export function Round() {
  return (
    <AvatarGroup>
      <Avatar
        size="xs"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
      />
      <Avatar
        size="sm"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
      />
      <Avatar
        size="md"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
      />
      <Avatar
        size="lg"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
      />
      <Avatar
        size="xl"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
      />
    </AvatarGroup>
  );
}

export function Square() {
  return (
    <AvatarGroup>
      <Avatar
        className="m-8"
        size="xs"
        type="square"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
      />
      <Avatar
        className="m-8"
        size="sm"
        type="square"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
      />
      <Avatar
        className="m-8"
        size="md"
        type="square"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
      />
      <Avatar
        className="m-8"
        size="lg"
        type="square"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
      />
      <Avatar
        className="m-8"
        size="xl"
        type="square"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
      />
    </AvatarGroup>
  );
}

export function Fallaback() {
  return (
    <AvatarGroup>
      <Avatar
        size="lg"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_546.jpg"
      />
      <Avatar size="lg" type="square" image="" />
    </AvatarGroup>
  );
}

export function WithBadge() {
  return (
    <AvatarGroup>
      <Avatar
        className="mr-8"
        size="lg"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
        displayBadge
      />
      <Avatar
        className="mr-8"
        size="lg"
        type="square"
        image="https://images.dog.ceo/breeds/terrier-australian/n02096294_5466.jpg"
        displayBadge
      />
    </AvatarGroup>
  );
}

export default {
  title: 'Components/Avatar',
  component: Avatar,
};
