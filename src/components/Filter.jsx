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
				<label className='filter-name'>Show Favourites</label>
				<input
					type='checkbox'
					className='input-cbox'
					checked={favStatus}
					onChange={handleFavouriteChange}
				/>
			</div>
			<div className='search'>
				<label className='filter-name'>Search </label>

				<input
					type='text'
					name='name'
					className='input-search'
					value={searchText}
					onChange={handleSearchChange}
				/>
			</div>
		</div>
	);
};

export { Filter };
