import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Home = () => {
	const { store, actions } = useContext(Context);

	const handleDelete = (contactId) => {
		actions.deleteContact(contactId);
	};
	{Array.isArray(store.contacts) && store.contacts.length > 0 ? (
		store.contacts.map(contact => (
		  <div key={contact.id}>{contact.name}</div>
		))
	  ) : (
		<p>No hay contactos aún.</p>
	  )}
	return (

		
		<div className="container mt-5">
			<h1 className="text-center mb-4">📞 Contact List</h1>

			<div className="d-flex justify-content-end mb-3">
				<Link to={"/agregar/"} className="btn btn-success">
					➕ Agregar contacto
				</Link>
			</div>

			{store.contacts.length === 0 ? (
				<div className="alert alert-warning text-center">No hay contactos disponibles.</div>
			) : (
				<div className="row">
					{store.contacts.map((contact) => (
						<div className="col-md-6 col-lg-4" key={contact.id}>
							<div className="card shadow-sm mb-3">
								<div className="card-body">
									<h5 className="card-title">{contact.name}</h5>
									<p className="card-text">
										📧 <strong>Email:</strong> {contact.email}
										<br />
										📞 <strong>Phone:</strong> {contact.phone}
										<br />
										🏠 <strong>Address:</strong> {contact.address}
									</p>
									<div className="d-flex justify-content-between">
										<button
											className="btn btn-danger"
											onClick={() => handleDelete(contact.id)}
										>
											🗑️ Eliminar
										</button>
										<Link to={"/agregar/"} className="btn btn-primary">
											✏️ Editar
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;





