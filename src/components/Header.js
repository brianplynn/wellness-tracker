import React from 'react';
import Navbar from "../containers/Navbar.js"

const Header = () => {
	return (
		<header class=" light-gray tc pv4 avenir">
		  <h1 class="mt2 mb0 baskerville i fw1 f1">Wellness Tracker</h1>
		  <Navbar />
		</header>
		)
}

export default Header;