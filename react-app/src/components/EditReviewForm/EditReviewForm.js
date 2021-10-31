import { editReviewThunk } from "../../store/reviews"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { businessDetailThunk } from '../../store/businesses';
import '../CreateReviewForm/CreateEditReview.css';

export const EditReviewForm = ( {review} ) => {

    const dispatch = useDispatch();
    const [ rating, setRating ] = useState();
    const [ content, setContent ] = useState("");
    const businessesStore = useSelector(state => state?.businesses);
    const [reviewError, setReviewError] = useState({})

    const validateReview = () => {
        const reviewError = {};

        let contentLength = content.length

        if(content.length > 300) {
            reviewError["content"] = `You have exceeded the content length by ${contentLength-300} characters`
        } else if(!content) {
            reviewError["content"] = "Review content can't be empty"
        }

        return reviewError;
    }

    const handleEditReviewSubmit = async(e) => {
        e.preventDefault();

        const errors = validateReview();
        if(Object.keys(errors).length > 0) return setReviewError(errors)

        const payload = {
            id:review?.id,
            rating,
            content
        };
        let editedReview = await dispatch(editReviewThunk(payload))

        dispatch(businessDetailThunk(review?.business_id));
        let modal = document.getElementById('modal-background')
        modal.click()

    }

    useEffect(() => {
        if(review) {
            setRating(review?.rating);
            setContent(review?.content)
        }
    },[review])

    return (

        <form onSubmit={handleEditReviewSubmit}>
            <div className="review-form-container">
                <div className="review-title-st">
                    <img className="business-brand-img" src="https://cdn.discordapp.com/attachments/900530489574703194/903389504939900958/unknown.png" alt="brand"/>
                    <h2 className="review-form-title">Edit Your Review</h2>
                </div>
                <div className="review-form">
                    <label className="rating-label">
                        Edit your rating
                        <select className="dropdown"
                            value={rating}
                            onChange={e => {
                                setRating(e.target.value)
                            }}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </label>
                    <textarea
                    className="review-form-content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    />
                    {reviewError.content && (
                        <div className="review-error-handling">
                            <p>{reviewError.content}</p>
                        </div>
                    )}
                </div>
                <div className="review-btn-container">
                    <Button type="submit" variant="danger">Save</Button>
                    <Button
                        onClick={() =>{
                            // e.preventDefault()
                            let modal = document.getElementById('modal-background')
                            modal.click()
                        }}
                        className="business-btn-m"
                        variant="secondary">
                            Cancel
                    </Button>{' '}
                </div>
            </div>
        </form>


    )
}

export default EditReviewForm
