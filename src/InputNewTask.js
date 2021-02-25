import React, { Component } from 'react';
import TaskItem from './TaskItem';
import Data from './fetch.json'


class InputNewTask extends React.Component {
constructor(props){
	super(props);
	this.state = {
		task:''
	};
} 
  handle(e) {
	  this.setState({task:e.target.value});
	  console.log( {task:e.target.value})
  }

  creatNewTask=(data)=>{
	Data.push({
		"id": Data.length+1,
		"task": `${this.state.task}`,
		"complete": false
		
	})
	return (
		<TaskItem id = {2} task = {this.state.task} checked = {false} />
	)
 	console.table(Data)
	alert(this.state.task)
	

  }


	render() {
	  return (
		<div>  
		<form>
		  <input type="text" name= "newTask" value = {this.state.task} onChange={this.handle.bind(this)} />
		  <button type="submit" onClick= {this.creatNewTask}> add new Task </button>
		  
		</form>
		</div>
	  )
	}
  }
  export default InputNewTask;