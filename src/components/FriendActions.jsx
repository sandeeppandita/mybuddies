import React, { useState, Fragment } from 'react';

import {
	RiStarSmileFill,
	RiStarSmileLine,
	RiDeleteBin5Line,
} from 'react-icons/ri';
import { AiFillCloseSquare, AiFillCheckSquare } from 'react-icons/ai';

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
					{friend.isFavourite ? (
						<RiStarSmileFill />
					) : (
						<RiStarSmileLine />
					)}
				</div>
				<div
					className='remove-friend'
					onClick={(e) => showDeleteConfrimation(friend.name)}>
					<RiDeleteBin5Line />
				</div>
			</div>

			{togglePopup === friend.name && (
				<div className='delete-confirmation'>
					<div className='unfriend-msg'>
						Are you sure you want to unfriend {friend.name}
					</div>
					<div className='unfriend-actions'>
						<div
							className='cancel-action'
							onClick={(e) => setTogglePopup('')}>
							<AiFillCloseSquare />
						</div>
						<div
							className='confirm-action'
							onClick={(e) => handleDeleteFriend(friend.name)}>
							<AiFillCheckSquare />
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export { FriendActions };
