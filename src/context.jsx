import React, { createContext, useContext, useEffect, useReducer } from 'react'
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
    function removeItem(id) {
        return dispatch({ type: 'REMOVE_ITEM', payload: id})
    }
    function increment(id) {
        return dispatch({type: 'INCREMENT', payload: id})
    }

    function decrement(id) {
        return dispatch({type: 'DECREMENT', payload: id})
    }
    
    useEffect(() => {
        dispatch({ type: 'GET_TOTALS'})
        // dispatch({type: 'nothing'}) => gives the error as it is not declared in the reducer function 
    }, [state.cart])

    return (
        <AppContext.Provider value={{...state, clearCart, removeItem, increment, decrement}}> 
            {children} 
        </AppContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(AppContext)
}

export {AppContext, AppProvider}