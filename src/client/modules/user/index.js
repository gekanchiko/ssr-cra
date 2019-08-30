import { Module } from '../../utils';
import User from './components/User';

export default new Module({
  routes: [
    {
      exact: true,
      path: '/user',
      component: User
    }
  ],
  navBarItems: [
    { path: '/user', name: 'User' }
  ]
});