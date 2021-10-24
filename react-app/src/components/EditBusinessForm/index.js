import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editBusinessThunk, deleteBusinessThunk } from "../../store/businesses";
import Button from 'react-bootstrap/Button'


function EditBusinessForm( { businessesObj } ) {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session?.user);

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

    useEffect(() => {
        if(businessesObj) {
            setTitle(businessesObj?.business?.title);
            setAddress(businessesObj?.business?.address);
            setCity(businessesObj?.business?.city);
            setState(businessesObj?.business?.state);
            setZipCode(businessesObj?.business?.zip_code);
            setMedia1(businessesObj?.business?.media_1);
            setMedia2(businessesObj?.business?.media_2);
            setMedia3(businessesObj?.business?.media_3);
            setMedia4(businessesObj?.business?.media_4);
            setMedia5(businessesObj?.business?.media_5);
            setDescription(businessesObj?.business?.description);
        }
    }, [businessesObj])

    console.log("==========> this is business obj",businessesObj)
    const handleEditBusinessSubmit = async(e) => {
        e.preventDefault();

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
        console.log("this is payload====>",payload); //working

        let editedBusiness = await dispatch(editBusinessThunk(payload))
        console.log("============>",editedBusiness) //undefined
        return history.push(`/businesses/${editedBusiness?.id}`);

    };

    const handleDeleteBusiness = e => {
        // e.preventDefault();
        dispatch(deleteBusinessThunk(e.target.value));
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
                        <label className="business-image">
                            Edit photo
                        </label>
                        <input
                            type="text"
                            required
                            value={media_1}
                            onChange={e => setMedia1(e.target.value)}
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
