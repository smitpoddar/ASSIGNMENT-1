import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [panNo, setPanNo] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const countries = [
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
  ];

  const cities = [
    { value: "Delhi", label: "Delhi" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Bangalore", label: "Bangalore" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const formData = {
        firstName,
        lastName,
        username,
        email,
        password,
        phoneNo,
        country,
        city,
        panNo,
        aadharNo,
      };
      navigate("/details", { state: formData });
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!firstName) {
      errors.firstName = "First Name is required";
    }
    if (!lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!username) {
      errors.username = "Username is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errors.email = "Invalid Email";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (!phoneNo) {
      errors.phoneNo = "Phone Number is required";
    }
    if (!country) {
      errors.country = "Country is required";
    }
    if (!city) {
      errors.city = "City is required";
    }
    if (!panNo) {
      errors.panNo = "PAN Number is required";
    }
    if (!aadharNo) {
      errors.aadharNo = "Aadhar Number is required";
    }
    return errors;
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="overflow-y-scroll h-lvh w-lvw flex flex-col  items-center justify-center  bg-blue-500">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 border-solid border-2 border-slate-700 p-3 rounded-3xl bg-white"
      >
        <h2 className="text-center font-serif font-bold text-2xl">
          Registration Form
        </h2>
        <div>
          <label className="mr-2">First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="rounded-lg outline-none border-2 border-neutral-800 pl-2"
          />
          {errors.firstName && (
            <div style={{ color: "red" }}>{errors.firstName}</div>
          )}
        </div>
        <div>
          <label className="mr-2">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="rounded-lg outline-none border-2 border-neutral-800 pl-2"
          />
          {errors.lastName && (
            <div style={{ color: "red" }}>{errors.lastName}</div>
          )}
        </div>
        <div>
          <label className="mr-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-lg outline-none border-2 border-neutral-800 pl-2"
          />
          {errors.username && (
            <div style={{ color: "red" }}>{errors.username}</div>
          )}
        </div>
        <div>
          <label className="mr-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg outline-none border-2 border-neutral-800 pl-2"
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        <div>
          <label className="mr-2">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg outline-none border-2 border-neutral-800 pl-2"
          />
          <button type="button" onClick={handleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>
        <div>
          <label className="mr-2">Phone Number:</label>
          <input
            type="tel"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            className="rounded-lg outline-none border-2 border-neutral-800 pl-2"
          />
          {errors.phoneNo && (
            <div style={{ color: "red" }}>{errors.phoneNo}</div>
          )}
        </div>
        <div>
          <label className="mr-2">Country:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {errors.country && (
            <div style={{ color: "red" }}>{errors.country}</div>
          )}
        </div>
        <div>
          <label className="mr-2">City:</label>
          <select
            className="mr-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
          {errors.city && <div style={{ color: "red" }}>{errors.city}</div>}
        </div>
        <div>
          <label className="mr-2">PAN Number:</label>
          <input
            type="text"
            value={panNo}
            onChange={(e) => setPanNo(e.target.value)}
            className="rounded-lg outline-none border-2 border-neutral-800 pl-2"
          />
          {errors.panNo && <div style={{ color: "red" }}>{errors.panNo}</div>}
        </div>
        <div>
          <label className="mr-2">Aadhar Number:</label>
          <input
            type="text"
            value={aadharNo}
            onChange={(e) => setAadharNo(e.target.value)}
            className="rounded-lg outline-none border-2 border-neutral-800 pl-2"
          />
          {errors.aadharNo && (
            <div style={{ color: "red" }}>{errors.aadharNo}</div>
          )}
        </div>
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className="bg-sky-500 p-1 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
