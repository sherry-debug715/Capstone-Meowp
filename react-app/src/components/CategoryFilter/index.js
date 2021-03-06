import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import { getAllBusinessesThunk } from '../../store/businesses';
import Card from '../PictureCard';


const BusinessOfCategory = () => {

    const dispatch = useDispatch();
    const { categoryId } = useParams()
    const businessesObj = useSelector(state => state?.businesses)
    const businesesArray = Object.values(businessesObj)

    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    }, [dispatch]);

    const businessOfCategory = businesesArray?.filter(business => business?.category_id == +categoryId)

    const categoryBusinesses = businessOfCategory?.map(business => (
        <div key={business.id} className="business-display-container">
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
        <div id="body-container-category">
            <div className="business-of-category-container">
                <Link to='/businesses'>
                    <span class="material-icons" id="keyboard-backspace">
                        keyboard_backspace
                    </span>
                </Link>
                {categoryBusinesses}
            </div>
        </div>
    )

}

export default BusinessOfCategory
