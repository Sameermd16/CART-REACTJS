import React, { createContext, useContext, useReducer } from 'react'
import cartItems from './data'
import reducer from './reducer'

const AppContext = createContext()

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0
}


function AppProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    function clearCart() {
        return dispatch({ type: 'CLEAR_CART' })
    }

    return (
        <AppContext.Provider value={{...state, clearCart}}> 
            {children} 
        </AppContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(AppContext)
}

export {AppContext, AppProvider}