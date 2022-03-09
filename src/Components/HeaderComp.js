import React from "react";

const HeaderComp = (props) => {

    const newDate = new Date()

    return (
        <div className="d-flex justify-content-between mt-2 border-bottom border-1 ">
            <h1>My Provision Store</h1>
            <h3>{newDate.getDate()}/{newDate.getMonth() + 1}/{newDate.getFullYear()}</h3>
        </div>
    )
}

export default HeaderComp