import React from 'react';
import { useState, useEffect } from 'react';

import { Header } from '../components/Header';
import { AddFriend } from '../components/AddFriend';
import { FriendsList } from './FriendsList';

import '../css/friends.css';

const Friends = ({ title }) => {
	// data
	const friendsList = [
		{
			name: 'Roshan',
			isFavourite: true,
			isDeleted: false,
		},
		{
			name: 'Ajay',
			isFavourite: true,
			isDeleted: false,
		},
		{
			name: 'Nikhil',
			isFavourite: false,
			isDeleted: false,
		},
		{
			name: 'Tushar',
			isFavourite: false,
			isDeleted: false,
		},
	];

	// component states
	const [friends, setFriends] = useState(friendsList);
	useEffect(() => {
		console.log(friends);
		localStorage.setItem('name', 'sandeep');
	}, [friends]);

	const [showFavourites, setShowFavourites] = useState(false);
	const [searchText, setSearchText] = useState('');

	const handleAddFriend = (newFriend) => {
		setFriends((existingFriends) => [...existingFriends, newFriend]);
	};

	// Roshan - what handle name to give if i need to pass handleer to child comp
	const handleAddToFavourite = (friendName) => {
		const updatedFriends = friends.map((friend) => {
			return friend.name === friendName
				? { ...friend, isFavourite: !friend.isFavourite }
				: friend;
		});

		setFriends(updatedFriends);
	};

	const handleDeleteFriend = (friendName) => {
		const remainingFriends = friends.filter((friend) => {
			return friend.name !== friendName;
		});

		setFriends(remainingFriends);
	};

	const handleToggleFavourites = (favStatus) => {
		setShowFavourites(favStatus);
	};

	const handleFriendSearch = (searchText) => {
		setSearchText(searchText);
	};

	// return jsx
	return (
		<div className='friends-app'>
			{/* app header */}
			<Header
				title={title}
				handleToggleFavourites={handleToggleFavourites}
				handleFriendSearch={handleFriendSearch}
			/>

			{/* add new friend section */}
			<AddFriend friends={friends} handleAddFriend={handleAddFriend} />

			{/* friends list */}
			<FriendsList
				friends={friends}
				showFavourites={showFavourites}
				searchText={searchText}
				handleAddToFavourite={handleAddToFavourite}
				handleDeleteFriend={handleDeleteFriend}
			/>
		</div>
	);
};

export { Friends };
