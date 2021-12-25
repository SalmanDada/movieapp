import React from 'react';
import '../App.css'

const SearchBox = (props) => {
	return (
		<div>
			<input
				className='inputField'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;