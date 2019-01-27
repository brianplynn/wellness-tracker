import React from 'react';

const ExerciseInfo = ({ currentDate, editingWorkout, editWorkout, workouts, workoutFields, changeWorkoutField, changeWorkoutTitle, addWorkout, saveChanges }) => {
	const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	const index = currentDate.getDay();
	return (
		<div className="w-70 center">
			<h1 className="tc white">{weekDays[index] + ", " + months[currentDate.getMonth()] + " " + currentDate.getDate()}</h1>
			<div className="white tc">
			{ editingWorkout ? 
				<input data-day={index}
					   value={workoutFields[index].title}
					   onChange={changeWorkoutTitle} /> 
				: <h2>{workouts[index].workout[0] ? 
						workouts[index].title 
						: "No workout scheduled today. Kick your feet up or "
					}
				    {workouts[index].workout[0] ? 
						<span className="b tc dim b--transparent bg-transparent pointer f6" 
								onClick={editWorkout}>Edit Workout</span>
						: <span className="b underline tc dim b--transparent bg-transparent pointer"
								onClick={editWorkout}>add a workout!</span>
					}
				  </h2>
			}
			</div>
			<div>{ editingWorkout ? 
				 ( <table className="f6 w-30 mw8 center" cellSpacing="0">
			      <tbody className="lh-copy">
			      { workoutFields[index].workout.map( (workout, i) => {
				        return (
				        <tr key={i}>
				        	<td className="pv3 b tc pr3 bt b--white">
				        		<input data-day={index}
				        			   data-row={i}
				        			   data-col="text"
				        			   value={workout.text}
				        			   onChange={changeWorkoutField} />
				        	</td>
						    <td className="pv3 b tc pr3 bt b--white">
						    	<input data-day={index}
				        			   data-row={i}
				        			   data-col="weight"
				        			   value={workout.weight}
				        			   onChange={changeWorkoutField} />
						    </td>
						    <td className="pv3 b tc pr3 bt b--white">
						    	<input data-day={index}
				        			   data-row={i}
				        			   data-col="sets"
				        			   value={workout.sets}
				        			   onChange={changeWorkoutField} />
						    </td>
						    <td className="pv3 b tc pr3 bt b--white">
						    	<input data-day={index}
				        			   data-row={i}
				        			   data-col="reps"
				        			   value={workout.reps}
				        			   onChange={changeWorkoutField} />
						    </td>
				        </tr>
				        );
			      	}
			      )}
			      </tbody>
			    </table>
			    )
				:
				 ( <table className="f6 w-30 mw8 center" cellSpacing="0">
			      <tbody className="lh-copy">
			      { workouts[index].workout.map( (workout, i) => {
				        return (
				        <tr key={i}>
				        	<td className="pv3 b tc pr3 bt b--white">
				        		{workout.text}
				        	</td>
						    <td className="pv3 b tc pr3 bt b--white">
						    	{workout.weight}
						    </td>
						    <td className="pv3 b tc pr3 bt b--white">
						    	{workout.sets}
						    </td>
						    <td className="pv3 b tc pr3 bt b--white">
						    	{workout.reps}
						    </td>
				        </tr>
				        );
			      	}
			      )}
			      </tbody>
			    </table>
			    )
			}
			</div>
			<div> {editingWorkout ?
					<React.Fragment>
					<button data-day={index} onClick={addWorkout}>+</button> 
					<div>
						<button onClick={saveChanges.bind(null, index, workoutFields[index])}>Save</button>
					</div>
					</React.Fragment>
					: ""}
			</div>
		</div>
		)
}

export default ExerciseInfo;