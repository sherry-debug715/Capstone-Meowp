import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createBusinessThunk } from '../../store/businesses';
import { createCategoryThunk, getAllCategoriesThunk } from '../../store/categories';


import Button from 'react-bootstrap/Button'

const CreateBusinessForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state?.session.user);
    const categoriesObj = useSelector( state => state?.categories);
    const categoriesArray = Object.values(categoriesObj)
    const defaultCategory = categoriesArray[0]

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch]);

    const [category_id, setCategoryId] = useState(defaultCategory?.id)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [media_1, setMedia1] = useState("")
    const [media_2, setMedia2] = useState("")
    const [media_3, setMedia3] = useState("")
    const [media_4, setMedia4] = useState("")
    const [media_5, setMedia5] = useState("")
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip_code, setZipCode] = useState("")
    // state for add category
    const [newCategory, setNewCategory] = useState("")
    const [validationErrors, setValidationErrors] = useState({});

    const validate = () => {
        const validationErrors = {};

        if(typeof title === "undefined") {
            const re = /^\S*$/;
            if(title.length > 50 || !re.test(title)) {
                validationErrors["title"] = "Business name must be less than 50 characters"
            }
        }

        if(description.length > 200) {
            let descriptionLength = description.length
            validationErrors["description"] = `Content limited to 200 characters, you have exceeded the limit by ${200-descriptionLength} characters.`
        }

        if(!media_1.endsWith("jpg") && !media_1.endsWith("png")) {
            validationErrors["media_1"] = `Please provide a valid media url address, a valid media url must ends with "jpg" or "png"`
        }
        if((media_2) && (!media_2.endsWith("jpg") && !media_2.endsWith("png"))) {
            validationErrors["media_1"] = `Please provide a valid media url address, a valid media url must ends with "jpg" or "png"`
        }
        if(media_3 && !media_3.endsWith("jpg") && !media_3.endsWith("png")) {
            validationErrors["media_1"] = `Please provide a valid media url address, a valid media url must ends with "jpg" or "png"`
        }
        if(media_4 && !media_4.endsWith("jpg") && !media_4.endsWith("png")) {
            validationErrors["media_1"] = `Please provide a valid media url address, a valid media url must ends with "jpg" or "png"`
        }
        if(media_5 && !media_5.endsWith("jpg") && !media_5.endsWith("png")) {
            validationErrors["media_1"] = `Please provide a valid media url address, a valid media url must ends with "jpg" or "png"`
        }


        if(!address.length || address.length > 35) {
            validationErrors["address"] = "Address column can't be empty and can't exceeds 35 characters"
        }

        if(city.length > 20) {
            validationErrors["city"] ="city name can't exceeds 20 characters"
        }

        if(state.length > 10) {
            validationErrors["state"] ="state name can't exceeds 10 characters"
        }

        if(!Number(zip_code) || zip_code.length > 5) {
            validationErrors["zip_code"] = "Please provide a valid zip code for your business location. A valid zip code must be less than 6 numbers"

        }

        if(newCategory.length > 20) {
            validationErrors["newCategory"] = "Category content is limited to 20 characters"
        }

        return validationErrors;
    }

    const reset = () => {
        setCategoryId()
        setTitle("")
        setDescription("")
        setMedia1("")
        setMedia2("")
        setMedia3("")
        setMedia4("")
        setMedia5("")
        setAddress("")
        setCity("")
        setState("")
        setZipCode("")
    };

    const handleCreateBusiness = async(e) => {
        e.preventDefault();
        const errors = validate();
        if(Object.keys(errors).length > 0) return setValidationErrors(errors);


        let createdBusiness = {
            owner_id:currentUser?.id,
            category_id,
            title,
            description,
            media_1,
            media_2,
            media_3,
            media_4,
            media_5,
            address,
            city,
            state,
            zip_code
        };

        const newBusiness = await dispatch(createBusinessThunk(createdBusiness));

        let modal = document.getElementById('modal-background')
        modal.click()
        return history.push(`/businesses/${newBusiness?.id}`)

    };

    const handleAddNewCategory = async(e) => {
        e.preventDefault();

        const errors = validate();
        if(Object.keys(errors).length > 0) return setValidationErrors(errors);

        const payload = {
            name: newCategory
        };

        let createdCategory = await dispatch(createCategoryThunk(payload))
        setNewCategory("")
    }

    return (
        <>
            <section className="create-business-form-container">
                <div className="create-business-title">
                    Create Business
                </div>
                <form className="create-business-form" onSubmit={handleCreateBusiness}>
                    <div className="create-business-input-container">
                        <div className="form-content">
                            <label className="business-name">
                                Your Business Name
                            </label>
                            <input
                                type="text"
                                required
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            {validationErrors.title && (
                                <div className="error-handling">
                                    {validationErrors.title}
                                </div>
                            )}
                        </div>
                        <div className="form-content">
                            <label className="business-name">
                                Business URL_1
                            </label>
                            <input
                                type="text"
                                value={media_1}
                                onChange={e => setMedia1(e.target.value)}
                            />
                            {validationErrors.media_1 && (
                                <div className="error-handling">
                                    {validationErrors.media_1}
                                </div>
                            )}
                        </div>
                        <div className="form-content">
                            <label className="business-name">
                                Business URL_2 (Optional)
                            </label>
                            <input
                                type="text"
                                value={media_2}
                                onChange={e => setMedia2(e.target.value)}
                            />
                            {validationErrors.media_2 && (
                                <div className="error-handling">
                                    {validationErrors.media_2}
                                </div>
                            )}
                        </div>
                        <div className="form-content">
                            <label className="business-name">
                                Business URL_3 (Optional)
                            </label>
                            <input
                                type="text"
                                value={media_3}
                                onChange={e => setMedia3(e.target.value)}
                            />
                            {validationErrors.media_3 && (
                                <div className="error-handling">
                                    {validationErrors.media_3}
                                </div>
                            )}
                        </div>
                        <div className="form-content">
                            <label className="business-name">
                                Business URL_4 (Optional)
                            </label>
                            <input
                                type="text"
                                value={media_4}
                                onChange={e => setMedia4(e.target.value)}
                            />
                            {validationErrors.media_4 && (
                                <div className="error-handling">
                                    {validationErrors.media_4}
                                </div>
                            )}
                        </div>
                        <div className="form-content">
                            <label className="business-name">
                                Business URL_5 (Optional)
                            </label>
                            <input
                                type="text"
                                value={media_5}
                                onChange={e => setMedia5(e.target.value)}
                            />
                            {validationErrors.media_5 && (
                                <div className="error-handling">
                                    {validationErrors.media_5}
                                </div>
                            )}
                        </div>
                        <div className="form-content">
                            <label className="categories-select">
                                Select a Category
                                <select className="dropdown"
                                    value={category_id}
                                    onChange={e => {
                                        setCategoryId(e.target?.value)
                                    }}
                                >
                                    {categoriesArray?.map(category => {
                                        return (
                                            <option value={category?.id}>{category?.name}</option>
                                        )
                                    })}
                                </select>
                            </label>
                        </div>
                        <div className="form-content">
                            <label className="business-address">
                                Address
                            </label>
                            <input
                                type="text"
                                required
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                            { validationErrors.address && (
                                <div className="error-handling">
                                    { validationErrors.address}
                                </div>
                            )}
                        </div>
                        <div className="form-content">
                            <label className="business-city">
                                City
                            </label>
                            <input
                                type="text"
                                required
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                            { validationErrors.city && (
                                <div className="error-handling">
                                    { validationErrors.city}
                                </div>
                            )}
                        </div>
                        <div className="form-content">
                            <label className="business-state">
                                State
                            </label>
                            <input
                                type="text"
                                required
                                value={state}
                                onChange={e => setState(e.target.value)}
                            />
                            { validationErrors.state && (
                                <div className="error-handling">
                                    { validationErrors.state}
                                </div>
                            )}
                        </div>
                        <div className="form-content">
                            <label className="business-zip-code">
                                Zip Code
                            </label>
                            <input
                                type="text"
                                required
                                value={zip_code}
                                onChange={e => setZipCode(e.target.value)}
                            />
                            { validationErrors.zip_code && (
                                <div className="error-handling">
                                    { validationErrors.zip_code}
                                </div>
                            )}
                        </div>
                        <div className="form-content">
                            <label className="business-description">
                                Tell us about your business
                            </label>
                            <textarea
                                type="text"
                                required
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                            { validationErrors.description && (
                                <div className="error-handling">
                                    { validationErrors.description}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="create-business-buttons">
                        <Button type="submit" className="create-business" variant="danger">Create a New Business</Button>
                        <Button
                        onClick={() =>{
                            let modal = document.getElementById('modal-background')
                            modal.click()
                        }}
                        variant="secondary">
                            Cancel
                        </Button>{' '}
                    </div>
                </form>
                <div className="create-category">
                        <label className="new-category">
                            Create a new category
                        </label>
                        <input
                            type="text"
                            required
                            value={newCategory}
                            onChange={e => setNewCategory(e.target.value)}
                        />
                        { validationErrors.newCategory && (
                            <div className="error-handling">
                                { validationErrors.newCategory}
                            </div>
                        )}
                        <Button variant="danger" size="sm" onClick={handleAddNewCategory}>Save</Button>
                    </div>
            </section>
        </>
    )
}

export default CreateBusinessForm
