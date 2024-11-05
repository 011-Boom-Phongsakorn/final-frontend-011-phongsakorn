import React from "react";
import "./App.css";
import Header from "./components/Header";
import FeaturedBox from "./components/FeaturedBox";
import Card from "./components/Card";
import AboutBox from "./components/AboutBox";
import Popular from "./components/Popular";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <Card />
          <AboutBox />
          <Popular />
          <Review />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
