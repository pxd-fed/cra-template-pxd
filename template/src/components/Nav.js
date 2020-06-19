import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div>
			<Link to="/">Main</Link>
			<Link to="/sample">SampleContainer</Link>
		</div>
	);
};

export default Nav;
