import { useState } from 'react';

function Task(props) {
    console.log(props);

    function onChange() {
        // Find task and update
        props.setTasks(tasks => tasks.map(task => {
            if (task.id === props.id) {
                return {
                    id: task.id,
                    description: task.description,
                    completed: !task.completed
                };
            } else {
                return task;
            };
        }));
    }

    function onClick() {
        props.setTasks(tasks => tasks.filter(task => task.id !== props.id));
    }

    return (
        <li>
            <button type="button" onClick={onClick}>X</button>
            {props.description} 
            <input type="checkbox" checked={props.completed} onChange={onChange}/>
        </li>
    );
}

export default Task;