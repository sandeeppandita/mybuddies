import React, { useState } from 'react';

const Filter = ({ handleToggleFavourites, handleFriendSearch }) => {
	const [favStatus, setFavStatus] = useState(false);
	const [searchText, setSearchText] = useState('');

	const handleFavouriteChange = (e) => {
		setFavStatus(e.target.checked);
		handleToggleFavourites(e.target.checked);
	};

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
		handleFriendSearch(e.target.value);
	};

	return (
		<div className='filters'>
			<div className='filter'>
				Show Favourites:
				<input
					type='checkbox'
					className='input'
					checked={favStatus}
					onChange={handleFavouriteChange}
				/>
			</div>
			<div className='search'>
				Search
				<input
					type='text'
					name='name'
					value={searchText}
					onChange={handleSearchChange}
				/>
			</div>
		</div>
	);
};

export { Filter };
