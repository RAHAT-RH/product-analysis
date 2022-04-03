import React, { useEffect, useState } from 'react';
// import useReviews from '../../hooks/useReviews';
import photo from '../../images/item-06.png'
import CustomerReviewPart from '../CustomerReviewPart/CustomerReviewPart';

const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    // const [reviews] = useReviews();
    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-lg-6">
                    <div className="my-5">
                    <div className="jumbotron py-5">
                        <h1 className="display-4">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>         
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p className="lead">
                                <a className="btn btn-dark btn-lg" href="?" role="button">Learn more</a>
                            </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={photo} className='img-fluid w-100 text-end' alt="" />
                </div>
            </div>

            {/* Banner Section End */}

            <section className="review">
                <h2 className='text-center display-6 font-weight-bold'>Customers Reviews: {reviews.slice(0,3).length}</h2>
                <div className="row">
                    {
                        reviews.slice(0,3).map(review => <CustomerReviewPart key={review.id} review={review}></CustomerReviewPart>)
                    }
                    <div className="button text-center my-5">
                        <button className='btn btn-dark'>See More Review</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;