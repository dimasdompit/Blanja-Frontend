import { combineReducers } from 'redux';
import auth from './auth';
import products from './products'
import categories from './categories'
import banners from './banners'

export default combineReducers({ auth, products, categories, banners })