import React, { Component } from 'react';
import "./Login.css";
import history from "../history";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GitHubLogin from 'react-github-login';

class Login extends Component {
	responseFacebook = (response) => {
	  const { logInFacebook, syncNutritionFunc, syncSleepFunc, syncWorkoutsFunc } = this.props;
	  console.log(response);
	  if (response.name) {
		  fetch('https://wellness-tracker-api.herokuapp.com/login-fb', {
		        method: "post",
		        headers: {'Content-Type': 'application/json'},
		        body: JSON.stringify({  
		          id: response.id
		        })
		  })
		  .then(res => res.json())
		  .then(res => {
		  	if (res === "No such user. Please register") throw new Error(res);
		  	logInFacebook({ id: res.id, name: response.name, email: response.email });
		    syncWorkoutsFunc("fb_" + response.id);
		    syncNutritionFunc("fb_" + response.id);
		    syncSleepFunc("fb_" + response.id);
		    history.push('/nutrition');
		   })
		  .catch(err => {
		  	if (err.message === "No such user. Please register") {
		  		fetch('https://wellness-tracker-api.herokuapp.com/register-fb', {
			        method: "post",
			        headers: {'Content-Type': 'application/json'},
			        body: JSON.stringify({  
			          id: response.id
			        })
			    })
			    .then(res => res.json())
			    .then(res => {
			    	logInFacebook({ id: res[0], name: response.name, email: response.email });
		    		history.push('/nutrition');
			    })
			    .catch(err => console.log(err))
		  	}
		  })
		  } 
	}

	onSuccess = response => {
		fetch('https://github.com/login/oauth/access_token', {
	        method: "post",
	        mode: 'no-cors',
	        headers: {'Content-Type': 'application/json'},
	        body: JSON.stringify({  
	          client_id: 'c7bdc63f0a88829cb6f2',
	          client_secret: '81e4ae8221fd323b103bab4cca15433b26f42ff4',
	          code: response
	        })
	      })
		.then(res => res.json())
		.then(res => console.log(res))
	}
    onFailure = response => console.error(response);

	render() {
		return (
			<div className="login center flex flex-column justify-center ba ph3 pv3 pv4-ns ph4-m ph5-l">
			  <h1 className="white tc">Welcome!</h1>
				<div className="facebook mt2">
				<FacebookLogin
				    appId="513697765824552"
				    fields="name,email"
				    render={renderProps => (
						    <button className="facebook-btn"
						    		onClick={renderProps.onClick}>
						    		Sign in with Facebook</button>
						  )}
				    callback={this.responseFacebook}
				    version={3.2} />
				</div>
				<GitHubLogin className="github"
							clientId="c7bdc63f0a88829cb6f2"
							buttonText="Sign in with Github"
							redirectUri=""
						    onSuccess={this.onSuccess}
						    onFailure={this.onFailure}/>
			</div>
		);	
	}
}
export default Login;