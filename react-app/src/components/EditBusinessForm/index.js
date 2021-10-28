import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editBusinessThunk, deleteBusinessThunk, getAllBusinessesThunk } from "../../store/businesses";
import Button from 'react-bootstrap/Button'
import { businessDetailThunk } from '../../store/businesses';


function EditBusinessForm( { businessesObj } ) {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session?.user);
    const businessesStore = useSelector(state => state?.businesses);

    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip_code, setZipCode] = useState("")
    const [media_1, setMedia1] = useState("")
    // const [media_2, setMedia2] = useState("")
    // const [media_3, setMedia3] = useState("")
    // const [media_4, setMedia4] = useState("")
    // const [media_5, setMedia5] = useState("")
    const [description, setDescription] = useState("")
    const { businessId } = useParams();
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
        return validationErrors;
    }

    useEffect(() => {
        if(businessesObj) {
            setTitle(businessesObj?.business?.title);
            setAddress(businessesObj?.business?.address);
            setCity(businessesObj?.business?.city);
            setState(businessesObj?.business?.state);
            setZipCode(businessesObj?.business?.zip_code);
            setMedia1(businessesObj?.business?.media_1);
            // setMedia2(businessesObj?.business?.media_2);
            // setMedia3(businessesObj?.business?.media_3);
            // setMedia4(businessesObj?.business?.media_4);
            // setMedia5(businessesObj?.business?.media_5);
            setDescription(businessesObj?.business?.description);
        }
    }, [businessesObj])


    const handleEditBusinessSubmit = async(e) => {
        e.preventDefault();

        const errors = validate();
        if(Object.keys(errors).length > 0) return setValidationErrors(errors);

        const payload = {
            id:businessesObj?.business?.id,
            title,
            description,
            media_1,
            address,
            city,
            state,
            zip_code,
        };

        let editedBusiness = await dispatch(editBusinessThunk(payload))
        dispatch(businessDetailThunk(businessId));
        let modal = document.getElementById('modal-background')
        modal.click()
    };

    const handleDeleteBusiness = e => {
        // e.preventDefault();
        dispatch(deleteBusinessThunk(e.target.value));
        dispatch(getAllBusinessesThunk())
        history.push('/businesses')
    }

    return (
        <>
            <section className="editbusiness-form-container">
                <form onSubmit={handleEditBusinessSubmit}>
                    <div className="title-container">
                        Update Business Details
                    </div>
                    <div className="message-edit-business">
                        Any suggested changes to a business page must first be verified by Yelp’s moderators.
                    </div>
                    <div className="form-content">
                        <label className="business-name">
                            Business Name
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
                        <label className="business-zip">
                            ZIP
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
                        <label className="business-image">
                            Edit photo
                        </label>
                        <input
                            type="text"
                            required
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
                        <label className="description">
                            Description
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
                    <div className="edit-business-buttons">
                        <Button type="submit" className="save-business-edit" variant="danger">Submit Changes</Button>
                        <Button
                        onClick={() =>{
                            let modal = document.getElementById('modal-background')
                            modal.click()
                        }}
                        variant="secondary">
                            Cancel
                        </Button>{' '}
                        <Button
                        value={ businessesObj?.business.id }
                        className="delete-business-button"
                        variant="danger"
                        onClick={handleDeleteBusiness}
                        >Delete</Button>
                    </div>
                </form>
            </section>
        </>
    )

}


export default EditBusinessForm;
