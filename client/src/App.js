import React from "react";
import {
  BrowserRouter as Router, // instead of "Switch"
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/domain/Home";
import Help from "./pages/help/Help";
import Workers from "./pages/workers/Workers";
import Generals from "./styled-components/styles_generals";
import AboutMe from "./pages/about_me/AboutMe";
import Login from "./pages/Auth/login/domain/LoginPage";
import Footer from "./components/Footer/Footer";
import RegisterPage from "./pages/Auth/register/domain/RegisterPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
      <Generals />
    </Router>
  );
};

export default App;
