// components/PassengerDetails.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPassenger, selectPassengers, selectTotalCost } from '../../reduxStore/passengerSlice';
import TourDetails from './TourDetails';

const PassengerDetails = () => {
  const dispatch = useDispatch();
  const passengers = useSelector(selectPassengers);
  const totalCost = useSelector(selectTotalCost);
  const initialCost = useSelector((state)=>state.tour.initialCost);

  const handleAddPassenger = () => {
    dispatch(addPassenger({ name: 'New Passenger', cost: initialCost }));
  };

  return (
    <div className="passenger-details">
      <TourDetails />
      <div className="passenger-section">
        <h2>Passenger Details</h2>
        <button onClick={handleAddPassenger}>
          Add Passenger
        </button>
        <div className="cost-display">
          <h3>Total Cost: ${totalCost}</h3>
        </div>
        <div className="passenger-list">
          {passengers.map((passenger, index) => (
            <div key={index} className="passenger">
              {passenger.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
