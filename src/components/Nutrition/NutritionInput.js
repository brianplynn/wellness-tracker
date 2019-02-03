import React from 'react';
import "./NutritionInput.css";

const NutritionInput = ({ cancelFood, submitEdamameField, nutrientFields, onFieldChange, onSubmit }) => {
	const { edamame, food, calories, fat, carbs, protein } = nutrientFields;
	const formCorrect = food && calories && fat && carbs && protein;
	return (
		<div className="z-1 ba br2 form-foods center white shadow-3 pa4 ma3 w-50">
		  <form>
			  <h1 className="ml6 ml-shrink">Search over 2 million foods in our database...</h1>
			  <div className="z-1 flex flex-column justify-between">
				  <div className="flex search-field flex-wrap">
					  <div className="z-1 ml6 ml-shrink measure nutrient-container-l">
					    <input id="edamame" 
					    	   className="food-input input-reset bg-transparent white ba b--white pa2 mb2 db w-100" 
					    	   type="text" aria-describedby="food-desc"
					    	   autoComplete="off"
					    	   value={edamame} 
					    	   onChange={onFieldChange} />  
					  </div>
					  <div className="flex flex-column search-container align-center">
					  	  <button className="search-btn w4 b ph3 pv2 ml3 tc light-green ba br2 b--light-green bg-transparent grow pointer outline-0 f6"
								  type="submit"
								  onClick={submitEdamameField.bind(null, edamame)}>
								  Search
						  </button> 
						  <img className="edamame mb1" 
							  		alt="attribute" 
							  		src="https://developer.edamam.com/images/badge.png">
						  </img>
					  </div>
				  </div>
				  </div>
				</form>
			  <form>
				  <h1 className="ml6 ml-shrink">...or enter your meal here:</h1>
				  <div className="z-1 ml6 ml-shrink measure nutrient-container-l">
				    <input id="food" 
				    	   className="food-input input-reset bg-transparent white ba b--white pa2 mb2 db w-100" 
				    	   type="text" aria-describedby="food-desc"
				    	   autoComplete="off"
				    	   value={food} 
				    	   required
				    	   onChange={onFieldChange} />
				  </div>
				  <div className="z-1 measure ml6 ml-shrink nutrient-container">
					  <div className="measure nutrient-container-md mr5">
					    <label htmlFor="calories" className="center f6 b db mb2">Calories 
					    </label>
					    <input id="calories" 
					    	   className="food-input-cal input-reset bg-transparent white center ba b--white pa2 mb2 db w-100" 
					    	   type="number" aria-describedby="calories-desc" 
					    	   autoComplete="off"
					    	   value={calories} 
					    	   required
					    	   onChange={onFieldChange} />
					  </div>
					  <div className="measure nutrient-container-sm mr5">
					    <label htmlFor="fat" className="center f6 b db mb2">Fat 
					    </label>
					    <input id="fat" 
					    	   className="food-input input-reset bg-transparent white center ba b--white pa2 mb2 db w-100" 
					    	   type="number" aria-describedby="fat-desc" 
					    	   autoComplete="off"
					    	   value={fat} 
					    	   required
					    	   onChange={onFieldChange} />
					  </div>
					  <div className="measure nutrient-container-sm mr5">
					    <label htmlFor="carbs" className="center f6 b db mb2">Carbs 
					    </label>
					    <input id="carbs" 
					    	   className="food-input input-reset bg-transparent white center ba b--white pa2 mb2 db w-100" 
					    	   type="number" aria-describedby="carbs-desc"
					    	   autoComplete="off"
					    	   value={carbs} 
					    	   required
					    	   onChange={onFieldChange} />
					  </div>
					  <div className="measure nutrient-container-sm mr5">
					    <label htmlFor="protein" className="center f6 b db mb2">Protein 
					    </label>
					    <input id="protein" 
					    	   className="food-input white input-reset bg-transparent center ba b--white pa2 mb2 db w-100" 
					    	   type="number" aria-describedby="protein-desc"
					    	   autoComplete="off"
					    	   value={protein} 
					    	   required
					    	   onChange={onFieldChange}  />
					  </div>
				  </div>
				  <div className="flex mt3 ml-auto mr3 mb3 w-60 justify-center">
					  <button className="w4 b ph3 pv2 mr1 tc light-silver ba br2 b--light-silver bg-transparent grow pointer outline-0 f6"
							  type="submit"
							  onClick={cancelFood}
							  >Cancel</button> 
					  <button className="w4 b ph3 pv2 ml1 tc light-blue ba br2 b--light-blue bg-transparent grow outline-0 pointer f6"
					  		  onClick={onSubmit.bind(null, nutrientFields, formCorrect)}>
					  		  Submit
					  </button>
				  </div>
			  </form>
		</div>

		);
}

export default NutritionInput;