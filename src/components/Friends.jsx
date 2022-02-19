import React from 'react';
import "../css/friends.css"; 

const Friends = () => {
  return (
    <div className='friends-app'>

        <div className="header">
            <div className="logo"><strong>My Friends</strong></div>
            <div className="filters">
                <div className="filter">
                    Show Favourites
                    <input type="checkbox" className="input" />
                </div>
                <div className="search">
                Search
                <input type="text" name="search" />
                </div>
            </div>
        </div>  
        <div className="add-friend">
            <input type="text" name="addfriend" className='input' />    
        </div>
    
        <div className="friend-list">
            <div className="friend-row">
            <div className="friend-details">
                <p className="name"><strong>Rohit</strong></p>
                <p className='msg'>is your friend</p>
            </div>  
            <div className="actions">   
                <div className="favourite-friend">+Fav</div>
                <div className="remove-friend">-Del</div>
            </div>
            </div>
        </div>

    </div>
  )
}

export  {Friends}                                                                                                                                                                          