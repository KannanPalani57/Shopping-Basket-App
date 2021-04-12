import { SAVE_CALCULATION } from "../constants/constants";


export const addSomething = (data) => ({
        type: SAVE_CALCULATION,
        payload: data
})


