import React from 'react';

const SearchBox = ({searchField,SearchChange}) =>{
    return (
        <input type="Search" placeholder="Search" onChange={SearchChange}/>
    )

}

export default SearchBox;