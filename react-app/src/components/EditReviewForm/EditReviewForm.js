import { editReviewThunk } from "../../store/reviews"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { businessDetailThunk } from '../../store/businesses';

export const EditReviewForm = ( {review} ) => {

    const dispatch = useDispatch();
    const [ rating, setRating ] = useState();
    const [ content, setContent ] = useState("");
    const businessesStore = useSelector(state => state?.businesses);

    console.log("================>review",review)
    const handleEditReviewSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            id:review?.id,
            rating,
            content
        };
        let editedReview = await dispatch(editReviewThunk(payload))

        // await dispatch(businessDetailThunk(review?.business_id));
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
        <>
            <div className="edit-review-form-container">
                <form onSubmit={handleEditReviewSubmit}>
                    <div className="edit-review-form">
                        <label className="edit-rating">
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
                        <input
                        className="review-content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        />
                    </div>
                    <div className="post-button-container">
                        <Button type="submit" variant="danger">Save</Button>
                        {/* <Button
                            onClick={() =>{
                                // e.preventDefault()
                                let modal = document.getElementById('modal-background')
                                modal.click()
                            }}
                            variant="secondary">
                                Cancel
                        </Button>{' '} */}
                    </div>
                </form>

            </div>
        </>
    )
}

export default EditReviewForm
