import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="border p-6 rounded bg-white">
        <h2 className="text-2xl font-bold mb-4">Submitted Data</h2>
        <p>First Name: {state.firstName}</p>
        <p>Last Name: {state.lastName}</p>
        <p>Username: {state.username}</p>
        <p>Email: {state.email}</p>
        <p>Password: {state.password}</p>
        <p>Phone Number: {state.phoneNo}</p>
        <p>Country: {state.country}</p>
        <p>City: {state.city}</p>
        <p>PAN Number: {state.panNo}</p>
        <p>Aadhar Number: {state.aadharNo}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Back to Form
        </button>
      </div>
    </div>
  );
};

export default Details;
