import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Provider } from "@/components/ui/provider";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Provider>
        <Header />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
