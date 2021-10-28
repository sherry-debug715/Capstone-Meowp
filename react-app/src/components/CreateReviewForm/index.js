import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, NavLink } from 'react-router-dom';
import { newReviewThunk } from '../../store/reviews';
import { businessDetailThunk } from '../../store/businesses';
import Button from 'react-bootstrap/Button';



export const CreateReviewForm = ( {businessDetail} ) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session.user);
    const businessesStore = useSelector(state => state?.businesses);
    const { businessId } = useParams();
    const [ rating, setRating ] = useState(1);
    const [ content, setContent ] = useState("");
    const [reviewError, setReviewError] = useState({})

    const validateReview = () => {
        const reviewError = {};

        if(!currentUser) {
            reviewError['error'] = "Please log in first to be eligible to write reviews"
        }
        let contentLength = content.length

        if(content.length > 200) {
            reviewError["content"] = `You have exceeded the content length by ${contentLength-200} characters`
        } else if(!content) {
            reviewError["content"] = "Review content can't be empty"
        }

        return reviewError;
    }

    const handleCreateReview = async(e) => {
        e.preventDefault()
        const errors = validateReview();
        if(Object.keys(errors).length > 0) return setReviewError(errors)

        const payload = {
            user_id: currentUser?.id,
            business_id: businessDetail?.id,
            rating,
            content
        }

        const createdReview = await dispatch(newReviewThunk(payload))
        dispatch(businessDetailThunk(businessId));
        let modal = document.getElementById('modal-background')
        modal.click()

    };

    return (
        <>
            <div className="create-review-form-container">
                <form>
                    <h1 className="title">{businessDetail?.title}</h1>
                    <div className="create-review-form">
                        <label className="rating">
                            Select your rating
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
                        <input
                        className="review-content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        />
                        {reviewError.content && (
                        <div className="review-error-handling">
                            <p>{reviewError.content}</p>
                        </div>
                        )}
                    </div>
                    {reviewError.error && (
                        <>
                        <div className="review-error-handling">
                            {reviewError.error}
                        </div>
                        <div className="loginSignupLink">
                            Already have an account? <NavLink to="/login">Log In </NavLink>
                        </div>
                        <div className="loginSignupLink">
                            Become a member? <NavLink to="/sign-up">Sign up</NavLink>
                        </div>
                        </>
                    )}
                    <div className="post-button-container">
                        <Button type="submit" variant="danger" size="lg" onClick={handleCreateReview}>Post Review</Button>
                    </div>
                </form>
            </div>
        </>
    )


}

export default CreateReviewForm
