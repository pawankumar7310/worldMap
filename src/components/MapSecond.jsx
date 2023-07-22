import React, { useEffect, useState, useRef, Children } from "react";
import Testcom from "./Testcom";
import MapThird from "./MapThird";

const MapSecond = () => {
  // debugger;
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState({});
  const countryRef = useRef(null);

  const searchCountryData = () => {
    try {
      let countryName = countryRef.current.value;
      countryName =
        countryName.charAt(0).toUpperCase() +
        countryName.slice(1).toLowerCase();
      setSelectedCountry(countryName);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("selectCountry---", selectedCountry);
  console.log("Country Data---", countryData);

  const resetData = () => {
    setSelectedCountry("");
    setCountryData({});
    countryRef.current.value = "";
  };

  useEffect(() => {
    try {
      if (selectedCountry) {
        fetch(
          `https://restcountries.com/v3.1/name/${selectedCountry}?fullText=true`
        )
          .then((response) => response.json())
          .then((data) => {
            setCountryData(data);
            console.log("response data:", data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, [selectedCountry]);

  return (
    <div
      className="d-flex justify-content-center align-items-center w-100  bg-light"
      style={{ height: "100vh" }}
    >
      <div
        className="container bg-info py-3"
        style={{
          border: "none",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">
          Please Enter Country Name With First Capital Letter
        </h1>
        <div className="form-group my-3">
          <input
            type="text"
            ref={countryRef}
            className="form-control"
            name="name"
          />
        </div>

        <button className="btn btn-primary me-2" onClick={searchCountryData}>
          Search
        </button>
        <button className="btn btn-danger " onClick={resetData}>
          Reset
        </button>
        <div className="row d-flex justify-content-between mt-2">
          <div className="col-lg-7 col-md-6">
            <MapThird selectedCountry={selectedCountry} />
          </div>
          <div className="col-lg-5 col-md-6">
            <h1 className="text-center">Country details</h1>

            {Object.keys(countryData).length > 0 ? (
              <Testcom countryData={countryData} />
            ) : (
              <h3 className="text-center pt-3 text-warning">No Data search</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSecond;
