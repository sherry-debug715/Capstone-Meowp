import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams,useHistory } from 'react-router-dom';
import { businessDetailThunk } from '../../store/businesses';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation.scss';



const BusinessDetail = () => {

    const dispatch = useDispatch();
    const businessesObj = useSelector(state => state?.businesses)
    const { businessId } = useParams();

    useEffect(() => {
        dispatch(businessDetailThunk(businessId));
    }, [dispatch, businessId]);


    // const Slider = (
    //     <AwesomeSlider animation="cubeAnimation">
    //       <div data-src={businessesObj.business.media_1} />
    //       <div data-src={businessesObj.business.media_2} />
    //       <div data-src={businessesObj.business.media_3} />
    //       <div data-src={businessesObj.business.media_4} />
    //     </AwesomeSlider>
    // );

    return (
        <>
            <h1>Business Detail</h1>
            <div className="image-container">

                <AwesomeSlider animation="cubeAnimation">
                    <div data-src={businessesObj.business.media_1} />
                    <div data-src={businessesObj.business.media_2} />
                    <div data-src={businessesObj.business.media_3} />
                    <div data-src={businessesObj.business.media_4} />
                </AwesomeSlider>
            </div>
        </>
    )
}

export default BusinessDetail
