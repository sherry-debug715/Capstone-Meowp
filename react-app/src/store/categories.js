const GET_CATEGORIES = 'categories/GET_CATEGORIES'


const getCategoriesAction = categoriesObj => {
    return {
        type: GET_CATEGORIES,
        payload: categoriesObj
    }
}


export const getAllCategoriesThunk = () => async(dispatch) => {
    const response = await fetch('/api/categories')
    if(response.ok) {
        let allCategoriesObj = await response.json()
        dispatch(getCategoriesAction(allCategoriesObj))
        return allCategoriesObj
    }
}

const initialState = {}

export default function categoriesReducer(state = initialState, action) {
    const newState = { ...state }
    switch(action.type) {
        case GET_CATEGORIES:
            return action.payload
        default:
            return state
    }
}
