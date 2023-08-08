import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart:cartSlice.reducer
    },
});

export default store;

// import { createContext } from "react";
// const StoreContext = createContext({
//   items: [],
//   add: (add) => {},
//   remove: (add) => {},
// });


// const storeProvider = (props)=>{
//     const storeContext ={item:[],add:(add)=>{},remove:(add)=>{}}
//     return(<StoreContext.Provider value={storeContext}>{props.childern}</StoreContext.Provider>)
// }

// export default storeContext;
