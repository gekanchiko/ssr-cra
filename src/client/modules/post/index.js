import { Module } from '../../utils';
import { Post, Posts } from './components';

export default new Module({
  routes: [
    {
      exact: true,
      path: '/post',
      component: Post
    },
    {
      exact: true,
      path: '/posts',
      component: Posts
    }
  ],
  navBarItems: [
    { path: '/post', name: 'Post' },
    { path: '/posts', name: 'Posts' }
  ]
});