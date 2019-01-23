import React from 'react';

const NutritionTable = ({ dailyFoods, deleteFood }) => {
	return (
		<div className="pa4">
		  <div className="overflow-auto">
		    <table className="f6 w-100 mw8 center" cellSpacing="0">
		      <thead>
		        <tr>
		          <th className="fw6 black-80 bb b--black-20 tl pb3 pr3 bg-white">Food</th>
		          <th className="fw6 black-80 bb b--black-20 tl pb3 pr3 bg-white">Calories</th>
		          <th className="fw6 black-80 bb b--black-20 tl pb3 pr3 bg-white">Fat</th>
		          <th className="fw6 black-80 bb b--black-20 tl pb3 pr3 bg-white">Carbs</th>
		          <th className="fw6 black-80 bb b--black-20 tl pb3 pr3 bg-white">Protein</th>
		        </tr>
		      </thead>
		      <tbody className="lh-copy">
		        {dailyFoods.map( (food, i) => {
				       return <tr key={i}>
				          <td className="pv3 pr3 bb b--black-20">{food.food}</td>
				          <td className="pv3 pr3 bb b--black-20">{food.calories}</td>
				          <td className="pv3 pr3 bb b--black-20">{food.fat}</td>
				          <td className="pv3 pr3 bb b--black-20">{food.carbs}</td>
				          <td className="pv3 pr3 bb b--black-20">{food.protein}</td>
				          <td><button value={i} onClick={deleteFood}>x</button></td>
				        </tr>
				        ;
		    		})
		        }
		      </tbody>
		    </table>
		  </div>
		</div>
		);
}

export default NutritionTable;