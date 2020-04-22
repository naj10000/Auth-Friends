import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'


const FriendsList = ()=> {
    const [friends, setFriends] = useState([])

    return (
        <div>
            <h2>Hello Friends!</h2>
        </div>
    )
}

export default FriendsList;