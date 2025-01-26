import themereducer from "./states/theme-state"
import { configureStore} from "@reduxjs/toolkit"

const store= configureStore({
    reducer:{
        theme:themereducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;

