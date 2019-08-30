import { Module } from '../utils';
import user from './user';
import post from './post';

export default new Module(user, post);