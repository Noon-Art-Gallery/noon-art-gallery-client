import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Provider } from "@/components/ui/provider";
import EventsPage from "./pages/EventsPage/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage/EventDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  const workshops = [
    {
      id: "1",
      title: "Tote Bag Painting Workshop in Lavender field",
      date: "July 12 2025",
      location: "Whitby, ON",
      description:
        "A gentle creative session focused on emotional expression and color.",
      image: "/images/workshops/lavender2025/untitled-11.jpg",
      included: "All materials and refreshments provided.",
      address: "6900 Country Ln, Whitby, ON L1M 1N7",
      price: "$120 per person",
      ticketLink: "https://buy.stripe.com/test_fZucN7b4I2My6U07vuew800",
      buyButtonId: "buy_btn_1TQs9mArHQvsxUThZwFgaE2l",
      publishableKey:
        "pk_live_51TPqW8ArHQvsxUTh8lbtVwWkg8xP8gasXg8t7cihnODlKIggWndGqMxkPE4s2WeNZ4pJEPLKFk9MzHP09ybwbZov00UqWRj39t",
    },
    {
      id: "2",
      title: "Painting on Cap Workshop in Sunflower field",
      date: "Aug 3 2025",
      location: "Toronto, ON",
      description: "Explore layering, texture, and depth in oil painting.",
      image:
        "/images/workshops/sunflower2025/B073425E-51E8-4679-A67B-18D688580420_1_105_c.jpeg",
      included: "All materials and refreshments provided.",
      address: "5240 Lake Ridge Rd, Ashburn, ON L1Y 0A5",
      price: "$120 per person",
      ticketLink: "https://buy.stripe.com/test_fZucN7b4I2My6U07vuew800",
      buyButtonId: "buy_btn_1TQs9mArHQvsxUThZwFgaE2l",
      publishableKey:
        "pk_live_51TPqW8ArHQvsxUTh8lbtVwWkg8xP8gasXg8t7cihnODlKIggWndGqMxkPE4s2WeNZ4pJEPLKFk9MzHP09ybwbZov00UqWRj39t",
    },
  ];
  return (
    <>
      <Provider>
        <Navbar />
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/events"
              element={<EventsPage workshops={workshops} />}
            />
            <Route
              path="/events/:eventId"
              element={<EventDetailsPage workshops={workshops} />}
            />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
