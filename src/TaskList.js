import React, { Component } from 'react';
import data from './fetch.json'; 
import TaskItem from './TaskItem'

let Tasklist = () =>{

    return (
     <>
        {data.map((todolist, i) => (
          <TaskItem id = {todolist.id} task = {todolist.task} checked = {todolist.complete} />
        ))}
      </>
    );

  } 

  export default Tasklist;