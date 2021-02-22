
import React, { Component } from 'react';


let TaskItem = ({id, task, complete}) =>{
	return (
		<li>
			<input type="checkbox" id={`2`} name={`2`} checked='fales' />
			<label for= {`task-${id}`} className="task">badran</label>
		</li>
	);
}
export default TaskItem;


