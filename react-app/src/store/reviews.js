const GET_REVIEWS = 'reviews/GET_REVIEWS'
const GET_BUSINESS_REVIEWS = 'reviews/GET_BUSINESS_REVIEWS'


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


const initialState = {}

export default function reviewsReducer(state = initialState, action) {
    const newState = { ...state }
    switch(action.type) {
        case GET_REVIEWS:
            return action.payload
        case GET_BUSINESS_REVIEWS:
            return action.payload
        default:
            return state
    }
}
