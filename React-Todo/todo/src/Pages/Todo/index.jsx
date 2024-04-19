import React, { useState } from 'react';

function Todo() {   
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all'); 

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      name: taskName,
      description: description,
      status: 'not completed',
    };
    setTodos([...todos, newTodo]);
    setTaskName('');
    setDescription('');
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      const newName = prompt("Edit Task Name:", todoToEdit.name);
      const newDescription = prompt("Edit Description:", todoToEdit.description);
      if (newName !== null && newDescription !== null) {
        const updatedTodo = { ...todoToEdit, name: newName, description: newDescription };
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
      }
    }
  };        

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });

  return (
    <div>
      <h1 className='text-success'>My Todo List</h1>  

      <div className='d-flex align-items-center gap-3 w-75 m-auto Input-wrapper'>
        <input
          type="text"
          value={taskName}
          className='form-control border border-success'
          onChange={e => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <input
          type="text"
          value={description}
          className='form-control border border-success'
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button className='btn btn-success text-nowrap' onClick={handleAddTodo}>Add Todo</button>   
      </div>

      <div className='d-flex align-items-center justify-content-between w-75 m-auto mt-4'>
        <h4 className='fs-5 fw-bold'>My Todos</h4>        
        <div className='d-flex justify-content-end fs-5 fw-bold'>       
          <label>Status Filter:  </label>  
          <select className='w-25 p-2' value={filter} onChange={e => setFilter(e.target.value)}>   
            <option value="all">All</option>    
            <option value="completed">Completed</option>    
            <option value="not completed">Not Completed</option>    
          </select>
        </div>
      </div>

      <div className='d-flex flex-wrap w-100 gap-5 text-start m-auto card-box'>  
        {filteredTodos.map(todo => (
          <div className='card p-3 mb-3 text-start'key={todo.id}>       
            <p><strong>Task Name:</strong> {todo.name}</p>
            <p><strong>Description:</strong> {todo.description}</p>
            <div>   
              <label className='fw-bold'>Status:</label>    
              <select
                value={todo.status}
                onChange={e => {
                  const updatedTodo = { ...todo, status: e.target.value };
                  handleEditTodo(todo.id, updatedTodo);
                }}
              > 
                <option value="completed">Completed</option>
                <option value="not completed">Not Completed</option>
              </select>
            </div>
            <div className='d-flex justify-content-end mt-3'>
              <button
                className='btn btn-success me-2'
                onClick={() => handleEditTodo(todo.id)}
              >Edit</button>       
              <button
                className='btn btn-danger'
                onClick={() => handleDeleteTodo(todo.id)}
              >Delete</button>       
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
