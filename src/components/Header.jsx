import React, { useState, useEffect } from 'react';

// shall i pass the filter handler from partent or manage it under header
const Header = ({ title, handleToggleFavourites, handleFriendSearch }) => {
	const [favStatus, setFavStatus] = useState(false);
	useEffect(() => {
		handleToggleFavourites(favStatus);
	}, [favStatus]);

	const [searchText, setSearchText] = useState('');
	useEffect(() => {
		handleFriendSearch(searchText);
	}, [searchText]);

	const handleFavouriteChange = (e) => {
		setFavStatus(e.target.checked);

		console.log(favStatus);
	};

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
	};

	return (
		<div className='header'>
			<div className='logo'>
				<strong>{title}</strong>
			</div>
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
		</div>
	);
};

export { Header };
