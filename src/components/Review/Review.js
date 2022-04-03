import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import CustomerReviewPart from '../CustomerReviewPart/CustomerReviewPart';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    return (
        <div className='row'>
            <h1 className='text-center text-dark'>All Customer Reviews: {reviews.length}</h1>
            {
                reviews.map(review => <CustomerReviewPart key={review.id} review={review}></CustomerReviewPart>)
            }
        </div>
    );
};

export default Review;