import React from 'react';
import { useState, useEffect } from 'react';

import { Header } from '../components/Header';
import { AddFriend } from '../components/AddFriend';
import { FriendsList } from './FriendsList';

import '../css/friends.css';

const Friends = ({ title }) => {
	// Try to load persisted friends from local storage
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
	const [currentPage, setCurrentPage] = useState(1);

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

	// Deletes the friend
	const handleDeleteFriend = (friendName) => {
		const remainingFriends = friends.filter((friend) => {
			return friend.name !== friendName;
		});

		setFriends(remainingFriends);

		if (currentPage > 1) {
			setCurrentPage((currentPage) => currentPage - 1);
		}
	};

	// Displays only marked as favourite
	const handleToggleFavourites = (favStatus) => {
		setShowFavourites(favStatus);
		setCurrentPage(1);
	};

	// Shows friends based on search term
	const handleFriendSearch = (searchText) => {
		setSearchText(searchText);
		setCurrentPage(1);
	};

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
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
				currentPage={currentPage}
				handlePageChange={handlePageChange}
				handleAddToFavourite={handleAddToFavourite}
				handleDeleteFriend={handleDeleteFriend}
			/>
		</div>
	);
};

export { Friends };
