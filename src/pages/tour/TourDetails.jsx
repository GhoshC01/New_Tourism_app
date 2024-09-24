import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTours } from '../../reduxStore/tourSlice';
import { Container, Card,Col,Button } from 'react-bootstrap';
// import './TourDetails.css'; // Custom styles if needed

const TourDetails = () => {
  const { id } = useParams(); // Retrieve the tour id from the URL
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);
  const tourStatus = useSelector((state) => state.tours.status);
  const error = useSelector((state) => state.tours.error);

  useEffect(() => {
    if (tourStatus === 'idle') {
      dispatch(fetchTours()); // Fetch the tours if not already done
    }
  }, [tourStatus, dispatch]);

  const selectedTour = tours.find((tour) => tour.id ==id);
  console.log(selectedTour);
  

  let content;

  if (tourStatus === 'loading') {
    content = <div className="text-center">Loading...</div>;
  } else if (tourStatus === 'succeeded' && selectedTour) {
    content = (
      <Card className="tour-details-card">
        <Card.Img variant="top" src={selectedTour.thumbnailUrl} className="tour-details-image" />
        <Card.Body>
          <Card.Title>{selectedTour.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  } else if (tourStatus === 'failed') {
    content = <div className="text-danger">{error}</div>;
  } else {
    content = <div className="text-danger">Tour not found.</div>;
  }

  return (<>
    <Container style={{ marginTop: '70px' }}>
      <h1 className="text-center my-4">Tour Details</h1>
      {content}
    </Container>
    <Col md={10 } className="d-flex justify-content-end align-items-center">
    <Button variant="primary" className="book-now-button">
      Book Now
    </Button>
  </Col>
  <Col md={2 } className="d-flex justify-content-end align-items-center">
  <Link to={'/tour'}>
    <Button variant="primary" className="book-now-button">
      Tour List
    </Button>
    </Link>
  </Col>
  </>
  );
};

export default TourDetails;
