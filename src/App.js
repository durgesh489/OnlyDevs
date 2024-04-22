import "./App.css";
import SignIn from "./Pages/SignIn";
import LandingPage from "./Pages/Landing_page";
import Navbar from "./components/maincomponent/Navbar";
import Footer from "./components/maincomponent/Footer";
import Homepage from "./components/maincomponent/Homepage.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" Component={Homepage}></Route>
        {/* <Route path="/" Component={SignInSide}></Route> */}
        <Route path="/SignIn" Component={SignIn}></Route>
        <Route path="/Landingpage" Component={LandingPage}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
