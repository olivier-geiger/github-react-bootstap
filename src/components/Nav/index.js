import React from 'react';
import { Link } from 'react-router-dom'

function Nav () {
	return (
		<div>
			<nav className="navbar navbar-light bg-light m-3">
				<Link className="navbar-brand" to="/" exact >Search</Link>
				<Link className="navbar-brand" to="/faq" exact >FAQ</Link>
			</nav>
		</div>
	)
}

export default Nav;
