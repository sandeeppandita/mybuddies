import React from 'react';
import { Filter } from './Filter';

import '../css/header.css';

const Header = ({ title, handleToggleFavourites, handleFriendSearch }) => {
	return (
		<header className='header'>
			<h3 className='logo'>{title}</h3>
			<Filter
				handleToggleFavourites={handleToggleFavourites}
				handleFriendSearch={handleFriendSearch}
			/>
		</header>
	);
};

export { Header };
