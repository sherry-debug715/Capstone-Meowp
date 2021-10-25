// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import { getAllBusinessesThunk } from '../../store/businesses';
// import Card from '../PictureCard';


// const businessOfCategory = () => {

//     const dispatch = useDispatch();
//     const { categoryId } = useParams()
//     const businessesObj = useSelector(state => state?.businesses)
//     const businesesArray = Object.values(businessesObj)

//     useEffect(() => {
//         dispatch(getAllBusinessesThunk())
//     }, [dispatch]);

//     return (
//         <>
//             <h1>Category</h1>
//         </>
//     )


// }

// export default businessOfCategory;
