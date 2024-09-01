import React from "react";
import "./notFound.css"; ;
import { Link } from "react-router-dom";

const NotFound = () => {
  console.log("NotFound component rendered");
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center vh-100 bg_img"
    >
      <div className="bg-dark bg-opacity-75 p-5 rounded">
        <Link to="/" className="btn btn-danger btn-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;