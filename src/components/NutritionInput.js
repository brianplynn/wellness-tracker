import React from 'react';
import "./NutritionInput.css";

const NutritionInput = ({ nutrientFields, onFieldChange, onSubmit }) => {
	const { food, calories, fat, carbs, protein } = nutrientFields;
	return (
		<form className="center pa4 bg-dark-gray light-gray">
		  <div className="nutrition-form">
		  <div className="measure nutrient-container-l">
		    <label htmlFor="food" className="f6 b db mb2">Food 
		    </label>
		    <input id="food" 
		    	   className="input-reset ba b--black-20 pa2 mb2 db w-100" 
		    	   type="text" aria-describedby="food-desc"
		    	   value={food} 
		    	   onChange={onFieldChange} />
		  </div>
		  <div className="measure nutrient-container-md">
		    <label htmlFor="calories" className="f6 b db mb2">Calories 
		    </label>
		    <input id="calories" 
		    	   className="input-reset center ba b--black-20 pa2 mb2 db w-90" 
		    	   type="text" aria-describedby="calories-desc" 
		    	   value={calories} 
		    	   onChange={onFieldChange} />
		  </div>
		  <div className="measure nutrient-container-sm">
		    <label htmlFor="fat" className="f6 b db mb2">Fat 
		    </label>
		    <input id="fat" 
		    	   className="input-reset center ba b--black-20 pa2 mb2 db w-90" 
		    	   type="text" aria-describedby="fat-desc" 
		    	   value={fat} 
		    	   onChange={onFieldChange} />
		  </div>
		  <div className="measure nutrient-container-sm">
		    <label htmlFor="carbs" className="f6 b db mb2">Carbs 
		    </label>
		    <input id="carbs" 
		    	   className="input-reset center ba b--black-20 pa2 mb2 db w-90" 
		    	   type="text" aria-describedby="carbs-desc"
		    	   value={carbs} 
		    	   onChange={onFieldChange} />
		  </div>
		  <div className="measure nutrient-container-sm">
		    <label htmlFor="protein" className="f6 b db mb2">Protein 
		    </label>
		    <input id="protein" 
		    	   className="input-reset center ba b--black-20 pa2 mb2 db w-90" 
		    	   type="text" aria-describedby="protein-desc"
		    	   value={protein} 
		    	   onChange={onFieldChange}  />
		  </div>
		  </div>
		  <div className="mt3">
		  <div className="b ph3 pv2 ba b--black bg-light-blue grow pointer f6"
		  		  onClick={onSubmit.bind(null, nutrientFields)}>
		  	Submit</div>
		  </div>
		</form>

		);
}

export default NutritionInput;