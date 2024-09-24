// src/components/TourList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours } from '../../reduxStore/tourSlice';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are imported
import './Tour.css'; // Import custom styles

const Tours = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);
  const tourStatus = useSelector((state) => state.tours.status);
  const error = useSelector((state) => state.tours.error);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Change this value for more or less items per page
  const totalPages = Math.ceil(tours.length / itemsPerPage);

  useEffect(() => {
    if (tourStatus === 'idle') {
      dispatch(fetchTours());
    }
  }, [tourStatus, dispatch]);

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current tours based on the current page
  const indexOfLastTour = currentPage * itemsPerPage;
  const indexOfFirstTour = indexOfLastTour - itemsPerPage;
  const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);

  let content;

  if (tourStatus === 'loading') {
    content = <div className="text-center">Loading...</div>;
  } else if (tourStatus === 'succeeded') {
    content = (
      <Row>
        {currentTours.map((tour) => (
          <Col key={tour.id} md={4} className="mb-4">
            <Card className="tour-card">
              <Card.Img variant="top" src={tour.thumbnailUrl} className="tour-image" />
              <Card.Body>
                <Card.Title className="tour-title">{tour.title}</Card.Title>
                <Link to={`/tour/${tour.id}`}>
                  <Button className="tour-button">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  } else if (tourStatus === 'failed') {
    content = <div className="text-danger">{error}</div>;
  }

  return (
    <Container style={{ marginTop: '70px' }}>
      <h1 className="text-center my-4">Tour List</h1>
      {content}
      <Pagination className="justify-content-center mt-4">
        <Pagination.First 
          onClick={() => handlePageChange(1)} 
          disabled={currentPage === 1} 
        />
        <Pagination.Prev 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1} 
        />
        {[...Array(totalPages > 6 ? 6 : totalPages)].map((_, index) => (
          <Pagination.Item 
            key={index + 1} 
            active={index + 1 === currentPage} 
            onClick={() => handlePageChange(index + 1)}
            className="pagination-item"
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} 
        />
        <Pagination.Last 
          onClick={() => handlePageChange(totalPages)} 
          disabled={currentPage === totalPages} 
        />
      </Pagination>
    </Container>
  );
};

export default Tours;
