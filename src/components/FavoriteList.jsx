import React from 'react';

const FavoriteList = ({ favorites, removeFromFavorites }) => {
    return (
        <div className="bg-white p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Favorite List</h2>
            <ul className="space-y-3">
                {favorites.map((student) => (
                    <li key={student.rollNumber} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
                        <span className="text-lg font-medium">
                            {student.name} - Class: {student.selectedClass}, Section: {student.section}
                        </span>
                        <div className="flex gap-2 mt-2 sm:mt-0">
                            <button
                                onClick={() => removeFromFavorites(student.rollNumber)}
                                className="mx-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                            >
                                Remove from Favorites
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;
