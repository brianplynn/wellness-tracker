import React from 'react';
import "./NutritionInput.css";

const NutritionInput = ({ formErrorText, nutrientFields, onFieldChange, onSubmit }) => {
	const { food, calories, fat, carbs, protein } = nutrientFields;
	const formCorrect = food && Number(calories) && Number(fat) && Number(carbs) && Number(protein);
	return (
		<form className="z-1 ba br2 form-foods center white shadow-3 pa4 ma3 w-50">
		  <h1 className="tc">Add a Food!</h1>
		  <div className="z-1 nutrition-form">
		  <div className="z-1 measure nutrient-container-l">
		    <input id="food" 
		    	   className="food-input input-reset bg-transparent white ba b--white pa2 mb2 db w-100" 
		    	   type="text" aria-describedby="food-desc"
		    	   autoComplete="off"
		    	   value={food} 
		    	   onChange={onFieldChange} />
		  </div>
		  <div className="z-1 measure container-1">
		  <div className="measure nutrient-container-md">
		    <label htmlFor="calories" className="center f6 b db mb2">Calories 
		    </label>
		    <input id="calories" 
		    	   className="food-input-cal input-reset bg-transparent white center ba b--white pa2 mb2 db w-100" 
		    	   type="text" aria-describedby="calories-desc" 
		    	   autoComplete="off"
		    	   value={calories} 
		    	   onChange={onFieldChange} />
		  </div>
		  <div className="measure nutrient-container-sm">
		    <label htmlFor="fat" className="center f6 b db mb2">Fat 
		    </label>
		    <input id="fat" 
		    	   className="food-input input-reset bg-transparent white center ba b--white pa2 mb2 db w-100" 
		    	   type="text" aria-describedby="fat-desc" 
		    	   autoComplete="off"
		    	   value={fat} 
		    	   onChange={onFieldChange} />
		  </div>
		  <div className="measure nutrient-container-sm">
		    <label htmlFor="carbs" className="center f6 b db mb2">Carbs 
		    </label>
		    <input id="carbs" 
		    	   className="food-input input-reset bg-transparent white center ba b--white pa2 mb2 db w-100" 
		    	   type="text" aria-describedby="carbs-desc"
		    	   autoComplete="off"
		    	   value={carbs} 
		    	   onChange={onFieldChange} />
		  </div>
		  <div className="measure nutrient-container-sm">
		    <label htmlFor="protein" className="center f6 b db mb2">Protein 
		    </label>
		    <input id="protein" 
		    	   className="food-input white input-reset bg-transparent center ba b--white pa2 mb2 db w-90" 
		    	   type="text" aria-describedby="protein-desc"
		    	   autoComplete="off"
		    	   value={protein} 
		    	   onChange={onFieldChange}  />
		  </div>
		  </div>
		  </div>
		  <div className="mt3">
		  <p className="food-input-submit b ph3 pv2 center tc light-blue w-10 ba br2 b--light-blue bg-transparent grow pointer f6"
		  		  onClick={onSubmit.bind(null, nutrientFields, formCorrect)}>
		  		  Submit
		  </p>
		  <div id="name-desc" className="hid center bg-white br2 f6 db w5 pa2 hid mt1 ">
	    	<svg className="w1" data-icon="info" viewBox="0 0 32 32">
			    <title>info icon</title>
			    <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
			</svg>
		    <span className="lh-title black ml3">{formErrorText}</span>
		  </div>
		  </div>
		</form>

		);
}

export default NutritionInput;