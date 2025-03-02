import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Addcontact = () => {
    const { actions } = useContext(Context)
    const navigate = useNavigate()
    const [newContact, setNewContact] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "address": "",
    })
    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        actions.createContact(newContact)
        navigate("/")
    }
    return (
        <div>
            <div classnamename="text-center mt-5">
                <h1>Add Contact</h1>
                <Link to="/">Home</Link>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Full Name</span>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={newContact.name}
                        onChange={handleChange} />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">phone</span>
                    <input 
                    type="text" 
                    className="form-control"
                    name="phone"
                    value={newContact.phone}
                    onChange={handleChange} />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" >email</span>
                    <input 
                    type="text" 
                    className="form-control"
                    name="email"
                    value={newContact.email}
                    onChange={handleChange} />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">address</span>
                    <input 
                    type="text" 
                    className="form-control"
                    name="address"
                    value={newContact.address}
                    onChange={handleChange} />
                </div>

                <button className="btn btn-success" onClick={handleSubmit}>
                    Agregar contacto
                </button>


            </div>
        </div>
    );
};
