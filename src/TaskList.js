import React, { Component } from 'react';
import data from "./fetch.json"; 
import TaskItem from './TaskItem'

let Tasklist = () =>{

  
    {data.map((todolist, i)=>{

       return (
         <TaskItem id = {todolist.id} task = {todolist.task} complete = {todolist.complete} />
        ); 
          
    })}

  } 

  export default Tasklist;