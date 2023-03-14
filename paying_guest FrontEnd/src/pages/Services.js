import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'AC Room',
      description: 'Enjoy the comfort of air-conditioned rooms to beat the heat and have a pleasant stay.',
      icon: 'fa fa-snowflake-o',
      isAvailable: true,
    },
    {
      id: 2,
      title: 'Non-AC Room',
      description: 'We offer non-air-conditioned rooms that are equally comfortable and cozy.',
      icon: 'fa fa-leaf',
      isAvailable: true,
    },
    {
      id: 3,
      title: 'WiFi',
      description: 'Stay connected with high-speed internet connectivity available throughout the property.',
      icon: 'fa fa-wifi',
      isAvailable: true,
    },
    {
      id: 4,
      title: 'Water Purifier',
      description: 'We ensure that you have access to clean and safe drinking water with our water purifier facility.',
      icon: 'fa fa-tint',
      isAvailable: true,
    },
    {
      id: 5,
      title: 'Refrigerator',
      description: 'Keep your food and beverages fresh and cool with our refrigerator facility.',
      icon: 'fa fa-snowflake-o',
      isAvailable: true,
    },
    {
      id: 6,
      title: 'Washing Machine',
      description: 'No need to worry about laundry as we provide washing machines for your convenience.',
      icon: 'fa fa-tshirt',
      isAvailable: true,
    },
    {
      id: 7,
      title: 'Food Facility',
      description: 'Delicious and hygienic food is available to cater to your taste buds.',
      icon: 'fa fa-cutlery',
      isAvailable: true,
    },
    {
      id: 8,
      title: 'Sports',
      description: 'Stay fit and healthy with our sports facility which includes indoor and outdoor games.',
      icon: 'fa fa-futbol-o',
      isAvailable: true,
    },
    {
      id: 9,
      title: 'Gym',
      description: 'Stay fit and healthy with our well-equipped gym facility.',
      icon: 'fa fa-heartbeat',
      isAvailable: true,
    },
    {
      id: 10,
      title: 'Parking',
      description: 'We offer safe and secure parking facilities for your two-wheeler and four-wheeler vehicles.',
      icon: 'fa fa-car',
      isAvailable: true,
    },
  ];

  return (
    <Container>
      <h1>Our Services</h1>
      <Row>
        {services.map(service => (
          <Col key={service.id} md={4}>
            <Card className='mb-5'>
              <Card.Body>
                <i className={service.icon}></i>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Footer>
                  {service.isAvailable ? <small className="text-success">Available</small> : <small className="text-danger">Not Available</small>}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
