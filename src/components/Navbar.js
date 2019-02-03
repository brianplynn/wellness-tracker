import React from 'react';

const Navbar = ({ setSection }) => {
		return (
			<header className="z-1 nav-bar w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
			  <nav className="f6 fw6 ttu tracked">
			    <span className="link dim pointer outline-0 white dib ml5 mr3" 
			    		title="nutrition"
			    		onClick={setSection}>Nutrition</span>
			    <span className="link dim pointer outline-0 white dib mr3" 
			    		title="sleep"
			    		onClick={setSection}>Sleep</span>
			    <span className="link dim pointer outline-0 white dib mr3"
			    		title="exercise"
			    		onClick={setSection}>Exercise</span>
			  </nav>
			</header>
		);	
}

export default Navbar;