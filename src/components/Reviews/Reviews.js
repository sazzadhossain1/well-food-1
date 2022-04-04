import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('allproducts.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h1>This is reviews: {users.length}</h1>
            {
                users.map(user => <SingleReview key={user.id} user={user} ></SingleReview>)
            }
        </div>
    );
};

export default Reviews;