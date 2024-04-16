import React, { useEffect } from "react";
import Footer from "../Footer";

import { TbHomeSearch } from "react-icons/tb";
import Filters from "../Filters";
import "./index.css";
import Hostel from "../Hostel";
import PaginationFun from "../Pagination";

const ListOfHostels = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="m-0 p-0 h-100">
   
        <div className="row m-1 col-11 col-md-8 col-lg-6 m-auto mt-5 mb-2 mb-lg-5 py-2 gap-2">
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
        <div className="d-flex justify-content-center mb-3 p-0 py-1">
          <button
            type="button"
            className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-3 col-5 col-lg-2 m-auto border border-3 border-white rounded-5  d-flex justify-content-center gap-2 align-items-center"
            style={{ backgroundColor: "#081735" }}
          >
            <TbHomeSearch className="fs-3" /> Search
          </button>
        </div>
   

      <div className="row p-1 flex-wrap m-auto p-5  col-11 col-lg-10 rounded-3">
        <Filters />
      </div>
      <div className="row col-11 col-lg-10 m-auto mb-5 py-3  rounded-3">
        <Hostel />

        <div className="p-0 m-0 d-flex justify-content-center m-auto mt-5 mb-3 ">
          <PaginationFun className='p-0 m-0' />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListOfHostels;
