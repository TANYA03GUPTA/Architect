import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navheader">
      <div className="navContainer left">
        <h1>Hello Architects</h1>
      </div>
      <div className="navConatainer right">
        <ul className="list-menu">
          <li>All Plans</li>
          <li>Designs</li>
          <li>Cost-To-Build</li>
          <li>Collections</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
