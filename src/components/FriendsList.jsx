import React from 'react'

const FriendsList = ({ friends }) => {
	return (
		<section className='friend-list'>
			{friends.map((friend) => (
				<div className='friend-row' key={friend.name}>
					<div className='friend-details'>
						<p className='name'>
							<strong>{friend.name}</strong>
						</p>
						<p className='msg'>is your friend</p>
					</div>
					<div className='actions'>
						<div className='favourite-friend'>
							{friend.isFavourite ? '+Fav' : '-Fav'}
						</div>
						<div className='remove-friend'>-Del</div>
					</div>
				</div>
			))}
		</section>
	)
}

export { FriendsList }
