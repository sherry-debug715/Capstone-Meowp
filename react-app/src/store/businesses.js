const GET_BUSINESSES = 'businesses/GET_BUSINESSES'
const BUSINESS_DETAIL = 'businesses/BUSINESS_DETAIL'
const DELETE_BUSINESS = 'businesses/DELETE_BUSINESS'


const getBusinessesAction = businessesObj => {
    return {
        type: GET_BUSINESSES,
        payload: businessesObj
    }
}

const businessDetailAction = businessDetailObj => {
    return {
        type: BUSINESS_DETAIL,
        payload: businessDetailObj
    }
}

const deleteBusinessAction = deleteBusinessObj => {
    return {
        type: DELETE_BUSINESS,
        payload: deleteBusinessObj
    }
}

export const getAllBusinessesThunk = () => async(dispatch) => {
    const response = await fetch('/api/businesses')
    if(response.ok) {
        let businessesObj = await response.json()
        dispatch(getBusinessesAction(businessesObj))
        return businessesObj
    }
}

export const businessDetailThunk = id => async(dispatch) => {
    const response = await fetch(`/api/businesses/${id}`)
    if(response.ok) {
        let businessObj = await response.json()
        dispatch(businessDetailAction(businessObj))
        return businessObj
    }
}

export const deleteBusinessThunk = id => async(dispatch) => {
    const response = await fetch(`/api/businesses/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(id)
    })
    if (response.ok) {
        const deleteBusinessObj = await response.json();
        dispatch(deleteBusinessAction(deleteBusinessObj))
        return deleteBusinessObj
    }
}


const initialState = {}

export default function businessesReducer(state = initialState, action) {
    const newState = { ...state }
    switch(action.type) {
        case GET_BUSINESSES:
            return action.payload
        case BUSINESS_DETAIL:
            return action.payload
        case DELETE_BUSINESS:
            delete newState[action.payload.id]
            return newState
        default:
            return state
    }
}
