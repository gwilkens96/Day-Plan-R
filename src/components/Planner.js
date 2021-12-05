import React, { useState } from "react";
import Navigation from "./Navigation";
import Welcome from "./pages/Welcome";
import Hourly from "./pages/Hourly";
import Monthly from "./pages/Monthly";
import Horoscope from "./pages/Horoscope";
import Title from "./Header";
import Contact from "./Footer";

function Planner() {
  const [currentPage, setCurrentPage] = useState("Welcome");

  const renderPage = () => {
    if (currentPage === "Hourly") {
      return <Hourly />;
    }
    if (currentPage === "Monthly") {
      return <Monthly />;
    }
    if (currentPage === "Welcome") {
      return <Welcome />;
    }
    return <Horoscope />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Title></Title>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Contact></Contact>
    </div>
  );
}

export default Planner;
