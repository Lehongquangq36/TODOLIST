import {combineReducers} from 'redux';
import tasks from './tasks';
import isShowForm from './isShowForm';
import taskSelected from './taskSelected';
import strSearch from './search';
import sort from './sort';
const myReducer = combineReducers({
    tasks,
    isShowForm,
    taskSelected,
  strSearch,
  sort
})

export default myReducer;