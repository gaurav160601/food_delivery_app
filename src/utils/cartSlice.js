import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState :{
        items:[]
    },
    reducers:{
        addItem:(state,actions)=>{
            const existing = state.items.find(i => i.card.info.id === actions.payload.card.info.id)
            if (existing) {
                existing.quantity += 1
            } else {
                state.items.push({ ...actions.payload, quantity: 1 })
            }
        },
        removeItem:(state,actions)=>{
            const index = state.items.findIndex(i => i.card.info.id === actions.payload)
            if (index !== -1) {
                if (state.items[index].quantity > 1) {
                    state.items[index].quantity -= 1
                } else {
                    state.items.splice(index, 1)
                }
            }
        },
        clearCart:(state)=>{
            state.items.length=0
        }
    }
})


export const{addItem,removeItem,clearCart}=cartSlice.actions

export default cartSlice.reducer