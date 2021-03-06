import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { businessDetailThunk } from '../../store/businesses';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './BusinessDetail.css'
import Button from 'react-bootstrap/Button'
import EditBusinessModal from '../EditBusinessForm/EditBusinessModal';
import ReviewDisplayCard from '../ReviewDisplayCard';
import CreateReviewModal from '../CreateReviewForm/CreateReviewModal';
import { deleteReviewThunk } from '../../store/reviews';
import EditReviewModal from '../EditReviewForm';



const BusinessDetail = () => {

    const dispatch = useDispatch();
    const businessesObj = useSelector(state => state?.businesses)
    const businessDetail = businessesObj?.business
    const reviews = businessDetail?.review
    const { businessId } = useParams();
    const currentUser = useSelector((state) => state?.session?.user);
    const businessReviews = useSelector( state => state?.reviews)

    const [rating, setRating] = useState();
    const [content, setContent] = useState("");



    useEffect(() => {
        dispatch(businessDetailThunk(businessId));
    }, [dispatch, businessId]);


    const handleReviewDelete = e => {
        e.preventDefault();
        dispatch(deleteReviewThunk(e.target.value));
        dispatch(businessDetailThunk(businessId));
    }


    const businessComments = reviews?.map(review => (
        <>
            <div key={review?.id} className="business-comments-container">
                <ReviewDisplayCard
                userName={review?.user?.username}
                userSrc={review?.user?.photo}
                userAlt={review?.user?.username[0]}
                userInitial={review?.user?.username[0]}
                userCity={review?.user?.city}
                userState={review?.user?.state}
                reviewContent={review?.content}
                rating={review?.rating}
                currentUser={currentUser?.id === review?.user_id}
                editDeleteButtons={
                    <>
                    {currentUser?.id === review?.user_id && (
                        <div className="review-edit-delete-dropdown">
                            <div className="delete-review-button">
                                <button className="review-edit-delete-btns" value={review?.id} onClick={handleReviewDelete}>
                                    Delete
                                </button>
                            </div>
                            <div className="edit-review-button">
                                <EditReviewModal review={review} />
                            </div>
                        </div>
                    )}
                    </>
                }
                />

            </div>
        </>
    ))

    return (
        <div id="body-container-business">
            <div className="page-container">
                <Link to='/businesses'>
                    <span class="material-icons">
                        keyboard_backspace
                    </span>
                </Link>
                <div className="header-container">
                    <div className="carousel-container">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="carousels"
                                // className="d-block w-100"
                                src={businessesObj?.business?.media_1}
                                alt={businessesObj?.business?.description}
                                />
                            </Carousel.Item>
                            {businessesObj?.business?.media_2 && (
                                <Carousel.Item>
                                    <img
                                    className="carousels"
                                    // className="d-block w-100"
                                    src={businessesObj?.business?.media_2}
                                    alt={businessesObj?.business?.description}
                                    />
                                </Carousel.Item>
                            )}
                            {businessesObj?.business?.media_3 && (
                                <Carousel.Item>
                                    <img
                                    className="carousels"
                                    // className="d-block w-100"
                                    src={businessesObj?.business?.media_3}
                                    alt={businessesObj?.business?.description}
                                    />
                                </Carousel.Item>
                            )}
                            {businessesObj?.business?.media_4 && (
                                <Carousel.Item>
                                    <img
                                    // className="d-block w-100"
                                    className="carousels"
                                    src={businessesObj?.business?.media_4}
                                    alt={businessesObj?.business?.description}
                                    />
                                </Carousel.Item>
                            )}
                            {businessesObj?.business?.media_5 && (
                                <Carousel.Item>
                                    <img
                                    // className="d-block w-100"
                                    className="carousels"
                                    src={businessesObj?.business?.media_5}
                                    alt={businessesObj?.business?.description}
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel>
                            <Carousel.Caption>
                                <div className="carousel-content">
                                    <div className="contents">
                                        <h1 className="business-name-businessDetail">{businessesObj?.business?.title}</h1>
                                        {currentUser?.id === businessDetail?.owner_id && (
                                            <div className="edit-business-button-container">
                                                <EditBusinessModal businessesObj={businessesObj} />
                                            </div>
                                        )}
                                        <div className="review-amount">
                                            {businessesObj?.business?.review?.length} reviews
                                        </div>
                                        <div className="address">
                                            {businessesObj?.business?.address} {businessesObj?.business?.city} {businessesObj?.business?.state}
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Caption>
                    </div>
                </div>

                <div className="button-section">
                    <CreateReviewModal businessDetail={businessDetail} />
                </div>
                <div className="review-section">
                    {businessComments}
                </div>
            </div>
        </div>
    )
}

export default BusinessDetail
