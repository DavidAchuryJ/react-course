import './TodoCounter.css'; // Import the TodoCounter.css file

function TodoCounter({ total, completed }) {
  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter }; // Export the TodoCounter component
