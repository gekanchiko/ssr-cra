import { Module } from '../../utils';

export default new Module({
  routes: [
    {
      exact: true,
      path: '/editor',
      component: 'editor',
      url: 'http://localhost:3001'
    }
  ],
  navBarItems: [
    { path: '/editor', name: 'Editor' }
  ]
});