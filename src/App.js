import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Nfl from "./Pages/NFL/Nfl";
import FullPage from "./Components/FullPage/FullPage";
import Nba from "./Pages/Nba/Nba";
import Mlb from "./Pages/Mlb/Mlb";
import Watch from "./Pages/Watch/Watch";
import About from "./Pages/About/About";
import Disclamire from "./Pages/About/Disclamire";
import TermsOfUse from "./Pages/About/TermsOfUse";
import Privacy from "./Pages/About/Privacy";
import Podcast from "./Pages/Podcast/Podcast";
import Loader from "./Components/Loader";
import Login from "./Components/Modal/Login";
import Signup from "./Components/Modal/Signup";

const App = () => {
  const [loading, setLoading] = useState(true);
  window.onload = () => {
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nfl" element={<Nfl />} />
            <Route path="/nba" element={<Nba />} />
            <Route path="mlb" element={<Mlb />} />
            <Route path="/:name" element={<FullPage />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/about" element={<About />} />
            <Route path="/disclaimer" element={<Disclamire />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
          <Login />
          <Signup />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
