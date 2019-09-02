import React from 'react';
import Loadable from 'react-loadable';

const AsyncComponent = Loadable({
  loader: () => import(/* webpackChunkName: "0" */ './components/Editor'),
  loading: () => <div>Loading...</div>,
  modules: ['0']
});

export default AsyncComponent;