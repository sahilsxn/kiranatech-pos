import React from "react";
import SearchItem from "./SearchItem";
import ProductList from "./ProductList";
import CartItems from "./CartItems";

const ProvisionContainer = (props) => {

    const { data, search, setSearch, filterItem, handleAddClick, cartItem, 
        quantity, incQuantity, decQuantity, removeItem, newBill, totalBill } = props
    
    return (
        <div className="container">
            <SearchItem {...data} search={search} setSearch={setSearch} />
            {search && <ProductList filterItem={filterItem} {...data} search={search} handleAddClick={handleAddClick} />}
            {cartItem.length > 0 && <CartItems handleAddClick={handleAddClick} filterItem={filterItem} cartItem={cartItem}
                quantity={quantity} incQuantity={incQuantity} decQuantity={decQuantity} removeItem={removeItem}
                newBill={newBill} totalBill={totalBill} />}

        </div>
    )
}

export default ProvisionContainer