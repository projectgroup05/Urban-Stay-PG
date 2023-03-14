import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <>
      <div className='bg-image' style={{ backgroundImage: '' }}>
        <Container>
          <Row>
            <Col>
              <h1><strong>Urban Stay Paying Guest Management</strong></h1>
              <br />
              <br />
              <h3>
                <p>Welcome to Urban Stay Paying Guest Management, the ultimate solution for all your PG accommodation needs!</p>
                <p>Our platform offers a comprehensive list of PG accommodations with detailed information such as amenities, room type, location, and pricing. You can easily filter your search based on your preferences and requirements to find the perfect PG that suits your needs.</p>
                <p>Our booking process is seamless, secure, and hassle-free. You can book your PG accommodation with just a few clicks and receive instant confirmation. We also offer flexible payment options to ensure that you can pay in a way that is convenient for you.</p>
                <p>Our customer support team is available round the clock to assist you with any queries or concerns you may have. We take pride in providing excellent customer service and ensuring that you have a comfortable and enjoyable stay.</p>
                <p>So, whether you are a student, working professional, or someone who needs a temporary accommodation, Urban Stay is your one-stop-shop for all your PG accommodation needs. Thank you for choosing Urban Stay Paying Guest Management!</p>
              </h3>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;