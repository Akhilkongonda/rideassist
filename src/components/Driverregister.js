import React, { useState } from 'react';
import "./Driverregister.css";

function Driverregister() {
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [busNumber, setBusNumber] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Validate the form data
    if (!name || !employeeId || !phoneNumber || !busNumber) {
      setFormError('Please fill out all fields');
      return;
    }

    // TODO: Send the form data to the server
    const formData = {
      name,
      employeeId,
      phoneNumber,
      busNumber,
    };
    console.log(formData);
  };

  return (
    <div className='bg'>
    <div className='p-3'>
    <button className='m-auto d-flex p-2'>DRIVER REGISTER</button>
    </div>
            

    
   
    <h1 className='text-center h11 mt-5'></h1>

      <form className='form form-control form1 mt-2' onSubmit={handleSubmit}>
        <div className='mt-3'>
          <input size="38" type="text" name="name" id="name" placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='mt-3'>
          <input size="38" type="text" name="employee-id" id="employee-id" placeholder='Employee ID' value={employeeId} onChange={(event) => setEmployeeId(event.target.value)} />
        </div>
        <div className='mt-3'>
          <input size="38" type="text" name="phone-number" id="phone-number" placeholder='Phone Number' value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        </div>
        <div className='mt-3'>
          <input size="38" type="text" name="bus-number" id="bus-number" placeholder='Bus Number' value={busNumber} onChange={(event) => setBusNumber(event.target.value)} />
        </div>
        {formError && <p className="text-danger mt-3">{formError}</p>}
        <div className='mt-3'>
          <button className='btn btn-primary d-block m-auto mt-2' type="submit">SUBMIT</button>
        </div>
      </form>
    
    </div>
  )
}

export default Driverregister;
