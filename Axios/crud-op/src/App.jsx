import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
      setPhone(selectedUser.phone);
    } else {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [selectedUser]);

  const addUser = (e) => {
    e.preventDefault(); 
    axios.post('https://jsonplaceholder.typicode.com/users', { name, email, phone })    
      .then(response => {
        setUsers([...users, { ...response.data, id: response.data.id }]);
        setName('');
        setEmail('');
        setPhone('');
      })
      .catch(error => {
        console.error('Error adding user: ', error);
      });
  };

  const editUser = (e) => {
    e.preventDefault(); 
    axios.put(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`, { name, email, phone })
      .then(() => {
        setUsers(users.map(user => (user.id === selectedUser.id ? { ...user, name, email, phone } : user)));
        setSelectedUser(null);
        setName('');
        setEmail('');
        setPhone('');
      })
      .catch(error => {
        console.error('Error editing user: ', error);
      });
  };

  const deleteUser = (userId) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('Error deleting user: ', error);
      });
  };

  return (
    <div className="App">
      <h1>Crud Operation</h1>
      <div className="container">
        <div className="user-list-container">
          <h2>User List</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={() => setSelectedUser(user)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>  
          </table>  
        </div>
        <div className="user-form-container">
          <h2>{selectedUser ? 'Edit User' : 'Add User'}</h2>
          <form onSubmit={selectedUser ? editUser : addUser}>
            <div className='form-group'>
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className='form-group'>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='form-group'>
              <label>Phone:</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>

            <button type="submit" style={{textAlign:"center"}}>{selectedUser ? 'Update' : 'Add'}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
