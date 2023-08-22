import React, { useState } from 'react';
import "./Userregister.css";


function Userregister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform form validation
    const formErrors = {};
    if (!name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = "Invalid email format";
    }
    if (!mobileNumber.trim()) {
      formErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      formErrors.mobileNumber = "Invalid mobile number format";
    }
    if (!password.trim()) {
      formErrors.password = "Password is required";
    }
    setErrors(formErrors);
    // if no errors, submit form data
    if (Object.keys(formErrors).length === 0) {
      const userData = { name, email, mobileNumber, password };
      console.log(userData);
      // submit form data to server
    }
  };

  return (
    <div className='bg1'>
    <div className='p-3'>
    <button className='d-flex m-auto p-2'>USER REGISTER</button>
    </div>
            

    
    <div>

      <form className='form form-control form1 mt-5' onSubmit={handleSubmit}>
        <div className='mt-3'>
          <input size="38"
            type="text"
            name="name"
            id="name"
            placeholder='Name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>
        <div className='mt-3'>
          <input size="38"
            type="email"
            name="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className='mt-3'>
          <input size="38"
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            placeholder='Mobile Number'
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
          />
          {errors.mobileNumber && <p className="text-danger">{errors.mobileNumber}</p>}
        </div>
        <div className='mt-3'>
          <input size="38"
            type="password"
            name="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>
        <div className='mt-3'>
          <button className='btn btn-primary d-block m-auto mt-2' type="submit">Register</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Userregister;
