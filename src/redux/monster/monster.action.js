import { monsterActionType } from "./monster.type";

// Search monster action creator is getting us payload of username from home component 
export const searchMonster =(username)=>({
    type:monsterActionType.SEARCH_MONSTER,
    payload:username
})