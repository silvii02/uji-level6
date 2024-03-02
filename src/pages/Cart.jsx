import React from 'react'
import { useCart } from "react-use-cart";

function Cart() {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
 } = useCart();
 if (isEmpty) 
  return (
    <section className='py-4 container'>
    <h1 className='text-center'>Your Cart is Empty</h1>
        <div className='row justify-content-center'>
            <div className='col-12'>
                <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                <table className='table table-light table-hover m-0'>
                  {items.map((item, index)=>{
                    <tr key={index}>
                      <td>
                        <img src={item.img} style={{height: '6rem'}} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                    </tr>
                  })}

                </table>
            </div>
         </div>
    </section>
  )
}

export default Cart;