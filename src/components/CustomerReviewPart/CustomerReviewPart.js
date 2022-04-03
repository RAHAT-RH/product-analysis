import './CustomerReviewPart.css'



const CustomerReviewPart = (props) => {
    const { name, img, description, ratings, designation } = props.review
    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch('review.json')
    //     .then(res => res.json())
    //     .then(data => setReviews(data))
    // }, []);
    return (
        <div className='col-md-4 p-2'>
            <div className="card"> <i className="fa fa-quote-left u-color"></i>
                <p>{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="user-about"> <span className="font-Weight-Bold name-bold d-block">{name}</span> <span className="u-color">{designation}</span>
                        <div className="d-flex flex-row mt-1"> {ratings} </div>
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