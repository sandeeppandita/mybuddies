import React, { useState } from 'react';

import { AiFillCloseSquare } from 'react-icons/ai';

import '../css/add-friend.css';

const AddFriend = ({ friends, handleAddFriend }) => {
	const [friendName, setFriendName] = useState('');
	const [friendExists, setFriendExists] = useState(false);

	const handleChange = (e) => {
		setFriendName(e.target.value);
		setFriendExists(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Check if friend with same name exists
		const friendAlreadyExists = friends.some((friend) => {
			return friend.name.toLowerCase() === friendName.toLowerCase();
		});

		if (friendAlreadyExists) {
			// If friend exists set flag to true
			setFriendExists(true);
		} else {
			// Construct new friend
			const newFriend = {
				name: friendName,
				isFavourite: false,
			};

			handleAddFriend(newFriend);

			// clear the add friend field
			setFriendName('');
		}
	};

	return (
		<section className='add-friend'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='addfriend'
					className='txt-field'
					value={friendName}
					autoComplete='off'
					placeholder='Type your friends name and press enter'
					onChange={handleChange}
				/>
			</form>
			{friendExists && (
				<div className='friend-exists'>
					<p>{friendName} is already your friend :)</p>
					<div
						className='msg-clear'
						onClick={(e) => setFriendExists(false)}>
						<AiFillCloseSquare />
					</div>
				</div>
			)}
		</section>
	);
};

export { AddFriend };
