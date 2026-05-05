import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Provider } from "@/components/ui/provider";
import EventsPage from "./pages/EventsPage/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage/EventDetailsPage";
import CommissionPage from "./pages/CommissionPage/CommissionPage";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage";
import CollectionDetailsPage from "./pages/CollectionDetailsPage/CollectionDetailsPage";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { button, desc, i } from "framer-motion/client";

function App() {
  // const [count, setCount] = useState(0);

  const workshops = [
    {
      id: "1",
      title: "Tote Bag Painting Workshop in Lavender field",
      date: "July 12 2025",
      location: "Pickering, ON",
      description:
        "A gentle creative session focused on emotional expression and color.",
      image: "/images/workshops/lavender2025/untitled-11.jpg",
      included: "All materials and refreshments provided.",
      address: "6900 Country Ln, Whitby, ON L1M 1N7",
      price: "$130 per person",
      ticketLink: "https://book.stripe.com/dRm8wO93c5FpbZS2nCak003",
      buyButtonId: "buy_btn_1TSjKlArHQvsxUThyULXPhFL",
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
      price: "$130 per person",
      ticketLink: "https://book.stripe.com/dRm8wO93c5FpbZS2nCak003",
      buyButtonId: "buy_btn_1TQs9mArHQvsxUThZwFgaE2l",
      publishableKey:
        "pk_live_51TPqW8ArHQvsxUTh8lbtVwWkg8xP8gasXg8t7cihnODlKIggWndGqMxkPE4s2WeNZ4pJEPLKFk9MzHP09ybwbZov00UqWRj39t",
    },
    {
      id: "sum26-3a",
      title: "Mindfulness with Art in Lavender field",
      date: "July 12 2026",
      location: "Pickering, ON",
      description:
        "A half-day retreat designed to quiet your mind and reconnect with yourself through art, nature & breath",
      image: "/images/workshops/lavender2025/untitled-11.jpg",
      included: [
        "Full day access to Tranquility Trails, a beautiful lavender farm with dreamy trails",
        "Breathwork session",
        "Drink (cold lavender infused/coffee/tea)",
        "A delicious baked dessert",
        "Live handpan performance ",
        "Painting session",
        "All materials and instructions",
        " A fresh cut lavender bouquet to take home",
      ],
      address: "6900 Country Ln, Whitby, ON L1M 1N7",
      price: "$130 per person",
      ticketLink: "https://book.stripe.com/dRm8wO93c5FpbZS2nCak003",
      buyButtonId: "buy_btn_1TSjKlArHQvsxUThyULXPhFL",
      publishableKey:
        "pk_live_51TPqW8ArHQvsxUTh8lbtVwWkg8xP8gasXg8t7cihnODlKIggWndGqMxkPE4s2WeNZ4pJEPLKFk9MzHP09ybwbZov00UqWRj39t",
    },
  ];
  const collections = [
    {
      id: "1",
      name: "Inner Journey",
      artist: "Negin Bandar",
      description:
        "A collection of paintings that explore the inner landscapes of the mind and soul, delving into themes of self-discovery, transformation, and the human experience.",

      works: [
        {
          title: "Becoming",
          image: "/images/collections/inner-journey/becoming.jpg",
          medium: "Oil on Canvas",
          description:
            "A painting exploring the theme of transformation and self-discovery.",
          price: "Please contact for price",
          button: "Inquire",
        },
        {
          title: "Consciousness in Orbit",
          image: "/images/collections/inner-journey/consciousness-in-orbit.jpg",
          medium: "Oil on Canvas",
          description:
            "A painting exploring the theme of consciousness and its relationship to the cosmos.",
          price: "Please contact for price",
          button: "Inquire",
        },
        {
          title: "The Galaxy Within",
          image: "/images/collections/inner-journey/the-galaxy-within.jpeg",
          medium: "Oil on Canvas",
          description:
            "A painting exploring the theme of the universe and our place within it.",
          price: "Please contact for price",
          button: "Inquire",
        },
      ],
    },
    {
      id: "2",
      name: "Available for Sale",
      artist: "Negin Bandar",
      works: [
        {
          title: "Persian Calligraphy",
          image: "/images/collections/available/persian-calligraphy.jpeg",
          medium: "Oil on Canvas",
          description:
            "A painting that combines traditional Persian calligraphy with contemporary abstract forms.",
          price: "$400",
          button: "Purchase",
        },
      ],
    },
    {
      id: "3",
      name: "Commissioned Works",
      artist: "Negin Bandar",
      works: [
        {
          title: "Spring Vase",
          image: "/images/collections/custom/spring-vase.png",
          medium: "Oil on Canvas",
          price: "Sold",
          button: "Sold",
        },
        {
          title: "Notte d-Amore",
          image: "/images/collections/custom/notte-damore.jpeg",
          medium: "Oil on Canvas",
          price: "Sold",
          button: "Sold",
        },
      ],
    },
  ];
  return (
    <>
      <Router>
        <Provider>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage workshops={workshops} />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route
              path="/events"
              element={<EventsPage workshops={workshops} />}
            />
            <Route
              path="/events/:eventId"
              element={<EventDetailsPage workshops={workshops} />}
            />
            <Route path="/commission" element={<CommissionPage />} />
            <Route
              path="/collections"
              element={<CollectionsPage collections={collections} />}
            />
            <Route
              path="/collections/:collectionId"
              element={<CollectionDetailsPage collections={collections} />}
            />
          </Routes>

          <Footer />
        </Provider>
      </Router>
    </>
  );
}

export default App;
