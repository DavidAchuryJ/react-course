import "./CreateTodoButton.css"; // Import the CSS file

function CreateTodoButton(props) {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("Le diste click al botón");
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton }; // Export the TodoCounter component
