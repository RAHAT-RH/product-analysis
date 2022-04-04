import './CustomerReviewPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';



const CustomerReviewPart = (props) => {
    const { name, img, description, ratings, designation } = props.review
    
    return (
        <div className='col-md-4 p-2'>
            <div className="card bg-dark text-white">  
                <p><FontAwesomeIcon className='u-color' icon={faQuoteLeft}></FontAwesomeIcon>{description.slice(0,205) + '...'}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="user-about"> <span className="font-Weight-Bold name-bold d-block">{name}</span> <span className="text-danger">{designation}</span>
                        <div className="d-flex flex-row mt-1 text-danger">Rating: {ratings} </div>
                    </div>
                    <div className="user-image">
                        <img src={img} className="rounded-circle" width="70" alt="" />
                        {/* <img src={img} className="rounded-circle" width="70" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviewPart;