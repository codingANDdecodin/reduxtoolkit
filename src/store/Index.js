import {configureStore,createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:'counter',
    initialState:{counter:0},
    reducers:{
        increement(state,action){
            state.counter++;
        },

        decreement(state,action){z
            state.counter--;
        },
              
        addBy(state,action){
            state.counter+=action.payload;
        }
    }
})

export const action=counterSlice.actions;

const store=configureStore({
    reducer:counterSlice.reducer
})

export default store;