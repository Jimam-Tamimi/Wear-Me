import { createSlice } from "@reduxjs/toolkit";


let localCart = localStorage.getItem('cart')
if(!localCart){
    const cart = JSON.parse(localStorage.getItem('cart'))
}
let initialState = localCart? JSON.parse(localCart) : []



 

const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log(state)
            console.log(action)            
            let productIndex = state.findIndex(p => p.id == action.payload.id);
            console.log(productIndex)
            if(productIndex !== -1){

                state[productIndex] = action.payload;
                return state
            }
            return [...state, action.payload]
                
        } 
    }
})

export const {addProduct} = cartSlice.actions

export default cartSlice.reducer