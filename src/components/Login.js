import React, { Component } from 'react';
import { Link, browserHistory } from "react-router-dom"
import "./Login.css";
import history from "../history";
import FacebookLogin from 'react-facebook-login';
import { logInFB } from "../actions";


class Login extends Component {
	
	responseFacebook = (response) => {
	  const { logInFacebook } = this.props;
	  console.log(response);
	  if (response.name) {
	  	logInFacebook(response);
	  	history.push('/nutrition');
	  }
	  // fetch login
	  // fetch register if fails
	}
	render() {
		return (
			<div className="login center flex flex-column justify-center ba ph3 pv3 pv4-ns ph4-m ph5-l">
			  <h1 className="white tc">Welcome!</h1>
				<div className="facebook mt2 mb5">
				<FacebookLogin
				    appId="513697765824552"
				    autoLoad={true}
				    fields="name,email"
				    callback={this.responseFacebook}
				    version={3.2} />
				</div>
			</div>
		);	
	}
}
export default Login;