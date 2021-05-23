import { combineReducers } from 'redux';
import { readMessageReducer } from './message/reducers';
import { readNotificationReducer } from './notification/reducers';
import authReducer from './authentication/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import userReducer from './_nfc/users/reducers';
import { headerSearchReducer } from './headerSearch/reducers';
import productCategoryReducer from './_nfc/productCategory/reducers';
import chartContentReducer from './chartContent/reducers';
import productReducer from './_nfc/products/reducers';

const rootReducers = combineReducers({
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  users: userReducer,
  auth: authReducer,
  ChangeLayoutMode,
  chartContent: chartContentReducer,
  productCategory: productCategoryReducer,
  product: productReducer,
});

export default rootReducers;
