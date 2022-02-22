import React from 'react';

const FriendDetails = ({ friend }) => {
	return (
		<div className='friend-details'>
			<h3 className='name'>{friend.name}</h3>
			<p className='msg'>is your friend</p>
		</div>
	);
};

export { FriendDetails };
