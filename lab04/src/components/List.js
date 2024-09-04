import Task from './Task';

function List(props) {	
	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				{/* Generates list items from props.tasks */}
				{ props.tasks.map(task =>
					<Task
					description={task.description}
					completed={task.completed}
					/>
				)}
			</ul>
		</div>
	);
}

export default List;
