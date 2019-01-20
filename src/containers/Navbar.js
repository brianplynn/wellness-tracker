import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveSection } from "../actions"

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
	console.log(dispatch);
	return {
		setSection: (e) => dispatch(setActiveSection(e.target.value))
	}
};

class Navbar extends Component {
	render() {
		const { setSection } = this.props;
		return (
			  <nav className="bt bb tc mw7 center mt4">
			    <button className="f6 f5-l pointer outline-0 bn bg-animate bg-transparent light-gray hover-bg-gray dib pa3 ph4-l" 
			       value="nutrition"
			       onClick={setSection}>Nutrition</button>
			    <button className="f6 f5-l pointer outline-0 bn bg-animate bg-transparent light-gray hover-bg-gray dib pa3 ph4-l" 
			       value="sleep"
			       onClick={setSection}>Sleep</button>
			    <button className="f6 f5-l pointer outline-0 bn bg-animate bg-transparent light-gray hover-bg-gray dib pa3 ph4-l" 
			       value="exercise"
			       onClick={setSection}>Exercise</button>   
			  </nav>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);