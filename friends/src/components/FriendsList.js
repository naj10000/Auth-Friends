import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth';


const FriendsList = ()=> {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get('/api/friends')
        .then( res => {
            console.log(res.data)
            setFriends(res.data)
        })
    }, [])

    return (
        <div>
            <h2>Hello Friends!</h2>
            {friends.map(friend => {
               return <div key={friend.id}>
                    <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Age: {friend.age}</p>

                </div>
            })}
        </div>
    )
}

export default FriendsList;