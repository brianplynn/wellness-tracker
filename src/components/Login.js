import React from 'react';
import { Link } from "react-router-dom"
import "./Login.css";

const Login = () => {
		return (
			<div className="login center mt5 ba ph3 pv3 pv4-ns ph4-m ph5-l">
			  <h1 className="white tc">Welcome!</h1>
				<Link to="/home/nutrition">
				<button className="w4 z-3">Log in</button>
				</Link>
			</div>
		);	
}

export default Login;