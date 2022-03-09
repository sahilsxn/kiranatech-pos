import React from "react";

const ProductList = (props) => {

    const { filterItem, data, search, handleAddClick } = props

    return (
        filterItem().length > 0 ?
            (<div>
                <p className="mb-0 pb-2">List of Products</p>

                <table className="table border-top border-medium align-middle">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterItem().map(item => {
                            return (
                                <tr key={item.id} >
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        <button onClick={() => { handleAddClick(item.id) }} className="btn btn-primary">
                                            Add
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>)
            :
            (<h3>No items found</h3>)
    )
}

export default ProductList