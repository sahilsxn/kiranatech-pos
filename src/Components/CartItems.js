import React from "react";
import TotalBill from "./TotalBill";

const CartItems = (props) => {

    const { filterItem, handleAddClick, cartItem, quantity, decQuantity, 
        incQuantity, removeItem, newBill, totalBill, finalBill } = props
        const printBill = (e) => {
            e.preventDefault()
            String(window.print())
        }

        return (
            <div className="mt-5">
                <div>
                    <p className="mb-0 pb-2">Items to be billed</p>

                    <table className='table border-top border-2 border-dark align-middle'>
                        <thead>
                            <tr>
                                <th style={{ fontWeight: "900" }}>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {cartItem.map((item, i) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            {i + 1}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td><button className="btn btn-secondary me-md-2" onClick={() => decQuantity(item.id)} disabled={item.quantity == 1}> - </button>{item.quantity}<button style={{marginLeft:'8px'}} className="btn btn-secondary" onClick={() => incQuantity(item.id)}> + </button></td>
                                        <td>{item.price * item.quantity}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => { removeItem(item.id) }} >Remove</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
                <div className="d-flex justify-content-between">
                    <div className="gap-3 d-md-flex justify-content-md-start">
                        <input type='submit' onClick={printBill} value='Print Bill' className="btn btn-warning" />
                        <button onClick={newBill} className="btn btn-success"> Add New Bill</button>
                    </div>

                    <div>
                        <TotalBill totalBill={totalBill} finalBill={finalBill} />
                    </div>
                </div>
            </div >
        )
}

export default CartItems