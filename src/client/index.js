import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

// import { loadModules, Module } from './utils';
import appModule from './modules';

import App from '../App';

import './index.css';

// const externals = [
//   { name: 'editor', url: 'http://localhost:3001' }
// ];

const renderApp = async () => {
  // await loadModules(externals);
  //
  // const externalModules = externals.reduce(
  //   (acc, { name }) => {
  //     const module = window[name] &&
  //       window[name]
  //         .default()
  //         .init({ React })
  //         .build();
  //
  //     return module ? [...acc, module] : acc
  //   },
  //   [appModule]
  // );
  //
  // const modules = new Module(...externalModules);

  const navBarMenu = appModule.getNavBarItems();

  ReactDOM.hydrate(
    <BrowserRouter>
      <App navBarMenu={navBarMenu}>
        <Switch>
          {appModule.getRoutes()}
        </Switch>
      </App>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

renderApp();