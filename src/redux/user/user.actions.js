import { typerAction } from "./user.type"

export const setCurrentUser = user => ({
    type : typerAction.SET_CURRENT_USER,
    payload: user
})