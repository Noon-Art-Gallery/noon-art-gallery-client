import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
// import Example from "./components/Example/Example";
import { Provider } from "@/components/ui/provider";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Provider>
        {/* <Example /> */}
        <Navbar />
        <LandingPage />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
