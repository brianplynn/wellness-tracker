import React from 'react';
import "./SleepInput.css";

const SleepInput = () => {
	return (
		<form className="form-sleep pa4 white center ba w-50 br2">
		  <div className="">
		    <label htmlFor="name" className="f5 fw7 tc center b db mb2">Time</label>
		    <div className="flex justify-center">
		    <input id="name" autoComplete="off" className="input-reset ba b--white pa2 white bg-transparent mb2 db w-20 mw4 mr2" type="text" aria-describedby="name-desc" placeholder="0" />
		    <div className="f3"> : </div><input id="name" autoComplete="off" className="input-reset ba b--white pa2 white bg-transparent mb2 db w-20 mw4 ml1" type="text" aria-describedby="name-desc" placeholder="00" />
		 	</div>
		  </div>
		  <fieldset id="favorite_movies" className="mt4 bn">
		    <legend className="center tc fw7 f5 mb2">Quality</legend>
		    <div className="flex justify-around">
			    <div className="flex flex-column items-center mb2">
			      <input className="mr2 bg-transparent white ba b--white br2" type="radio" name="mood" value="good" />
			      <label htmlFor="spacejam" className="lh-copy">Good</label>
			    </div>
			    <div className="flex flex-column items-center mb2">
			      <input className="mr2 bg-transparent white ba b--white br2" type="radio" name="mood" value="ok" />
			      <label htmlFor="airbud" className="lh-copy">OK</label>
			    </div>
			    <div className="flex flex-column items-center mb2">
			      <input className="mr2 bg-transparent white ba b--white br2" type="radio" name="mood" value="bad" />
			      <label htmlFor="hocuspocus" className="lh-copy">Bad</label>
			    </div>
		    </div>
		  </fieldset>
		  <p className="w4 b ph3 pv2 center tc light-blue ba br2 b--light-blue bg-transparent grow pointer f6">
		  	Submit
		  </p>
		</form>

	);
}

export default SleepInput;