import React from 'react';

const StudentList = ({ students, addToFavorites, removeStudent }) => {
    return (
        <div className="bg-white p-5 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Student List</h2>
    <ul className="space-y-3">
        {students.map((student) => (
            <li key={student.rollNumber} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
                <span className="text-lg font-medium">
                    {student.name} (Roll No: {student.rollNumber}, Class: {student.selectedClass}, Section: {student.section})
                </span>
                <div className="ml-2 flex gap-2 mt-2 sm:mt-0">
                    <button 
                        onClick={() => addToFavorites(student)} 
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Add to Favorites
                    </button>
                    <button 
                        onClick={() => removeStudent(student.rollNumber)} 
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                    >
                        Remove from Students
                    </button>
                </div>
            </li>
        ))}
    </ul>
</div>

    );
};

export default StudentList;
