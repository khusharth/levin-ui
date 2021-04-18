import React from 'react';
import { FaGithub, FaSun } from 'react-icons/fa';
import { NavigationBar, Button, List, ListItem } from '../../components';

import levinUI from '../../assets/levinUI.svg';

export function SimpleNavigation() {
  return (
    <div>
      <NavigationBar fixed logo={levinUI}>
        <div className="navbar__logo">
          <img className="pl-8 image-responsive" src={levinUI} alt="logo" />
        </div>
        <List horizontal>
          <ListItem>
            <Button className="mr-8" type="icon">
              <FaGithub />
            </Button>
          </ListItem>
          <ListItem>
            <Button className="mr-8" type="icon">
              <FaSun />
            </Button>
          </ListItem>
        </List>
      </NavigationBar>
    </div>
  );
}

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
};
