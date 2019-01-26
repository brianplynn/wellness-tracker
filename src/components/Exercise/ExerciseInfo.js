import React from 'react';

const ExerciseInfo = ({ currentDate }) => {
	const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	return (
		<div>
			<h1 className="tc white">{weekDays[currentDate.getDay()] + ", " + months[currentDate.getMonth()] + " " + currentDate.getDate()}</h1>
		</div>)
}

export default ExerciseInfo;