import { createContext } from "react";
import React from "react";

const initialState={cart: []}
export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const addItem = (item) => { initialState.cart.push(item);};
  const getContext =()=>{
    console.log(initialState.cart)
    const numItems=initialState.cart
    return numItems.length
  }
  return (
    <GlobalContext.Provider value={{...initialState,addItem,getContext}}>
      {children}
    </GlobalContext.Provider>
  );
};
