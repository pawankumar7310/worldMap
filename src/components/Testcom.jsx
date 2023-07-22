import React from "react";

const Testcom = ({ countryData }) => {
  return (
    <>
      <h2 className="text-center">{countryData[0]?.name?.common}</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ width: "300px" }}>
          <img src={`${countryData[0]?.flags.png}`} alt="flag" width="100%" />
        </div>
      </div>

      <div className="d-flex justify-content-around m-o">
        <p className="fw-bold m-0">Capital</p>
        <p className="m-0">{countryData[0]?.capital[0]}</p>
      </div>

      <div className="d-flex justify-content-around">
        <p className="fw-bold m-0">Currency</p>
        <div className="d-flex me-2">
          <p className="m-0">{countryData[0]?.currencies?.INR?.symbol}</p>
          <p className="m-0">{countryData[0]?.currencies?.INR?.name}</p>
        </div>
      </div>

      <div className="d-flex justify-content-around">
        <p className="fw-bold m-0">Population</p>
        <p className="m-0">{countryData[0]?.population}</p>
      </div>

      <div className="d-flex justify-content-around">
        <p className="fw-bold m-0">language</p>
        <p className="m-0">
          {Object.values(countryData[0]?.languages)
            .toString()
            .split(",")
            .join(", ")}
        </p>
      </div>

      <div className="d-flex justify-content-around">
        <p className="fw-bold m-0">Area</p>
        <p className="m-0">{countryData[0]?.area}</p>
      </div>

      <div className="d-flex justify-content-around">
        <p className="fw-bold m-0">Region</p>
        <p className="m-0">{countryData[0]?.region}</p>
      </div>
    </>
  );
};

export default Testcom;
