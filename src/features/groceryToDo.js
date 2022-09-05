import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
    groceries: [],
    bought: []
}

export const groceryToDo = createSlice({
    name:'grocery',
    initialState,
    reducers: {
        addGroceryItem: (state, action) => {
            state.groceries.push({ id:`id-${Date.now()}`, name: action.payload, bought: false})
        },
        buyGroceryItem: (state, action) => {
            const item = state.groceries.find(({id}) => id === action.payload);
            const itemIndex = state.groceries.indexOf(item);
            state.groceries.splice(itemIndex, 1);
            state.bought.push(item);
        },
        clearGroceryList: state => { 
            state.groceries.length = 0;
        },
        clearBoughtGroceries: state => {
            state.bought.length = 0;
        }


}
})