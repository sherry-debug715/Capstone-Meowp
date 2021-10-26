import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { newReviewThunk } from '../../store/reviews';
import Button from 'react-bootstrap/Button';

export const CreateReviewForm = ( {businessDetail} ) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session.user);
    const { businessId } = useParams();
    const [ rating, setRating ] = useState();
    const [ content, setContent ] = useState("");


    const handleCreateReview = async(e) => {
        e.preventDefault();

        const payload = {
            user_id: currentUser?.id,
            business_id: businessDetail?.id,
            rating,
            content
        }

        const createdReview = await dispatch(newReviewThunk(payload))
        let modal = document.getElementById('modal-background')
        modal.click()
        history.push(`/businesses/${businessDetail?.id}`)
        console.log("2222222222222",payload)

    };

    return (
        <>
            <div className="create-review-form-container">
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
                </div>
                <div className="post-button-container">
                    <Button variant="danger" size="lg" onClick={handleCreateReview}>Post Review</Button>
                </div>
            </div>
        </>
    )


}

export default CreateReviewForm
