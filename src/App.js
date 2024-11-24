import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import FavoriteList from './components/FavoriteList';
import './index.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Add a student with a random roll number (unique ID)
  const addStudent = (student) => {
    const newStudent = { ...student, rollNumber: Math.floor(Math.random() * 1000000) };
    setStudents((prev) => [...prev, newStudent]);
  };

  // Add student to favorites if not already in the list
  const addToFavorites = (student) => {
    if (!favorites.some(fav => fav.rollNumber === student.rollNumber)) {
      setFavorites((prev) => [...prev, student]);
    }
  };

  // Remove student from favorites by rollNumber
  const removeFromFavorites = (rollNumber) => {
    setFavorites((prev) => prev.filter(student => student.rollNumber !== rollNumber));
  };

  // Remove student from student list and favorites list by rollNumber
  const removeStudent = (rollNumber) => {
    // Remove from students list
    setStudents((prev) => prev.filter(student => student.rollNumber !== rollNumber));

    // Remove from favorites list
    setFavorites((prev) => prev.filter(student => student.rollNumber !== rollNumber));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4">
      <StudentForm addStudent={addStudent} />
      <div className='flex flex-col sm:flex-row gap-5 bg-slate-400 p-5 text-2xl rounded-md'>
        <StudentList
          students={students}
          addToFavorites={addToFavorites}
          removeStudent={removeStudent}
        />
        <FavoriteList
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
    </div>
  );
};

export default App;
