
import { useState } from 'react';
import './PracticeComp.css';

function PracticeComp() {
  const [formData, setFormData] = useState({
    name: '',
    age: ''
        });

  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
         });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      name: '',
      age: ''
    });
  };

  return (
    <div className="User-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
      
        
        <button type="submit">Submit</button>
      </form>
    
        <table className="user-table">
            <thead>
             <tr>
               <th>Name</th>
              <th>age</th>
          </tr>
            </thead>
            <tbody>
             {users.map((user, index) => (
            <tr key={index}>
               <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
            </tbody>
        </table>
             </div>
  );
}

export default PracticeComp;