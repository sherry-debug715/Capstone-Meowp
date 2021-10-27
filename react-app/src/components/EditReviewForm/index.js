import { editReviewThunk } from "../../store/reviews"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';

export const EditReviewForm = () => {

    const dispatch = useDispatch();
    const [ rating, setRating ] = useState();
    const [ content, setContent ] = useState("");

    const handleEditReviewSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            rating,
            content
        };

        let editedReview = await dispatch(editReviewThunk(payload))
        let modal = document.getElementById('modal-background')
        modal.click()
    }

    return (
        <>
            <div className="edit-review-form-container">
                <form>
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
                        <Button type="submit" variant="danger" size="lg" onClick={handleEditReviewSubmit}>Save</Button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default EditReviewForm
