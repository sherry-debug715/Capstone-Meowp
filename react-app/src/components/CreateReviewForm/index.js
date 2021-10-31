import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, NavLink } from 'react-router-dom';
import { newReviewThunk } from '../../store/reviews';
import { businessDetailThunk } from '../../store/businesses';
import Button from 'react-bootstrap/Button';
import './CreateEditReview.css';


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

        <form>
            <div className="review-form-containe">
                <div className="review-title-st">
                    <img className="business-brand-img-create" src="https://cdn.discordapp.com/attachments/900530489574703194/903389504939900958/unknown.png" alt="brand"/>
                    <div className="create-review-title-container">
                        <h2 className="review-form-title">Write a Review for</h2>
                        <div className="review-form-business-title">{businessDetail?.title}</div>
                    </div>
                </div>
                <div className="review-form">
                    <div>
                        <label className="rating-label">
                            Select your rating
                            <select
                                className="review-dropdown"
                                value={rating}
                                onChange={e => {
                                    setRating(e.target.value)
                                }}
                            >
                                <option class="rating-option">1</option>
                                <option class="rating-option">2</option>
                                <option class="rating-option">3</option>
                                <option class="rating-option">4</option>
                                <option class="rating-option">5</option>
                            </select>
                        </label>
                    </div>
                    <textarea
                    className="review-form-content"
                    value={content}
                    placeholder="Your Review Here: "
                    onChange={e => setContent(e.target.value)}
                    />
                    {reviewError.content && (
                    <div className="form-error-handling">
                        <span class="material-icons" id="warning-icon">
                            error_outline
                        </span>
                        <p className="error-content">{reviewError.content}</p>
                    </div>
                    )}
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

                </div>
                <div className="review-btn-container">
                    <Button type="submit" variant="danger" onClick={handleCreateReview}>Post Review</Button>
                    <Button
                    onClick={() =>{
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

export default CreateReviewForm
