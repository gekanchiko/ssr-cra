import { Module } from '../utils';
import user from './user';
import post from './post';
import external from './external';

export default new Module(user, post, external);