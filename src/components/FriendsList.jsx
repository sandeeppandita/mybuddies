import React, { useState } from 'react';
import { FriendDetails } from './FriendDetails';
import { FriendActions } from './FriendActions';
import { Pagination } from '../components/Pagination';

const FriendsList = ({
	friends,
	searchText,
	showFavourites,
	handleAddToFavourite,
	handleDeleteFriend,
}) => {
	const [currentPage, setCurrentPage] = useState(1);

	const pageSize = 4;
	const currentPageStartIndex = (currentPage - 1) * pageSize;
	const currentPageEndIndex = currentPageStartIndex + pageSize;

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

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
			{friends.length} <br />
			{friendsList.length}
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
				currentPage={currentPage}
				pageSize={pageSize}
				handlePageChange={handlePageChange}
			/>
		</section>
	);
};

export { FriendsList };
