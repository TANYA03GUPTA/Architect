import "./TopInfo.css";
import { Carousel } from "react-bootstrap";

export default function TopInfo() {
  return (
    <div className="containerTp ">
      <div className="img-part">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/hs01.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Luxury Interiors</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/hs001.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Greenery Preserved</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/hs007.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Aesthetics prevailed</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/hs03.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Office designs</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="text-part d-flex flex-column ">
        <h1>
          Architects
          <span>
            <h3>who design</h3>
          </span>
          <span>
            <h2>For Future</h2>
          </span>
        </h1>
        <p>
          At Architectural Designs, we re always ready to pivot and evolve to
          meet your needs!Lorem Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Odit qui voluptatum obcaecati maiores culpa!
        </p>
      </div>
    </div>
  );
}
