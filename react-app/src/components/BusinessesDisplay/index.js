import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <NavLink to={`/businesses/${business?.id}`}>
                        <Card
                        src={business?.media_1}
                        alt={business?.description}
                        businessName={business?.title}
                        />
                    </NavLink>
                </div>
            </div>

    ))

    return (
        <>
            <div className="businesses-display-page-container">
                {allBusinesses}
            </div>
        </>
    )
}

export default BusinessesDisplay
