import React from 'react'

const AddFriend = ({
	friends,
	newFriend,
	friendExists,
	handleSubmit,
	handleChange,
}) => {
	return (
		<section className='add-friend'>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type='text'
					name='addfriend'
					className='input'
					value={newFriend.name}
					onChange={(e) => handleChange(e)}
				/>
			</form>
			{friendExists && (
				<div className='friend-exists'>
					{newFriend.name} is already your friend :(
				</div>
			)}
		</section>
	)
}

export { AddFriend }
