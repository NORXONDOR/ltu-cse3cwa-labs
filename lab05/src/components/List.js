import Task from './Task';
import { useState } from 'react';

function List(props) {	
	const [newTask, setNewTask] = useState("");

	function onClick() {
		props.setTasks(tasks => [...tasks, {
			id: tasks.length+1,
			description: newTask,
			completed: false
		}]);
	}

	return (
		<div>
			<h1>{ props.heading }</h1>
			<div>
				<label for="task-field">Add Task</label>
				<input id="task-field" onChange={(event) => setNewTask(event.target.value)}></input>
				<button onClick={onClick}>Add</button>
			</div>
			<ul>
				{/* Generates list items from props.tasks */}
				{ props.tasks.map(task =>
					<Task
					key={task.id}
					setTasks={props.setTasks}
					id={task.id}
					description={task.description}
					completed={task.completed}
					/>
				)}
			</ul>
		</div>
	);
}

export default List;
