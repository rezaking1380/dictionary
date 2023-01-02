
import { Actions } from "../moduls/Action.model";
import initState  from "../moduls/model";

export const initState: initState = {
    Word : {},
    Loading : true,
    Error : ''
}

const Reducer = (state = initState, action : Actions.Action<any> ) => {
    switch (action.type) {
        case Actions.WORD_REQUEST:
            state.Loading = true
            break;
        case Actions.WORD_SUCCESS:
            state.Word = action.payload
            state.Loading = false
            break;
        case Actions.WORD_FAIL:
            state.Error = action.payload
            state.Loading = true
            break;    
    
        default:
            state
            break;
    }
}

export default Reducer