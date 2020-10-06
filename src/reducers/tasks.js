import * as types from './../constants/actionType';
import _ from 'lodash';
const {v4 : uuidv4} = require('uuid');

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var findIndex = (tasks , id) =>{
    var rs = -1;
    tasks.forEach((task,index)=>{
      if(task.id === id){
        rs = index;
      }
    });
    return rs;
  }

var myReducer = (state = initialState , action) =>{
    var index = -1;
    switch(action.type){
        case types.TASK_ALL:
            return state;

        case types.SAVE_TASK:
            var task = {
                id : action.task.id,
                name : action.task.name,
                status : action.task.status,
                level : action.task.level
            }
            if(task.id === null){
                task.id = uuidv4();
                state.push(task);
            }else{
                index = findIndex(state, task.id);
                state[index] = task;
            }
            
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            var id = action.id;
            _.remove(state, (task)=>{
                    return task.id === id;
            });
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        
        default : return state;
    }
}
export default myReducer;