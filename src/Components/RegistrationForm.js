import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName && studentEmail && studentAge && studentPhone) {
      const age = parseInt(studentAge, 10);
      if (age < 18 || age > 30) {
        setError('Age must be between 18 and 30.');
        return;
      }
      if (!/^\d{10}$/.test(studentPhone)) {
        setError('Phone number must be 10 digits long.');
        return;
      }
      setError('');
      onRegister({ name: studentName, email: studentEmail, age, phone: studentPhone });
      setStudentName('');
      setStudentEmail('');
      setStudentAge('');
      setStudentPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={studentAge}
            onChange={(e) => setStudentAge(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="text"
            value={studentPhone}
            onChange={(e) => setStudentPhone(e.target.value)}
            required
          />
        </label>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
