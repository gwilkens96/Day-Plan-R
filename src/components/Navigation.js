import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#hourly"
          onClick={() => handlePageChange("Hourly")}
          className={currentPage === "Hourly" ? "nav-link active" : "nav-link"}
        >
          Hourly Schedule
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#monthly"
          onClick={() => handlePageChange("Monthly")}
          className={
            currentPage === "Monthly " ? "nav-link active" : "nav-link"
          }
        >
          Monthly Calendar
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#horoscope"
          onClick={() => handlePageChange("Horoscope")}
          className={
            currentPage === "Horoscope" ? "nav-link active" : "nav-link"
          }
        >
          Horoscope
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#welcome"
          onClick={() => handlePageChange("Welcome")}
          className={currentPage === "Welcome" ? "nav-link active" : "nav-link"}
        >
          Welcome
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
