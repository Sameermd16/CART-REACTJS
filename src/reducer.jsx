

export default function reducer(state, action) {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
}
