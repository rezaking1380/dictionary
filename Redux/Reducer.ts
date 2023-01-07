
import { Actions } from "../moduls/Action.model";
import initState  from "../moduls/model";

export const initState: initState = {
    Word : [],
    Status : 'idel',
    Error : ''
}

const Reducer = (state = initState, action: any ) => {
    switch (action.type) {
        case Actions.WORD_REQUEST:
            return {
                ...state,
                Word: [],
                Status: 'loading',
                Error: ''
            }
        case Actions.WORD_SUCCESS:
            return {
                ...state,
                Word: action.payload,
                Status: 'success'
            }
        case Actions.WORD_FAIL:
            return {
                ...state,
                Error: action.payload,
                Status : 'fail'
            }    
    
        default:
            return state
    }
}

export default Reducer