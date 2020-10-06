import * as types from './../constants/actionType';

var initialState = {
    id : '',
    name : '',
    level : 0,
    status : 0
};

var myReducer = (state = initialState , action) =>{
    switch(action.type){
       
        case types.EDIT_TASK:
            console.log(action.task)
            return action.task;
        default : return state;
    }
}
export default myReducer;