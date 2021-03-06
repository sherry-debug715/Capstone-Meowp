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
    const [categoryErrors, setCategoryErrors] = useState({});

    const categoryValidate = () => {
        const categoryErrors = {};

        if(newCategory.length > 20) {
            categoryErrors["newCategory"] = "Category content is limited to 20 characters"
        }

        if(!newCategory.length) {
            categoryErrors["newCategory"] = "You can not create an empty category"
        }

        categoriesArray.forEach(category => {
            if((category?.name).toLowerCase() === newCategory.toLowerCase()) {
                return categoryErrors["newCategory"] = "Category already exists"
            }
        })

        return categoryErrors
    }

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

        if(!Number(zip_code) || zip_code.length > 5) {
            validationErrors["zip_code"] = "Please provide a valid zip code for your business location. A valid zip code must be less than 6 numbers"

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
        // setMedia5("")
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
        const errors = categoryValidate()
        if(Object.keys(errors).length > 0) return setCategoryErrors(errors);

        const payload = {
            name: newCategory
        };

        let createdCategory = await dispatch(createCategoryThunk(payload))
        setNewCategory("")
    }

    return (
        <>
            <section>
                <form className="business-form-container" onSubmit={handleCreateBusiness}>
                    <div className="business-title-st">
                        <img className="business-brand-img" src="https://cdn.discordapp.com/attachments/900530489574703194/903389504939900958/unknown.png" alt="brand"/>
                        <h2 className="business-title">
                            Create Business
                        </h2>
                    </div>
                    <div className="business-content">
                        <div className="form-content-create">
                            <label className="business-labels">
                                Business Name
                            </label>
                            <input
                                className="business-input-create"
                                type="text"
                                // required
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            {validationErrors.title && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{validationErrors.title}</p>
                                </div>
                            )}
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels">
                                Business URL_1 (Required)
                            </label>
                            <input
                                className="business-input-create"
                                type="text"
                                value={media_1}
                                onChange={e => setMedia1(e.target.value)}
                            />
                            {validationErrors.media_1 && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{validationErrors.media_1}</p>
                                </div>
                            )}
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels">
                                Business URL_2 (Optional)
                            </label>
                            <input
                                className="business-input-create"
                                type="text"
                                value={media_2}
                                onChange={e => setMedia2(e.target.value)}
                            />
                            {validationErrors.media_2 && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{validationErrors.media_2}</p>
                                </div>
                            )}
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels">
                                Business URL_3 (Optional)
                            </label>
                            <input
                                className="business-input-create"
                                type="text"
                                value={media_3}
                                onChange={e => setMedia3(e.target.value)}
                            />
                            {validationErrors.media_3 && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{validationErrors.media_3}</p>
                                </div>
                            )}
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels">
                                Business URL_4 (Optional)
                            </label>
                            <input
                                className="business-input-create"
                                type="text"
                                value={media_4}
                                onChange={e => setMedia4(e.target.value)}
                            />
                            {validationErrors.media_4 && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{validationErrors.media_4}</p>
                                </div>
                            )}
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels">
                                Business URL_5 (Optional)
                            </label>
                            <input
                                className="business-input-create"
                                type="text"
                                value={media_5}
                                onChange={e => setMedia5(e.target.value)}
                            />
                            {validationErrors.media_5 && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{validationErrors.media_5}</p>
                                </div>
                            )}
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels" className="business-category-select">
                                Select a Category
                            </label>
                            <div id="custom-select">
                                <select className="dropdown"
                                    className="business-input-create"
                                    value={category_id}
                                    onChange={e => {
                                        setCategoryId(e.target?.value)
                                    }}
                                    >
                                    <option selected disabled>--select a category--</option>
                                    {categoriesArray?.map(category => {
                                        return (
                                            <option value={category?.id}>{category?.name}</option>
                                            )
                                    })}
                                </select>
                                <span class="custom-arrow"></span>
                            </div>
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels">
                                Address
                            </label>
                            <input
                                className="business-input-create"
                                type="text"
                                // required
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                            { validationErrors.address && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{ validationErrors.address}</p>
                                </div>
                            )}
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels">
                                City
                            </label>
                            <input
                                className="business-input-create"
                                type="text"
                                // required
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                            { validationErrors.city && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{ validationErrors.city}</p>
                                </div>
                            )}
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels" >
                                State
                            </label>
                            <div id="custom-select">
                                <select
                                    value={state}
                                    className="business-input-create"
                                    onChange={e => {
                                        setState(e.target?.value)
                                    }}
                                >
                                    <option selected disabled>--select a state--</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                <span class="custom-arrow"></span>
                            </div>
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels">
                                Zip Code
                            </label>
                            <input
                                className="business-input-create"
                                type="text"
                                required
                                value={zip_code}
                                onChange={e => setZipCode(e.target.value)}
                            />
                            { validationErrors.zip_code && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{ validationErrors.zip_code}</p>
                                </div>
                            )}
                        </div>
                        <div className="form-content-create">
                            <label className="business-labels">
                                Tell us about your business
                            </label>
                            <textarea
                                className="textarea-business-create"
                                type="text"
                                // required
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                            { validationErrors.description && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{ validationErrors.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="business-btns">
                        <Button type="submit" className="create-business" variant="danger">Create a New Business</Button>
                        <Button
                        className="business-btn-m"
                        onClick={() =>{
                            let modal = document.getElementById('modal-background')
                            modal.click()
                        }}
                        variant="secondary">
                            Cancel
                        </Button>{' '}
                    </div>
                </form>

                <div className="create-category-container">
                        <label className="new-category-label">
                            Can't find a category for your business? Create a new one
                        </label>
                        <div className="create-category-contents">
                            <input
                                className="create-category-input"
                                type="text"
                                // required
                                value={newCategory}
                                onChange={e => setNewCategory(e.target.value)}
                            />
                            { categoryErrors.newCategory && (
                                <div className="form-error-handling">
                                    <span class="material-icons" id="warning-icon">
                                        error_outline
                                    </span>
                                    <p className="error-content">{ categoryErrors.newCategory}</p>
                                </div>
                            )}
                            <Button variant="danger" size="sm" onClick={handleAddNewCategory}>Save</Button>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default CreateBusinessForm
