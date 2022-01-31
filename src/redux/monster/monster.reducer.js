import { monsterActionType } from "./monster.type";

export const  INITIAL_STATE={
    searchField: ''
}
export const  searchReducer= (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case monsterActionType.SEARCH_MONSTER:
            return{

                // Existing state with reset operator
                ...state,
                searchField:action.payload
            }
            default:
                 return state
}}