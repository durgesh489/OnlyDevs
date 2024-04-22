import "./App.css";
import SignInSide from "./Pages/SignIn";
import LandingPage from "./Pages/Landing_page";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={SignInSide}></Route>
        <Route path="/Landingpage" Component={LandingPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
