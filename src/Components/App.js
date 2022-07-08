import {React, useState} from "react";
import HeaderComp from './HeaderComp'
import ProvisionContainer from './ProvisionContainer'

const App = (props) => {

    const newData = [
        { "id": 101, "name": "Rice - Basmati", "price": 54 },
        { "id": 104, "name": "Rice - Basmati - Super Premium", "price": 58 },
        { "id": 105, "name": "Poha thick", "price": 48 },
        { "id": 110, "name": "Poha Medium", "price": 55 },
        { "id": 111, "name": "Organic Basmati Rice", "price": 69 },
        { "id": 112, "name": "Maggi Small", "price": 40 },
        { "id": 113, "name": "Maggi Atta Noodles", "price": 60 }
    ]

    const [search, setSearch] = useState('')
    const [cartItem, setCartItem] = useState([])
    const [quantity, setQuantity] = useState(1)

    const data = newData.map((ele) => {
        return { ...ele, quantity: 1 }
    })

    const filterItem = () => {
        return movies.filter(function (ele) {
            return ele.name.toLowerCase().includes(search.toLowerCase()) || (ele.movieRank === Number(search))
        })
    }

    const handleAddClick = (id) => {

        const checkCart = cartItem.filter((ele) => {
            return ele.id === id
        })
        if (checkCart.length > 0) {
            alert('Item is already present in cart, increasing quantity')
            incQuantity(id)
        } else {
            const newArr = filterItem().filter((ele) => {
                return ele.id == id
            })
            const newCart = cartItem.concat(newArr)
            setCartItem(newCart)
            setSearch('')
        }
    }

    const decQuantity = (id) => {
        const result = cartItem.map((ele) => {
            if (ele.id == id) {
                return { ...ele, ...{ quantity: ele.quantity - 1 } }
            }
            else {
                return { ...ele }
            }
        })
        setCartItem(result)
    }

    const incQuantity = (id) => {
        const result = cartItem.map((ele) => {
            if (ele.id == id) {
                return { ...ele, ...{ quantity: ele.quantity + 1 } }
            }
            else {
                return { ...ele }
            }
        })
        setCartItem(result)
    }

    const removeItem = (id) => {
        const result = cartItem.filter((ele) => {
            return ele.id != id
        })
        const response = window.confirm('Remove Item?')
        response && setCartItem(result)
    }

    const newBill = (e) => {
        e.preventDefault()
        setSearch('')
        setQuantity(1)
        setCartItem([])

    }

    const totalBill = () => {
        let total = 0
        for (let i = 0; i < cartItem.length; i++) {
            total += (cartItem[i].quantity * cartItem[i].price)
        }
        return total
    }

    return (
        <div className="container">
            <HeaderComp />
            <ProvisionContainer search={search} setSearch={setSearch} filterItem={filterItem} {...data} handleAddClick={handleAddClick} cartItem={cartItem} quantity={quantity} incQuantity={incQuantity} decQuantity={decQuantity} removeItem={removeItem}
                newBill={newBill} totalBill={totalBill} />
        </div>

    )
}

export default App