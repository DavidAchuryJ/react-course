import React from 'react'; // Import the React library
import './TodoSearch.css'; // Import the TodoSearch.css file

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className='TodoSearchParent'>
      <input
        placeholder='Cebolla'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
          console.log('Escribiste algo en el todo search');
        }}
      />
    </div>
  );
}

export { TodoSearch }; // Export the TodoCounter component
