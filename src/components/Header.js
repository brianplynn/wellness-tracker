import React from 'react';
import Navbar from "../containers/Navbar.js"

const Header = () => {
	return (
		<header className=" light-gray tc pv4 avenir">
		  <h1 className="mt2 mb0S baskerville i fw1 f1">Wellness Tracker</h1>
		  <Navbar />
		</header>
		)
}

export default Header;