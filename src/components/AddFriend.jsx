import React, { useState } from 'react';

const AddFriend = ({ friends, handleAddFriend }) => {
	// friend template
	const newFriendTemplate = {
		name: '',
		isFavourite: false,
	};

	const [newFriend, setNewFriend] = useState({
		name: '',
		isFavourite: false,
	});
	const [friendExists, setFriendExists] = useState(false);

	const handleChange = (e) => {
		setNewFriend({
			...newFriend,
			name: e.target.value,
		});
		setFriendExists(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// check if friend with same name exists
		const friendAlreadyExists = friends.some((friend) => {
			return friend.name.toLowerCase() === newFriend.name.toLowerCase();
		});

		if (friendAlreadyExists) {
			// if friend exists set flag to true
			setFriendExists(true);
		} else {
			// send the new friend to parent hander
			handleAddFriend(newFriend);

			// clear the add friend field
			setNewFriend(newFriendTemplate);
		}
	};

	return (
		<section className='add-friend'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='addfriend'
					className='input'
					value={newFriend.name}
					onChange={handleChange}
				/>
			</form>
			{friendExists && (
				<div className='friend-exists'>
					{newFriend.name} is already your friend :)
				</div>
			)}
		</section>
	);
};

export { AddFriend };
