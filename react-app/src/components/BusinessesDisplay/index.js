import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllBusinessesThunk } from '../../store/businesses';
import Card from '../PictureCard';
import './businessesDisplay.css';

const BusinessesDisplay = () => {

    const dispatch = useDispatch();
    const businessesObj = useSelector(state => state?.businesses)
    const businesesArray = Object.values(businessesObj)

    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    }, [dispatch]);

    const allBusinesses = businesesArray?.map(business => (

            <div key={business.id} className="businesses-display-container">
                <div className="business-img-container">
                    <NavLink style={{ textDecoration:'none'}} to={`/businesses/${business?.id}`}>
                        <Card
                        src={business?.media_1}
                        alt={business?.description}
                        businessName={business?.title}
                        reviewNum={(business?.review).length}
                        businessReview={business?.review[0]?.content}
                        />
                    </NavLink>
                </div>
            </div>

    ))

    return (
        <div id="body-container-businesses">
            <div className="businesses-display-page-container">
                {allBusinesses}
            </div>
        </div>
    )
}

export default BusinessesDisplay
