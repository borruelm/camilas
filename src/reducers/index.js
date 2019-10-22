import {ADD_MAKE} from '../constanst/action-types';


const initialState = {
    make: []
};
  function rootReducer(state = initialState, action) {
      
    switch(action.type){
        case ADD_MAKE :
            return {...state, make : action.payload};   
        default: return []; 

    }
    
  };
  export default rootReducer;