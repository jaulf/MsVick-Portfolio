import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <div>
      <Router>
        {/* Navbar can Go Here */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
