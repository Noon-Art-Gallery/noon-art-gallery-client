import "./LandingPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import heroImage from "/images/workshop-begin.jpg";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="hero-section">
        <div className="hero-section__text">
          <h1>Welcome to Noon Art Gallery</h1>
          <p>
            Discover unique art workshops, original artworks, commission custom
            pieces, and hand-painted fashion items are availabe to buy.
          </p>
        </div>
        <img
          className="hero-section__image"
          src={heroImage}
          alt="Art Gallery"
        />
      </div>
    </div>
  );
}
