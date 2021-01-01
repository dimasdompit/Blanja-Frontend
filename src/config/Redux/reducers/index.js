import { combineReducers } from 'redux';
import auth from './auth';
import products from './products'
import productImages from './productImages'
import categories from './categories'
import banners from './banners'
import profile from './profile'
import conditions from './conditions'
import colors from './colors'
import sizes from './sizes'
import cart from './cart'
import transactions from './transactions'

export default combineReducers({ auth, products, categories, banners, profile, conditions, colors, sizes, productImages, cart, transactions })