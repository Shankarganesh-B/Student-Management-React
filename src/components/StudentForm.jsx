import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
    const [name, setName] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [section, setSection] = useState('');

    const romanNumerals = [
        'LKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && selectedClass && section) {
            const rollNumber = Math.floor(100000 + Math.random() * 900000);
            const newStudent = { name, selectedClass, section, rollNumber };
            addStudent(newStudent);
            setName('');
            setSelectedClass('');
            setSection('');
        }
    };

    return (
        <div className='flex flex-col justify-start gap-2 bg-blue-400 p-10 rounded-md text-2xl'>
            <h2 className='text-center text-3xl font-medium flex-wrap'>Shankarganesh's Student Form</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-blue-300 p-6 rounded-md shadow-lg max-w-md mx-auto">
                <div className="flex flex-col gap-2">
                    <label className="font-semibold" htmlFor="name">
                        Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="p-2 border rounded-md w-full"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold" htmlFor="class">
                        Class:
                    </label>
                    <select
                        id="class"
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        required
                        className="p-2 border rounded-md w-full"
                    >
                        <option value="">Select Class</option>
                        {romanNumerals.map((roman, index) => (
                            <option key={index} value={roman}>
                                {roman}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold" htmlFor="section">
                        Section:
                    </label>
                    <select
                        id="section"
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        required
                        className="p-2 border rounded-md w-full"
                    >
                        <option value="">Select Section</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="mt-4 p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Add Student
                </button>
            </form>

        </div>
    );
};

export default StudentForm;
