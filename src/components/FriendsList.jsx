import React from 'react';
import { FriendDetails } from './FriendDetails';
import { FriendActions } from './FriendActions';
import { Pagination } from '../components/Pagination';

import '../css/friends-list.css';

const FriendsList = ({
	friends,
	searchText,
	currentPage,
	handlePageChange,
	showFavourites,
	handleAddToFavourite,
	handleDeleteFriend,
}) => {
	const pageSize = 4;
	const currentPageStartIndex = (currentPage - 1) * pageSize;
	const currentPageEndIndex = currentPageStartIndex + pageSize;

	const filterFriends = () => {
		// return only fav friends
		let filteredFriends = showFavourites
			? friends.filter((friend) => friend.isFavourite)
			: friends;

		// return only searched friends
		filteredFriends =
			searchText.length > 0
				? filteredFriends.filter((friend) =>
						friend.name
							.toLowerCase()
							.includes(searchText.toLowerCase())
				  )
				: filteredFriends;

		return filteredFriends;
	};

	let friendsList = filterFriends();

	// Set total friends count before pagination
	const totalFilteredFriends = friendsList.length;

	// Set initial pagiation start and end index
	friendsList = friendsList.slice(currentPageStartIndex, currentPageEndIndex);

	return (
		<section className='friend-list'>
			{friendsList.length !== 0 ? (
				friendsList.map((friend) => (
					<div className='friend-row' key={friend.name}>
						<FriendDetails friend={friend} />

						<FriendActions
							friend={friend}
							handleAddToFavourite={handleAddToFavourite}
							handleDeleteFriend={handleDeleteFriend}
						/>
					</div>
				))
			) : searchText !== '' ? (
				<div className='friend-row'>
					<div>
						No friend found with the name
						<strong> {searchText}</strong>
					</div>
				</div>
			) : (
				''
			)}
			<Pagination
				friendsCount={totalFilteredFriends}
				pageSize={pageSize}
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
		</section>
	);
};

export { FriendsList };
