import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Registered Students</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.email} - {student.age} - {student.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
