const GET_CATEGORIES = 'categories/GET_CATEGORIES'
const ADD_CATEGORY = 'categories/ADD_CATEGORY'

const getCategoriesAction = categoriesObj => {
    return {
        type: GET_CATEGORIES,
        payload: categoriesObj
    }
}

const addCategoryAction = newCategoryObj => {
    return {
        type: ADD_CATEGORY,
        payload: newCategoryObj
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


export const createCategoryThunk = category => async(dispatch) => {
    const response = await fetch('/api/categories/new', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(category)

    })
    if(response.ok) {
        const newCategory = await response.json();
        dispatch(addCategoryAction(newCategory))
        return newCategory
    }
}

const initialState = {}

export default function categoriesReducer(state = initialState, action) {
    const newState = { ...state }
    switch(action.type) {
        case GET_CATEGORIES:
            return action.payload
        case ADD_CATEGORY:
            newState[action.payload.id] = action.payload
            return newState
        default:
            return state
    }
}
