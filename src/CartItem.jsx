import React from 'react'
import { useGlobalContext } from './context'

export default function CartItem({img, title, price, id}) {
    const {amount} = useGlobalContext()
    return (
        <div classname='cart-item' style={{display: 'flex', justifyContent: 'space-between'}}>
            <img src={img} alt={title} style={{width: '100px', marginBottom: '20px', padding: '10px 0'}} />
            <div style={{marginBottom: '20px'}}>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button className='remove-btn'>remove</button>
            </div>
            <div style={{}}>
                <button className='amount-btn'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                    </svg>
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                </button>
            </div>
        </div>
    )
}