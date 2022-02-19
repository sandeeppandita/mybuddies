import React from 'react'

const Header = ({ title }) => {
	return (
		<div className='header'>
			<div className='logo'>
				<strong>{title}</strong>
			</div>
			<div className='filters'>
				<div className='filter'>
					Show Favourites:
					<input type='checkbox' className='input' />
				</div>
				<div className='search'>
					Search
					<input type='text' name='name' />
				</div>
			</div>
		</div>
	)
}

export { Header }
