import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";


import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Spline from '@splinetool/react-spline';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

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



