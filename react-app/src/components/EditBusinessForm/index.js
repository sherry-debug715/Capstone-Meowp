import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editBusinessThunk, deleteBusinessThunk } from "../../store/businesses";
import Button from 'react-bootstrap/Button'


function EditBusinessForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session?.user);
    const { businessId } = useParams();

    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip_code, setZipCode] = useState("")
    const [media_1, setMedia1] = useState("")
    const [media_2, setMedia2] = useState("")
    const [media_3, setMedia3] = useState("")
    const [media_4, setMedia4] = useState("")
    const [media_5, setMedia5] = useState("")
    const [description, setDescription] = useState("")

    // useEffect(() => {
    //     if(businessId)
    // })

    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
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
            zip_code,
        };

        let editedBusiness = await dispatch(editBusinessThunk(payload))
        if(editedBusiness) {
            history.push(`/businesses/${editedBusiness?.id}`)
        }
    };

    const deleteBusiness = e => {
        e.preventDefault();
        dispatch(deleteBusinessThunk(businessId));
        history.push('/businesses')
    }

    const handleCancelSubmit = e => {
        e.preventDefault();
        history.push(`/businesses/${businessId}`)
    }

    return (
        <>
            <section className="editbusiness-form-container">
                <form onSubmit={handleSubmit}>
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
                    </div>
                    <div className="form-content">
                        <label className="business-address">
                            Address 1
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
                        <label className="business-zip">
                            ZIP
                        </label>
                        <input
                            type="text"
                            required
                            value={zip_code}
                            onChange={e => setZipCode(e.target.value)}
                        />
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
                    </div>
                    <Button type="submit" className="save-business-edit" variant="danger">Submit Changes</Button>
                    <Button onClick={handleCancelSubmit} variant="secondary">Cancel</Button>{' '}
                </form>
            </section>
        </>
    )

}


export default EditBusinessForm;
