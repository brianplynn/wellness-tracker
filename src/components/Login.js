import React, { Component } from 'react';
import { Link, browserHistory } from "react-router-dom"
import "./Login.css";
import history from "../history";
import FacebookLogin from 'react-facebook-login';
import { logInFB } from "../actions";


class Login extends Component {
	constructor(props) {
		super(props);
	}

	responseFacebook = (response) => {
	  const { logInFacebook } = this.props;
	  if (response.name) {
	  	logInFacebook(response);
	  	history.push('/nutrition');
	  }
	  // fetch login
	  // fetch register if fails
	}
	render() {
		return (
			<div className="login center mt5 ba ph3 pv3 pv4-ns ph4-m ph5-l">
			  <h1 className="white tc">Welcome!</h1>
				<Link to="/home/nutrition">
				<FacebookLogin
				    appId="513697765824552"
				    autoLoad={true}
				    fields="name,email"
				    callback={this.responseFacebook}
				    version={3.2} />
				</Link>
				<button className="w4 z-3">Log in</button>
			</div>
		);	
	}
}
export default Login;