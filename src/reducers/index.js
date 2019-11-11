import { combineReducers } from 'redux';
import auth from './auth';
import settings from './settings';
import main from './main';
import card from './card';

export default combineReducers({ auth, settings, main, card });
