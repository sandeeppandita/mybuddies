import React, { useState } from 'react';

const FriendsList = ({
	friends,
	searchText,
	showFavourites,
	handleAddToFavourite,
	handleDeleteFriend,
}) => {
	const [togglePopup, setTogglePopup] = useState('');

	// handle Delete Confirmation
	const showDeleteConfrimation = (friendName) => {
		setTogglePopup(friendName);
	};

	let friendsList = showFavourites
		? friends.filter((friend) => friend.isFavourite)
		: friends;

	friendsList =
		searchText.length > 0
			? friendsList.filter((friend) =>
					friend.name.toLowerCase().includes(searchText.toLowerCase())
			  )
			: friendsList;

	// console.log(showFavourites, friendsList);

	return (
		<section className='friend-list'>
			{friendsList.length !== 0 ? (
				friendsList.map((friend) => (
					<div className='friend-row' key={friend.name}>
						<div className='friend-details'>
							<p className='name'>
								<strong>{friend.name}</strong>
							</p>
							<p className='msg'>is your friend</p>
						</div>
						<div className='actions'>
							<div
								className='favourite-friend'
								onClick={(e) =>
									handleAddToFavourite(friend.name)
								}>
								{friend.isFavourite
									? 'Favourite Friend'
									: 'Normal Friend'}
							</div>
							<div
								className='remove-friend'
								onClick={(e) =>
									showDeleteConfrimation(friend.name)
								}>
								Del
							</div>
							{/* Roshan - why the component render incase of skipping this syntax ()=>{} */}
						</div>
						{togglePopup === friend.name && (
							<div className='delete-confirmation'>
								<div className='unfriend-msg'>
									Are you sure you want to unfriend{' '}
									{friend.name}
								</div>
								<div className='unfriend-actions'>
									<div
										className='confirm-action'
										onClick={(e) =>
											handleDeleteFriend(friend.name)
										}>
										Yes
									</div>
									<div
										className='cancel-action'
										onClick={(e) => setTogglePopup('')}>
										No
									</div>
								</div>
							</div>
						)}
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
		</section>
	);
};

export { FriendsList };
