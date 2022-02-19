import React from 'react'
import { useState } from 'react'

import { Header } from '../components/Header'
import { AddFriend } from '../components/AddFriend'
import { FriendsList } from './FriendsList'

import '../css/friends.css'

const Friends = ({ title }) => {
	// data
	const friendsList = [
		{
			name: 'Roshan',
			isFavourite: true,
			isDeleted: false,
		},
		{
			name: 'Ajay',
			isFavourite: false,
			isDeleted: false,
		},
		{
			name: 'Nikhil',
			isFavourite: true,
			isDeleted: false,
		},
		{
			name: 'Tushar',
			isFavourite: false,
			isDeleted: false,
		},
	]

	// component states
	const [friends, setFriends] = useState(friendsList)
	const [newFriend, setNewFriend] = useState({
		name: '',
		isFavourite: false,
		isDeleted: false,
	})
	const [friendExists, setFriendExists] = useState(false)

	// control event handlers
	const handleChange = (e) => {
		setNewFriend({
			name: e.target.value,
		})
		setFriendExists(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// check if friend with same name exists
		const friendAlreadyExists = friends.some((friend) => {
			return friend.name.toLowerCase() === newFriend.name.toLowerCase()
		})

		if (friendAlreadyExists) {
			// if friend exists set flag to true
			setFriendExists(true)
		} else {
			// add the new friend to the list
			setFriends((existingFriends) => [...existingFriends, newFriend])

			// clear the add friend field
			setNewFriend({
				name: '',
				isFavourite: false,
				isDeleted: false,
			})
		}
	}

	// return jsx
	return (
		<div className='friends-app'>
			{/* app header */}
			<Header title={title} />

			{/* add new friend section */}
			<AddFriend
				friends={friends}
				newFriend={newFriend}
				friendExists={friendExists}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>

			{/* friends list */}
			<FriendsList friends={friends} />
		</div>
	)
}

export { Friends }
