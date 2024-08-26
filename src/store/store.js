import { configureStore } from "@reduxjs/toolkit";
import languageReducer from './slices/language'
import counterReducer from './slices/counter'
import loaderReducer from './slices/loader'
import postsReducer from './slices/posts'


export const store=configureStore({
    reducer:{
        lang:languageReducer,
        counter:counterReducer,
        loader:loaderReducer,
        posts:postsReducer
    }
})





// {

//     lang:{language:"en"},
// counter:{counter:0},
//loader:{loader:false}
// }
