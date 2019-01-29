import React from 'react';
import "./SleepTable.css";
const SleepTable = ({ sleepFields, currentDate, changeSleepField, saveSleepChanges }) => {
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
		       {sleepFields.map( (item, i) => {
		       		return (
		       	        		<tr key={i}>
		       		        		<td className="pv3 b tc pr3 bt white b--white">
		       		        			{currentDate.getMonth() + 1}/{currentDate.getDate() - 6 + i}
		       		        		</td>
		       		        		<td className="pv3 b tc pr3 bt b--white">
		       					    <input autoComplete="off" 
		       					    	   onChange={changeSleepField}
		       					    	   data-row={i}
		       					    	   data-col="hours"
		       					    	   data-val={sleepFields[i].hours}
		       					    	   value={sleepFields[i].hours}
		       					    	   className="input-reset ba b--white pa2 white bg-transparent mb2 w3 mw4"
		       					    	    /></td>
		       					    <td className="pv3 b tc pr3 bt b--white">
		       					    <input autoComplete="off" 
		       					    	   onChange={changeSleepField}
		       					    	   data-row={i}
		       					    	   data-col="minutes"
		       					    	   data-val={sleepFields[i].minutes}
		       					    	   value={sleepFields[i].minutes} 
		       					    	   className="input-reset ba b--white pa2 white bg-transparent mb2 w3 mw4"
		       					    	    /></td>
		       					    <td className="pv3 b tc pr3 bt b--white">
		       					    <div className="dropdown">
		       						  <button onClick={dropDown} value={sleepFields[i].quality} className="b dropbtn">Mood</button>
		       						  <div id="myDropdown" className="hid dropdown-content">
		       						    <div className="dropdown-option"
		       					    	   	 data-row={i}
		       					    	   	 data-col="quality" 
		       						    	 data-val="good" 
		       						    	 onClick={dropDown}>Good</div>
		       						    <div className="dropdown-option"
		       					    	   	 data-row={i}
		       					    	     data-col="quality" 
		       					    	     data-val="ok" 
		       					    	     onClick={dropDown}>OK</div>
		       						    <div className="dropdown-option"
		       					    	     data-row={i}
		       					    	     data-col="quality" 
		       					    	     data-val="bad" 
		       					    	     onClick={dropDown}>Bad</div>
		       						  </div>
		       						</div>
		       						</td>
		       					</tr>
		       					)
		       	        	}
	        	)}
		      </tbody>
		    </table>
		    <p className="w5 b ph3 pv2 center tc light-blue ba br2 b--light-blue bg-transparent grow pointer f6"
		       onClick={saveSleepChanges.bind(null, sleepFields)}>
		    	Submit
		    </p>
		  </div>
		</div>
	);
}

export default SleepTable;