import {  createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],     
    },
    reducers:{
        addItem:(state,action)=>{
            // directly mutating the state or changing the state
            const ItemIndex=state.items.findIndex((item)=>item.id===action.payload.id);
            console.log(ItemIndex);
            if(ItemIndex>=0){
                console.log(state.items[ItemIndex].
                    inStock)
                state.items[ItemIndex].
                inStock+=1;
            }
            else{
                state.items.push(action.payload);
            }
            
        },

        removeItem:(state,action)=>{
            console.log(state.items);
            state.items.pop();
        },

        clearCart:(state,action)=>{
            state.items.length=0;
        },

        removeSingleItem:(state,action)=>{
            const ItemIndex_dec=state.items.findIndex((item)=>item.id===action.payload.id);
            if(state.items[ItemIndex_dec].inStock>=1)
            {
                state.items[ItemIndex_dec].inStock-=1;
            }
        }
    },
});

export const{addItem,removeItem,clearCart,removeSingleItem}=cartSlice.actions;

export default cartSlice.reducer;