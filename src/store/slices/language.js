import { createSlice } from "@reduxjs/toolkit";
import { EN } from "../../Lang/EN.JS";
import { AR } from "../../Lang/AR";



const translation={en:EN,ar:AR};


const languageSlice=createSlice({
    name:"language",
    initialState:{language:localStorage.getItem("lang"),translate:translation[localStorage.getItem("lang")]},
    reducers:{
       
        changeLanguage:(state,action)=>{ //en
           
            state.language=action.payload
            state.translate=translation[action.payload]
        }

    },
})

export const {changeLanguage}=languageSlice.actions

export default languageSlice.reducer