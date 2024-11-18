import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours } from '../../reduxStore/tourSlice';
import { Link } from 'react-router-dom';

const Tours = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);
  const tourStatus = useSelector((state) => state.tours.status);
  const error = useSelector((state) => state.tours.error);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(tours.length / itemsPerPage);

  useEffect(() => {
    if (tourStatus === 'idle') {
      dispatch(fetchTours());
    }
  }, [tourStatus, dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastTour = currentPage * itemsPerPage;
  const indexOfFirstTour = indexOfLastTour - itemsPerPage;
  const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);

  let content;

  if (tourStatus === 'loading') {
    content = <div className="text-center text-lg font-semibold">Loading...</div>;
  } else if (tourStatus === 'succeeded') {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentTours.map((tour) => (
          <div key={tour._id || tour.ContryName} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={tour.image && tour.image[0] ? `http://localhost:5000/${tour.image[0]}` : '/path/to/placeholder.jpg'}
              alt={tour.ContryName}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">{tour.ContryName}</h3>
              <Link to={`/tour/${tour._id}`}>
                <button className="w-full py-2 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (tourStatus === 'failed') {
    content = <div className="text-red-600 text-center">{error}</div>;
  }

  // Calculate visible page range (show 3 pages before and after current page)
  const visiblePages = [];
  const maxPageNumbers = 3;
  let startPage = currentPage - maxPageNumbers;
  let endPage = currentPage + maxPageNumbers;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(totalPages, maxPageNumbers * 2 + 1);
  }
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - maxPageNumbers * 2 - 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <div className="container mx-auto mt-16 px-4">
      <h1 className="text-center text-3xl font-bold my-8">Tour List</h1>
      {content}

      {/* Pagination Section */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        >
          First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        >
          Prev
        </button>

        {/* Page Number Buttons */}
        {visiblePages.map((pageNumber) => (
          <button
            key={`pagination-${pageNumber}`}
            className={`px-3 py-1 rounded ${pageNumber === currentPage ? 'bg-blue-600 text-white' : 'bg-blue-100'}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        >
          Next
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Tours;
