import React, { useState } from 'react';
import RegistrationForm from './Components/RegistrationForm';
import StudentList from './Components/StudentList';

const App = () => {
  const [students, setStudents] = useState([]);

  const handleRegister = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <h1>Student Registration Portal</h1>
      <RegistrationForm onRegister={handleRegister} />
      <StudentList students={students} />
    </div>
  );
};

export default App;
