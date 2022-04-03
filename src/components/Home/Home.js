import React from 'react';
import photo from '../../images/item-06.png'

const Home = () => {
    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-lg-6">
                    <div className="my-5">
                    <div class="jumbotron py-5">
                        <h1 class="display-4">Hello, world!</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>         
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p class="lead">
                                <a class="btn btn-primary btn-lg" href="?" role="button">Learn more</a>
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
                <h2 className='text-center display-6 font-weight-bold'>Customers Reviews</h2>
            </section>

        </div>
    );
};

export default Home;