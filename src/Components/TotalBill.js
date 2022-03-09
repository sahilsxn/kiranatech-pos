import React from "react";

const TotalBill = (props) => {

    const { totalBill } = props
    const finalBill = totalBill()
    
    return (
        <h2>Total - ₹{finalBill}</h2>
    )
}

export default TotalBill