import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours } from '../../reduxStore/tourSlice';

const TourDetails = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);
  const tourStatus = useSelector((state) => state.tours.status);
  const error = useSelector((state) => state.tours.error);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (tourStatus === 'idle') {
      dispatch(fetchTours());
    }
  }, [tourStatus, dispatch]);

  const selectedTour = tours.find((tour) => tour._id === id);

  useEffect(() => {
    if (selectedTour && selectedTour.image.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % selectedTour.image.length
        );
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [selectedTour]);

  let content;

  if (tourStatus === 'loading') {
    content = <div className="text-center text-gray-600">Loading...</div>;
  } else if (tourStatus === 'succeeded' && selectedTour) {
    content = (
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row">
        {/* Left side: Image Slider */}
        <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden flex justify-center items-center">
          {selectedTour.image.length > 0 && (
            <div className="relative w-full h-full">
              {/* Zoom-In/Out Effect */}
              <img
                src={`http://localhost:5000/${selectedTour.image[currentImageIndex]}`}
                alt={`Tour Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
              />
            </div>
          )}
        </div>

        {/* Right side: Description and Details */}
        <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {selectedTour.ContryName}
          </h2>
          <p className="text-gray-600 mb-4">{selectedTour.description}</p>
          {/* Add other details like price if available */}
          <p className="text-lg font-semibold text-green-600">Price: $500</p>
        </div>
      </div>
    );
  } else if (tourStatus === 'failed') {
    content = <div className="text-red-600">{error}</div>;
  } else {
    content = <div className="text-red-600">Tour not found.</div>;
  }

  return (
    <div className="container mx-auto mt-16 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Tour Details</h1>
      {content}
      <div className="flex justify-between mt-8">
        <Link to="/tour">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200">
            Tour List
          </button>
        </Link>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourDetails;
