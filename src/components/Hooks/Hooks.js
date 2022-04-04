import React, { useEffect, useState } from 'react';

const Hooks = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('allproducts.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default Hooks;