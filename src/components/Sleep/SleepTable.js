import React from 'react';
import "./SleepTable.css";
const SleepTable = () => {
	const dropDown = () => {
		document.querySelector(".dropdown-content").classList.toggle("hid");
	}
	return (
		<div className="pa4">
		  <div className="overflow-auto">
		    <table className="f6 w-30 mw8 center" cellSpacing="0">
		      <thead>
		        <tr>
		          <th className="fw6 tc white bb pb3 pr3">Date</th>
		          <th className="fw6 tc white bb pb3 pr3">Hours</th>
		          <th className="fw6 tc white bb pb3 pr3">Minutes</th>
		          <th className="fw6 tc white bb pb3 pr3">Quality</th>
		        </tr>
		      </thead>
		      <tbody className="lh-copy">
		        <tr>
		        	<td className="pv3 b tc pr3 bt white b--white">asdff</td>
				    <td className="pv3 b tc pr3 bt b--white">
				    <input autoComplete="off" className="input-reset ba b--white pa2 white bg-transparent mb2 w3 mw4"
				    	    /></td>
				    <td className="pv3 b tc pr3 bt b--white">
				    <input autoComplete="off" className="input-reset ba b--white pa2 white bg-transparent mb2 w3 mw4"
				    	    /></td>
				    <td className="pv3 b tc pr3 bt b--white">
				    <div className="dropdown">
					  <button onClick={dropDown} className="b dropbtn">Mood</button>
					  <div id="myDropdown" className="hid dropdown-content">
					    <div className="dropdown-option" onClick={dropDown}>Good</div>
					    <div className="dropdown-option" onClick={dropDown}>OK</div>
					    <div className="dropdown-option" onClick={dropDown}>Bad</div>
					  </div>
					</div>
					</td>
		        </tr>
		      </tbody>
		    </table>
		    <p className="w5 b ph3 pv2 center tc light-blue ba br2 b--light-blue bg-transparent grow pointer f6"
		       >
		    	Submit
		    </p>
		  </div>
		</div>
	);
}

export default SleepTable;