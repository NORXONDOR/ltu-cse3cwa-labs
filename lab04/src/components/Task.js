function Task(props) {
    return (
        <li>
            {props.description} 
            <input type="checkbox" checked={props.completed} readOnly/>
        </li>
    );
}

export default Task;