import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams,useHistory } from 'react-router-dom';
import { businessDetailThunk } from '../../store/businesses';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './BusinessDetail.css'
import Button from 'react-bootstrap/Button'
import EditBusinessModal from '../EditBusinessForm/EditBusinessModal';



const BusinessDetail = () => {

    const dispatch = useDispatch();
    const businessesObj = useSelector(state => state?.businesses)
    const { businessId } = useParams();
    const currentUser = useSelector((state) => state?.session?.user);

    useEffect(() => {
        dispatch(businessDetailThunk(businessId));
    }, [dispatch, businessId]);



    return (
        <>
        <div className="page-container">
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
                        <Carousel.Item>
                            <img
                            className="carousels"
                            // className="d-block w-100"
                            src={businessesObj?.business?.media_2}
                            alt={businessesObj?.business?.description}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="carousels"
                            // className="d-block w-100"
                            src={businessesObj?.business?.media_3}
                            alt={businessesObj?.business?.description}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            className="carousels"
                            src={businessesObj?.business?.media_4}
                            alt={businessesObj?.business?.description}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            className="carousels"
                            src={businessesObj?.business?.media_5}
                            alt={businessesObj?.business?.description}
                            />
                        </Carousel.Item>
                    </Carousel>
                        <Carousel.Caption>
                            <div className="carousel-content">
                                <div className="contents">
                                    <h1 className="business-name-businessDetail">{businessesObj?.business?.title}</h1>
                                    <div className="edit-business-button-container">
                                        <EditBusinessModal businessesObj={businessesObj} />
                                    </div>
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
                <Button className="write-review" variant="danger">White a Review</Button>
                <Button variant="outline-secondary">Save to Favorite</Button>{' '}
            </div>
        </div>
        </>
    )
}

export default BusinessDetail
