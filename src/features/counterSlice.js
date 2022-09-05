import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    name: 'Bill',
    groceries: [],
    bought: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
        state.value++;

        },
        decrement: (state) => {
            state.value--;
        },
        incrementByAmount: (state, action) => {
             state.value += action.payload;
        },
        setStateName: (state, action) => {
            state.name = action.payload;

        },
    }
})

export const { 
        increment, 
        decrement,
        incrementByAmount ,
        setStateName,
        addGroceryItem,
            completeGroceryItem,
            clearGroceryList,
            clearBoughtGroceries
            }  = counterSlice.actions

export default counterSlice.reducer