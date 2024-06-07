import {ADD_TO_FAVOURITE} from './constant';


export function addToFavourite(item){
        return{
            type:ADD_TO_FAVOURITE,
            data:item
        }
}