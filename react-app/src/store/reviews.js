const GET_REVIEWS = 'reviews/GET_REVIEWS'
const GET_BUSINESS_REVIEWS = 'reviews/GET_BUSINESS_REVIEWS'
const ADD_REVIEW = 'reviews/ADD_REVIEW'
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'


const getReviewsAction = reviewsObj => {
    return {
        type: GET_REVIEWS,
        payload: reviewsObj
    }
}

const getReviewsOfBusinessAction = reviewsObj => {
    return {
        type: GET_BUSINESS_REVIEWS,
        payload: reviewsObj
    }
}

const editReviewAction = editReviewObj => {
    return {
        type: EDIT_REVIEW,
        payload: editReviewObj
    }
}


const addReview = newReviewObj => {
    return {
        type: ADD_REVIEW,
        payload: newReviewObj
    }
}


const deleteReviewAction = deleteReviewObj => {
    return {
        type: DELETE_REVIEW,
        payload: deleteReviewObj
    }
}

// get all reviews stored in the Reviews table
export const getAllReviewsThunk = () => async(dispatch) => {
    const response = await fetch('/api/reviews')
    if(response.ok) {
        let reviewsObj = await response.json()
        dispatch(getReviewsAction(reviewsObj))
        return reviewsObj
    }
}

// get all reviews of a business
export const getReviewsOfBusinessThunk = (id) => async(dispatch) => {
    const response = await fetch(`api/reviews/${id}`)
    if(response.ok) {
        let reviewsObj = await response.json()
        dispatch(getReviewsOfBusinessAction(reviewsObj))
        return reviewsObj
    }
}

// create a new review
export const newReviewThunk = newReview => async(dispatch) => {
    const response = await fetch('/api/reviews/add', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newReview)
    })
    if(response.ok) {
        const newReviewObj = await response.json();
        dispatch(addReview(newReviewObj))
        return newReviewObj
    }
}

// edit review
export const editReviewThunk = review => async(dispatch) => {
    const response = await fetch(`api/reviews/edit/${review.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(review)
    })

    if (response.ok) {
        let editedReview = await response.json()
        dispatch(editReviewAction(editedReview))
        return editedReview
    }
}

// delete a review
export const deleteReviewThunk = id => async(dispatch) => {
    const response = await fetch(`/api/reviews/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(id)
    })
    if(response.ok) {
        const deletedReviewObj = await response.json();
        dispatch(deleteReviewAction(deletedReviewObj))
        return deletedReviewObj
    }
}


const initialState = {}

export default function reviewsReducer(state = initialState, action) {
    const newState = { ...state }
    switch(action.type) {
        case GET_REVIEWS:
            return action.payload
        case GET_BUSINESS_REVIEWS:
            return action.payload
        case ADD_REVIEW:
            newState[action.payload.id] = action.payload
            return newState
        case EDIT_REVIEW:
            newState[action.payload.id] = action.payload
            return newState
        case DELETE_REVIEW:
            delete newState[action.payload.id]
            return newState
        default:
            return state
    }
}
