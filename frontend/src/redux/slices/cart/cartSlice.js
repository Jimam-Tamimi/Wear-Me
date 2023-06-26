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
            let productIndex = state.findIndex(p => p.id == action.payload.id);
            if(productIndex !== -1){
                state[productIndex] = action.payload;
                localStorage.setItem("cart", JSON.stringify(state))
                return state
            }
            localStorage.setItem("cart", JSON.stringify(state))
            return [...state, action.payload]
                
        } ,
        increaseItemCount: (state, action) => {
            let productIndex = state.findIndex(p => p.id == action.payload.id); 
            state[productIndex].itemCount += 1
            localStorage.setItem("cart", JSON.stringify(state))
            return state
                
        } ,
        decreaseItemCount: (state, action) => {
            let productIndex = state.findIndex(p => p.id == action.payload.id); 
            state[productIndex].itemCount -= 1
            localStorage.setItem("cart", JSON.stringify(state))
            return state
                
        } 
    }
})

export const {addProduct, increaseItemCount, decreaseItemCount} = cartSlice.actions

export default cartSlice.reducer