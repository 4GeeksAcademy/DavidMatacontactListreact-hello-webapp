import React from "react";
import { json, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

const EditContact = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="text-center mt-5">
            <h1>Edit Contact</h1>

        </div>
        
	)
}

export default EditContact;
