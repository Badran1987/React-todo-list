import React, { Component } from 'react';
import data from "./fetch.json"; 
import TaskItem from './TaskItem'

let Tasklist = () =>{

    {data.map((todolist, index)=>{
       console.log(todolist.id)
       console.log(todolist.task)

       return (
        <TaskItem todolistid= {todolist.id} task= {todolist.task} complete= {todolist.task} />

    ); 
          
    })}

  }
  export default Tasklist;