import React, { useState, Fragment } from 'react';

const FriendActions = ({
	friend,
	handleAddToFavourite,
	handleDeleteFriend,
}) => {
	const [togglePopup, setTogglePopup] = useState('');

	// Show popup confirmation before deleting the friend
	const showDeleteConfrimation = (friendName) => {
		setTogglePopup(friendName);
	};

	return (
		<Fragment>
			<div className='actions'>
				<div
					className='favourite-friend'
					onClick={(e) => handleAddToFavourite(friend.name)}>
					{friend.isFavourite ? 'Favourite Friend' : 'Normal Friend'}
				</div>
				<div
					className='remove-friend'
					onClick={(e) => showDeleteConfrimation(friend.name)}>
					Del
				</div>
			</div>

			{togglePopup === friend.name && (
				<div className='delete-confirmation'>
					<div className='unfriend-msg'>
						Are you sure you want to unfriend {friend.name}
					</div>
					<div className='unfriend-actions'>
						<div
							className='confirm-action'
							onClick={(e) => handleDeleteFriend(friend.name)}>
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
		</Fragment>
	);
};

export { FriendActions };
