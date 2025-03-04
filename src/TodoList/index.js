import './TodoList.css'; // Import the TodoList.css file

function TodoList(props) {
  return <ul className='PropsChildren'>{props.children}</ul>;
}

export { TodoList }; // Export the TodoCounter component
