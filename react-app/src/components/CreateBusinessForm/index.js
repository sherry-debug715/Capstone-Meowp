import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createBusinessThunk } from '../../store/businesses';
import { getAllCategoriesThunk } from '../../store/categories'
import Button from 'react-bootstrap/Button'

const CreateBusinessForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state?.session.user);
    const categoriesObj = useSelector( state => state?.categories);
    const categoriesArray = Object.values(categoriesObj)

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch]);

    const [category_id, setCategoryId] = useState()
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

        if(newBusiness) {
            return history.push(`/businesses/${newBusiness?.id}`)
        }
        reset()
    };

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
                        </div>
                        <div className="form-content">
                            <label className="business-name">
                                Business URL_1
                            </label>
                            <input
                                type="text"
                                required
                                value={media_1}
                                onChange={e => setMedia1(e.target.value)}
                            />
                        </div>
                        <div className="form-content">
                            <label className="business-name">
                                Business URL_2
                            </label>
                            <input
                                type="text"
                                required
                                value={media_2}
                                onChange={e => setMedia2(e.target.value)}
                            />
                        </div>
                        <div className="form-content">
                            <label className="business-name">
                                Business URL_3
                            </label>
                            <input
                                type="text"
                                required
                                value={media_3}
                                onChange={e => setMedia3(e.target.value)}
                            />
                        </div>
                        <div className="form-content">
                            <label className="business-name">
                                Business URL_4
                            </label>
                            <input
                                type="text"
                                required
                                value={media_4}
                                onChange={e => setMedia4(e.target.value)}
                            />
                        </div>
                        <div className="form-content">
                            <label className="business-name">
                                Business URL_5
                            </label>
                            <input
                                type="text"
                                required
                                value={media_5}
                                onChange={e => setMedia5(e.target.value)}
                            />
                        </div>
                        <div className="form-content">
                            <label className="categories-select">
                                Select a Category
                                <select className="dropdown"
                                    value={category_id}
                                    onChange={e => {
                                        setCategoryId(e.target.value)
                                    }}
                                >
                                    {categoriesArray?.map(category => {
                                        return (
                                            <>
                                                <option value={category.id} onChange={e => setCategoryId(category.id)}>{category.name}</option>
                                            </>
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
            </section>
        </>
    )
}

export default CreateBusinessForm
