import useReviews from '../../hooks/useReviews';
import CustomerReviewPart from '../CustomerReviewPart/CustomerReviewPart';

const Review = () => {
    // custom hooks
    const [reviews] = useReviews();
    return (
       <div className="container">
            <div className='row'>
            <h1 className='text-center text-dark'>All Customer Reviews: {reviews.length}</h1>
            {
                reviews.map(review => <CustomerReviewPart key={review.id} review={review}></CustomerReviewPart>)
            }
        </div>
       </div>
    );
};

export default Review;