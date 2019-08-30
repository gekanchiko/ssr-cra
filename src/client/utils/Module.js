import React from 'react';
import { Route } from 'react-router-dom';

class Module {
  constructor(...modules) {
    this.routes = modules.reduce((acc, { routes }) => routes ? [...acc, ...routes] : acc, []);
    this.navBarItems = modules.reduce((acc, { navBarItems }) => navBarItems ? [...acc, ...navBarItems] : acc, []);
  }

  getRoutes = () => {
    return this.routes.map((props, idx) => <Route {...props} key={`route-${idx}`} />);
  };

  getNavBarItems = () => {
    return this.navBarItems;
  };

}

export default Module;