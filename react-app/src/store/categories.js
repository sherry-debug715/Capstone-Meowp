const GET_CATEGORIES = 'categories/GET_CATEGORIES'


const getCategoriesAction = categoriesObj => {
    return {
        type: GET_CATEGORIES,
        payload: categoriesObj
    }
}


export const getAllCategoriesThunk = () => async(dispatch) => {
    const response = await fetch('/api/')
}
