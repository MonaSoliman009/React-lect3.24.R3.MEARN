import { configureStore } from "@reduxjs/toolkit";
import languageReducer from './slices/language'
import counterReducer from './slices/counter'
import loaderReducer from './slices/loader'



export const store=configureStore({
    reducer:{
        lang:languageReducer,
        counter:counterReducer,
        loader:loaderReducer
    }
})





// {

//     lang:{language:"en"},
// counter:0
// }
