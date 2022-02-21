import React from 'react';
import { useState, useEffect } from 'react';

import { Header } from '../components/Header';
import { AddFriend } from '../components/AddFriend';
import { FriendsList } from './FriendsList';

import '../css/friends.css';

const Friends = ({ title }) => {
	// Fetches from from local storage if they exist other
	// return empty array
	const getFriendsFromLocalStorage = () => {
		const persistedFriends =
			JSON.parse(localStorage.getItem('friends')) !== null
				? JSON.parse(localStorage.getItem('friends'))
				: [];
		return persistedFriends;
	};

	const [friends, setFriends] = useState(getFriendsFromLocalStorage());
	useEffect(() => {
		localStorage.setItem('friends', JSON.stringify(friends));
	}, [friends]);

	const [showFavourites, setShowFavourites] = useState(false);
	const [searchText, setSearchText] = useState('');

	// Adds a new friend to the list
	const handleAddFriend = (newFriend) => {
		setFriends((existingFriends) => [...existingFriends, newFriend]);
	};

	// Marks a friend as favourite friend
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

	// Displays only marked as favourite
	const handleToggleFavourites = (favStatus) => {
		setShowFavourites(favStatus);
	};

	// Shows friends based on search term
	const handleFriendSearch = (searchText) => {
		console.log(searchText);
		setSearchText(searchText);
	};

	return (
		<div className='friends-app'>
			{/* app header */}
			<Header
				title={title}
				handleToggleFavourites={handleToggleFavourites}
				handleFriendSearch={handleFriendSearch}
			/>
			{/* {friendsCount} */}
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
