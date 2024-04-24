import "./App.css";
import SignIn from "./Pages/SignIn";
import LandingPage from "./Pages/Landing_page";
import Navbar from "./components/maincomponent/Navbar";
import Footer from "./components/maincomponent/Footer";
import Homepage from "./components/maincomponent/Homepage.js";
import SignUp from "./Pages/SignUp/UserSignupPage.js";
import { Route, Routes } from "react-router-dom";
import UserSignUpPage from "./Pages/SignUp/UserSignupPage.js";
import ExpertSignUpPage from "./Pages/SignUp/ExpertSignUpPage.js";
import ErrorPage from "./components/maincomponent/ErrorPage.js";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/SignIn" Component={SignIn} />
        <Route path="/Landingpage" Component={LandingPage} />
        <Route path="/SignUp">
          <Route path="/SignUp/User" Component={UserSignUpPage} />
          <Route path="/SignUp/Expert" Component={ExpertSignUpPage} />
        </Route>
        <Route path="*" Component={ErrorPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
