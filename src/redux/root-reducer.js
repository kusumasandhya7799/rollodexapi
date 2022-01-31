import { combineReducers} from "redux";
import { searchReducer } from "./monster/monster.reducer";

const rootReducer= combineReducers({
    search:searchReducer
})
export default rootReducer