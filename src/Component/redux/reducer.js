import {ADD_TO_FAVOURITE} from './constant';

const initialstate = []

export const reducer = (state = initialstate,action) => {
     switch(action.type){
        case ADD_TO_FAVOURITE:
            return [
                ...state,
                action.data
            ]
             default :
             return state    
        }
}