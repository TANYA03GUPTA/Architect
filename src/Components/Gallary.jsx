import { Card, Row, Col } from "react-bootstrap";
import "./Gallery.css";

export default function Gallary() {
  const images = [
    "./images/b2.webp",
    "./images/b123.webp",
    "./images/hs34.jpg",
    "./images/b61.jpg",
    "./images/b46.jpg",
    "./images/bs44444.jpeg",
    "./images/hs111.webp",
    "./images/b55.webp",
    "./images/hs022.jpg",
  ];

  return (
    <div className="gallery-container mt-5" id="collections">
      <Row>
        {images.map((src, index) => (
          <Col md={4} key={index}>
            <Card className="gallery-card">
              <Card.Img
                variant="top"
                src={src}
                alt={`Gallery Image ${index + 1}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
