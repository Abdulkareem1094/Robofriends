import React from 'react'; 

const SearchBox = ({searchfield , searchChange}) =>{
    return(
        <div className='pa2'>
            <input
            className='bg-light-blue b--green b2 pa3' 
            type="search" 
            placeholder='Search robots'
            onChange={searchChange }
            />
        </div>
    );
}

export default SearchBox; 