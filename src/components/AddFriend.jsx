import React, { useState } from 'react';

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
					className='input'
					value={friendName}
					onChange={handleChange}
				/>
			</form>
			{friendExists && (
				<div className='friend-exists'>
					{friendName} is already your friend :)
				</div>
			)}
		</section>
	);
};

export { AddFriend };
