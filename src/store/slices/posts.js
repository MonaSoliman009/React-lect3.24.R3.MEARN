import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


 

export let postsAction=createAsyncThunk("posts/getAll",async()=>{

  let res = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return res.data

})




const postsSlice=createSlice({
    name:"posts",
    initialState:{posts:[],loading:false,error:null},
    extraReducers:(builder)=>{

        builder.addCase(postsAction.pending,(state)=>{
            state.loading =true
        })
       
        builder.addCase(postsAction.fulfilled,(state,action)=>{

            state.posts=action.payload
            state.loading=false
        })

        builder.addCase(postsAction.rejected,(state)=>{
         state.error="try again to get posts"
        })
 
    },
    // reducers:{
    //     changePosts(state,action){
    //        state.posts=
    //     }
    // },
})


export default postsSlice.reducer