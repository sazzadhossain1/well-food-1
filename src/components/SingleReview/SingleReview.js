import React from 'react';

const SingleReview = (props) => {
    const {name, review,rating, image} = props.user;
    return (
        <div>
            <p>Name:{name}</p>
            
        </div>
    );
};

export default SingleReview;