import React from 'react';
import { FaGithub, FaSun } from 'react-icons/fa';
import { NavigationBar, Button } from '../../components';

import gradientUI from '../../assets/gradientUI.svg';

export function SimpleNavigation() {
  return (
    <div>
      <NavigationBar fixed logo={gradientUI}>
        <li className="mr-12">
          <Button type="icon">
            <FaGithub />
          </Button>
        </li>
        <li className="mr-12">
          <Button type="icon">
            <FaSun />
          </Button>
        </li>
      </NavigationBar>
    </div>
  );
}

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
};
