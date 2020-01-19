import { combineReducers } from 'redux';
import PostReducers from './PostReducers'
import UsersReducers from './UsersReducers';

export default combineReducers({
  posts : PostReducers, 
  users: UsersReducers
})