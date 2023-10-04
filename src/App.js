import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./screens/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <LandingPage />
      </div>
    </Router>
  );
}

export default App;
