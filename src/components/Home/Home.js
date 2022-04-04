// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import photo from '../../images/item-06.png'
import CustomerReviewPart from '../CustomerReviewPart/CustomerReviewPart';

const Home = () => {
    //use Navigate 

    const navigate = useNavigate();

    // event handle

    const allReviewsShow = () => {
        navigate('/review');
    }

    // custom hooks

    const [reviews] = useReviews();

    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-lg-6">
                    <div className="my-5">
                        <div className="jumbotron py-5">
                            <h1 className="display-4">Amazon Home <span className='text-primary'>Theater System!</span></h1>
                            <p className="lead">You can connect your Home Assistant instance in a few simple clicks to Amazon Alexa. With Home Assistant Cloud, You don't have to deal with dynamic Dns, SSl Certificates.</p>
                            <p>Just log in vai the user interface and a secure connection With the could will be established.</p>
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
                <h2 className='text-center display-6 font-weight-bold'>Customers Reviews: {reviews.slice(0, 3).length}</h2>
                <div className="row">
                    {
                        reviews.slice(0, 3).map(review => <CustomerReviewPart key={review.id} review={review}></CustomerReviewPart>)
                    }
                    <div className="button text-center my-5">
                        <button onClick={allReviewsShow} className='btn btn-dark'>See More Review </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;