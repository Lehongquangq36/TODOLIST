import * as types from './../constants/actionType';

var initialState = {
    sortBy : '',
    sortDir : ''
};

var myReducer = (state = initialState , action) =>{
    
    switch(action.type){
        case types.SORT_TASK:
            return {
                sortBy : action.sort.sortBy,
                sortDir : action.sort.sortDir
            };

        
        default : return state;
    }
}
export default myReducer;