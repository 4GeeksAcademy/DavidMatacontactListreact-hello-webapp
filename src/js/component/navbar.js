import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			{/* Enlace a la página de inicio */}
			<Link to="/" className="btn btn-info">
				Home
			</Link>
		</nav>
	);
};
