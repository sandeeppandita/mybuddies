import React from 'react';

const FriendDetails = ({ friend }) => {
	return (
		<div className='friend-details'>
			<p className='name'>
				<strong>{friend.name}</strong>
			</p>
			<p className='msg'>is your friend</p>
		</div>
	);
};

export { FriendDetails };
