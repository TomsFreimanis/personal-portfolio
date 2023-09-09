
import { Container, Row, Col } from "react-bootstrap";


import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Spline from '@splinetool/react-spline';


export const Banner = () => {
  

  return (
    <section className="banner" id="home">
  <Container>
    <Row className="align-items-center justify-content-center text-center">
      <Col xs={12} className="mt-4"> {/* Adding margin top for spacing */}
        <h1 style={{ color: '#40e0d0' }}>Hi, I'm Toms</h1>
        <p>Web Developer and Designer with a Passion for Code</p>
        <p>This is my 3D portfolio</p>
      </Col>
      <Col xs={12} md={6} xl={8} className="d-flex justify-content-center">
        <TrackVisibility>
          {({ isVisible }) => (
            <div className="spline-pc">
             <Spline scene="https://prod.spline.design/xuOC-HcsnF1FkOdw/scene.splinecode" />
            </div>
          )}
        </TrackVisibility>
      </Col>
    </Row>
  </Container>
</section>

  );
  
}



