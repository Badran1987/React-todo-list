
import React, { Component } from 'react';


let TaskItem = ({id, task, complete}) =>{
	return (
		<li>
			<input type="checkbox"  id={`task-${id}`} name = {task} checked={complete}/>
			<label for={`task-${id}`} className="task">{task}</label>

		</li>
	);
}
export default TaskItem;


