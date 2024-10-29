import "./Body.css";
import Gallery from "./Gallary";
export default function Body() {
  return (
    <div className="body-main" id="designs">
      <div className="header">
        <h2>Your Dream Home Awaits</h2>
        <p>
          Our extensive experience allows us to translate client visions into
          beautiful landmarks where activities thrive and lives flourish. . The
          diversity of its projects corresponds to the different scales and
          programs required by current demands.
        </p>
      </div>
      <div className="colcontainer">
        <div className="custom-grid">
          <div className="grid-item box1">
            <h3>Diverse & Inspired Designs</h3>
            <p>
              Our curated portfolio features every style and type of plan design
              from a diverse group of talented designers and architects. New
              designs added daily.New designs added daily.
            </p>
            <img src="./images/logo1.jpg" />
          </div>
          <div className="grid-item box2">
            <h3>Exceptional Customer Service</h3>
            <p>
              Seasoned customer service staff with years of combined experience
              to help you find your dream home plan.New designs added daily.
            </p>
            <img src="./images/lg1.jpg" />
          </div>
          <div className="grid-item box3">
            <h3>Modifications & Cost to Build</h3>
            <p>
              Make changes to a house plan at an affordable price. Buy a report
              to find out the cost to build in your area.New designs added
              daily.Make changes to a house plan at an affordable price.
            </p>
            <img src="./images/lg3.png" />
          </div>
        </div>
      </div>
      <div className="plans">
        <h2> Our Customised Plans</h2>
      </div>
      <section className="txt">
        <div className="text-image-container">
          <div className="text-section">
            <h3>Client-Centric Approach</h3>
            <p>
              We prioritize your vision and needs, ensuring a collaborative and
              transparent process.This is the text section where you can provide
              an explanation or description. You can add more details here to
              elaborate on the topic or provide additional context.We embrace
              new technologies and creative solutions to deliver cutting-edge
              designs.
            </p>
            <button className="contact-button">Contact for More Details</button>
          </div>
          <div className="image-section">
            <img
              src="./images/hs3.jpg"
              alt="Descriptive Alt Text"
              className="image"
            />
          </div>
        </div>
        <div className="image-text-container">
          <div className="image-section2">
            <img
              src="./images/hs33.webp"
              alt="Descriptive Alt Text"
              className="image"
            />
          </div>
          <div className="text-section2">
            <h3>Innovative Solutions</h3>
            <p>
              We prioritize your vision and needs, ensuring a collaborative and
              transparent process.This is the text section where you can provide
              an explanation or description. You can add more details here to
              elaborate on the topic or provide additional context.We embrace
              new technologies and creative solutions to deliver cutting-edge
              designs to all our clients nicely .
            </p>
            <button className="contact-button">Contact for More Details</button>
          </div>
        </div>
        <div className="text-image-container">
          <div className="text-section">
            <h3>Cost effective Idealogy</h3>
            <p>
              We prioritize your vision and needs, ensuring a collaborative and
              transparent process.This is the text section where you can provide
              an explanation or description. You can add more details here to
              elaborate on the topic or provide additional context.We embrace
              new technologies and creative solutions to deliver cutting-edge
              designs.
            </p>
            <button className="contact-button">Contact for More Details</button>
          </div>
          <div className="image-section">
            <img
              src="./images/hs34.jpg"
              alt="Descriptive Alt Text"
              className="image"
            />
          </div>
        </div>
      </section>
      <div className="plans">
        <h2> Diverse Collections </h2>
      </div>
      <section className="gallery">
        <Gallery />
      </section>
    </div>
  );
}
