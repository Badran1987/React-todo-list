import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Tasklist from './TaskList'
import InputNewTask from './InputNewTask'

const App = () => {
	class QuestionSet extends Component {
		render(){ 
				   return (
					<>
						<Tasklist />
						<InputNewTask />
					</>
				)
				
				}}
		}
// ReactDOM.render( App , document.getElementById(`root`))

export default App;
