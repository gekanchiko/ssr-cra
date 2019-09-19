import React from 'react';
import { Route } from 'react-router-dom';

import Dynamic from '../componenets/Dynamic';

class Module {
  constructor(...modules) {
    this.routes = modules.reduce((acc, { routes }) => routes ? [...acc, ...routes] : acc, []);
    this.navBarItems = modules.reduce((acc, { navBarItems }) => navBarItems ? [...acc, ...navBarItems] : acc, []);
  }

  getRoutes = () => {
    return this.routes.map(({component, url, ...props}, idx) => {

      return <Route
        {...props}
        key={`route-${idx}`}
        component={
          typeof component === 'string'
            ? () => <Dynamic external={{ name: component, url }} />
            : component
        }
      />
    });
  };

  getNavBarItems = () => {
    return this.navBarItems;
  };

}

export default Module;