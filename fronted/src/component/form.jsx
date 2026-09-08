import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './form.css';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
    age: ''
  });

const navigate = useNavigate();


  // Inputs ke badle alag function me rakha handleChange
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData({
      ...formData,
      [fieldName]: fieldValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('User registered succesfully you can now login');
        setFormData({
          name: '',
          number: '',
          email: '',
          password: '',
          age: ''
        });

        setTimeout(function(){
          navigate("/login")
        },1400);


      } else {
        toast.error(data.message || 'Server problem.....!');
      }
    } catch (error) {
      toast.error('Network error! Server not connected');
      console.error('Error :', error);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <div>
          <label>Name:</label><br />
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label>Number:</label><br />
          <input 
            type="tel" 
            name="number" 
            value={formData.number} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label>Age:</label><br />
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
          />
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export { Form };