import "./LandingPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import heroImage from "/images/workshop-begin.jpg";
import { CheckCircle } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Check } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Copy01, DownloadCloud02, Edit01, Trash01 } from "@untitledui/icons";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import {
  ButtonGroup,
  ButtonGroupItem,
} from "@/components/base/button-group/button-group";

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
