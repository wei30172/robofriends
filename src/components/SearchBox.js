import React from 'react';

const SearchBox = ({searchfield, SearchChange}) => {
	return (
		<div className='pd2'>
			<input 
			className='pd3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='search robots' 
			onChange={SearchChange}
			/>
		</div>
	);
}

export default SearchBox;