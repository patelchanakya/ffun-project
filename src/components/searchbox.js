import React from 'react';


const SearchBox = (props) => {
    return(
        <div className="container">
            <input type='search'
            className='search container'
            placeholder = {props.placeholder}
            onChange = {props.handleChange}
            />
        </div>
        
    )

}

export default SearchBox;