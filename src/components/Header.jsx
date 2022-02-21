import React from 'react';
import { Filter } from './Filter';

const Header = ({ title, handleToggleFavourites, handleFriendSearch }) => {
	return (
		<header className='header'>
			<h3 className='logo'>
				<strong>{title}</strong>
			</h3>
			<Filter
				handleToggleFavourites={handleToggleFavourites}
				handleFriendSearch={handleFriendSearch}
			/>
		</header>
	);
};

export { Header };
