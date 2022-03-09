import React from "react";

const SearchItem = (props) => {

    const { search, setSearch } = props

    const searchHandleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="mt-3">
            <form>
                <input type="text" className="form-control" value={search} 
                placeholder='Search by product name / code (Eg. Maggi)' onChange={searchHandleChange} />
                <hr />
            </form>
        </div>
    )
}

export default SearchItem