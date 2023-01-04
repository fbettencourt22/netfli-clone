import React, { useState } from 'react';
import './Nav.css';

function Nav() {
	const [, /* show */ handleShow] = useState(false);

	document.addEventListener('scroll', e => {
		console.log('object');
		if (window.scrollY > 100) {
			handleShow(true);
			console.log('qualquercoisa');
		} else handleShow(false);
	});
	/* return () => {
			window.removeEventListener('scroll'); */

	return (
		<div className={'Nav'}>
			<img
				className="nav__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
				alt="Netflix Logo"
			/>
			<img
				className="nav__avatar"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
				alt="Netflix Avatar"
			/>
		</div>
	);
}

export default Nav;
