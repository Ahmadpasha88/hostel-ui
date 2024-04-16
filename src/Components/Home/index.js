import React, { useState } from "react";
import Hostel from "../Hostel";
import { useEffect } from "react";


import { FaArrowCircleRight } from "react-icons/fa";

import { TbHomeSearch } from "react-icons/tb";
import "./index.css";
import Footer from "../Footer";

import "aos/dist/aos.css";
import RawData from "../RAW";
import { Link } from "react-router-dom";


const Home = () => {
  const points = [
    "ManaHostel Helps Us To Find Best Hostel/Pg With Zero Efforts.",
    "Travel smarter, stay better. Let us help you find the ideal hostel for your journey.",
    "Explore the globe, one hostel at a time. Your next adventure starts with us.",
    // Add more points as needed
  ];

  const [currentPointIndex, setCurrentPointIndex] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < points[currentPointIndex].length) {
        setText(
          (prevText) => prevText + points[currentPointIndex].charAt(index)
        );
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          setIndex(0);
          setCurrentPointIndex((prevIndex) => (prevIndex + 1) % points.length);
        }, 800); // Change the delay between points as needed
      }
    }, 40); // Change the delay between characters as needed

    return () => clearInterval(interval);
  }, [currentPointIndex, index, points]);

  useEffect(() => {
      window.scrollTo(0, 0);
  },[]);

  return (
    <div className="row m-0 p-0 homeScreen">
      <section className="pt-1 pt-lg-5" data-aos="zoom-out-down">
        <div className="text-center col-11 col-lg-7 m-auto text-wrap highlight-lines fs-5 fw-medium my-5 py-5 points-container slide-up">
          <p id="hey" className="animated-text slide-up text-wrap" style={{color:"#081735"}}>
            {text}
          </p>
        </div>

        <div className="row m-1 col-11 col-md-8 col-lg-6 m-auto mt-5 mb-2 mb-lg-5 py-3 gap-2">
          <input
            type="search"
            placeholder="Search by Hostel, Area, City, Pincode ..."
            className="col-10 col-lg-7 m-auto rounded-3 p-3"
          />
          <select className="col-10 col-lg-3 m-auto rounded-3 p-3 bg-white">
            <option value="">All</option>
            <option value="">Men's Hostels</option>
            <option value="">Womens Hostels</option>
            <option value="">Others Hostels</option>
          </select>
        </div>
        <div className="d-flex justify-content-center mb-5 p-0 py-2">
          <button
            type="button"
            className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-3 col-5 col-lg-2 m-auto border border-3 border-white rounded-5  d-flex justify-content-center gap-2 align-items-center"
            style={{ backgroundColor: "#081735" }}
          >
            <TbHomeSearch className="fs-3" /> Search
          </button>
        </div>

        <div className="text-center  fs-5 fw-medium mt-5" >
          <p className="highlight-lines" style={{color: "#081735"}}>Discover, Compare, Stay Smart</p>
        </div>
      </section>
      <section
        className="d-flex flex-column justify-content-center align-items-center mt-0"
        style={{ height: "80vh", width: "100vw" }}
      >
        <h3 className="text-center mb-5 fw-medium highlight-lines" style={{color: "#081735"}}>
        Locations we are Present
        </h3>

        <div
          className="col-10 col-md-5 col-lg-3 bg-white rounded-3 shadow-lg border p-3"
          data-aos="zoom-in"
        >
          <img
            src="https://th.bing.com/th/id/OIP.LjwbfZrvkVpW0xzjTxrvygHaE7?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            className="w-100"
          />
          <p className="text-center text-dark-emphasis m-0 fs-3 p-0 highlight-lines">Hyderabad</p>
          <p className="p-0 ps-2 m-0">Hostels: 800</p>
          <p className="text-end p-0 me-3 m-0 pb-3 fs-3">
            {" "}
            <FaArrowCircleRight />
          </p>
        </div>
      </section>
      <section>
        <h3 className="text-center highlight-lines mb-5 fw-medium" style={{color: "#081735"}}>
          Recently Added Hostels
        </h3>

        <div className="row col-11 gap-2 gap-lg-1 col-md-8 col-lg-6 text-center m-auto mb-5 text-dark">
          <p className="fw-bold text-center mb-0 mb-lg-1">
            Search by category wise
          </p>
          <button className="col-9 col-lg-3 m-auto btn btn-outline-dark fw-semibold">
            All
          </button>
          <button className="col-9 col-lg-3 m-auto btn  btn-outline-dark  fw-semibold">
            Men's Hostel
          </button>
          <button className="col-9 col-lg-3 m-auto btn btn-outline-dark fw-semibold">
            Women's Hostel
          </button>
        </div>
        <Link to="/details" style={{ textDecoration: "none" }}>
          <div data-aos="zoom-in">
            <Hostel />
          </div>
        </Link>

        <div className="text-center my-4">
          <Link to='/hostelList'>
          <button
            type="button"
            className="text-white btn fw-semibold"
            style={{ backgroundColor: "#081735" }}
          >
            Explore more <FaArrowCircleRight />
          </button>
          </Link>
        
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Home;
