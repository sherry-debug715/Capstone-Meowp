// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import { getAllBusinessesThunk } from '../../store/businesses';
// import Card from '../PictureCard';


// const BusinessOfCategory = () => {

//     const dispatch = useDispatch();
//     const { categoryId } = useParams()
//     const businessesObj = useSelector(state => state?.businesses)
//     const businesesArray = Object.values(businessesObj)

//     useEffect(() => {
//         dispatch(getAllBusinessesThunk())
//     }, [dispatch]);

//     return (
//         <>
//             <div className="business-of-category-container">
//                 { businesesArray?.map(business => (

//                         {+business?.category_id === +business?.categoryId ? (
//                                 <NavLink key={business?.id} style={{ textDecoration:'none'}} to={`/businesses/${business?.id}`}>
//                                     <Card
//                                         src={business?.media_1}
//                                         alt={business?.description}
//                                         businessName={business?.title}
//                                     />
//                                 </NavLink>
//                         )
//                     }
//                 )}
//             </div>
//         </>
//     )

// }

// export default BusinessOfCategory
