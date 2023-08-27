

export default function reducer(state, action) {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    if(action.type === 'REMOVE_ITEM') {
        return {...state, cart: state.cart.filter((item) => {
            return item.id !== action.payload 
        }) }
    }
    if(action.type === 'INCREMENT') {

        return {...state, cart: state.cart.map((cartItem) => {
            if(cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount + 1}
            }
            return cartItem
        })}
        // let tempCart = state.cart.map((cartItem) => {
        //     if(cartItem.id === action.payload) {
        //         return {...cartItem, amount: cartItem.amount + 1}
        //     }
        //     return cartItem
        // })
        // return {...state, cart: tempCart}
    }
    if(action.type === 'DECREMENT') {
        return {...state, cart: state.cart.map((item) => {
            if(item.id === action.payload) {
                return {...item, amount: item.amount - 1}
            }
            return item 
        }).filter((item) => {
            return item.amount !== 0
        })}
    }
    if(action.type === 'GET_TOTALS') {
        //make an array of amount from each cart item= => then add them all with reduce method
        let {total, amount} = state.cart.reduce((accumulator, eachArrayItem) => {
            const {price, amount} = eachArrayItem
            console.log(price, amount)
            const itemTotal = price * amount 

            accumulator.total += itemTotal
            accumulator.amount += amount
            return accumulator
        }, {total: 0, amount: 0})

        total = parseFloat(total.toFixed(2))

        return {...state, total, amount}
    }
    throw new Error('No matching action type') 
}
