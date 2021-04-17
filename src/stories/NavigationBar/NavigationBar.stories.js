import React from 'react';
import { FaGithub, FaSun } from 'react-icons/fa';
import { NavigationBar, Button } from '../../components';

import violetUI from '../../assets/violetUI.svg';

export function SimpleNavigation() {
  return (
    <div>
      <NavigationBar fixed logo={violetUI}>
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
