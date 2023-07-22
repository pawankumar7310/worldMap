import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const MapThird = ({ selectedCountry }) => {
  try {
  } catch (error) {}
  const getCountryColor = (geo) => {
    try {
      if (geo.properties.name === selectedCountry) {
        return "blue";
      }
      return "grey";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ComposableMap
        projection="geoMercator"
        height={500}
        style={{ border: "1px solid black" }}
        className="p-1"
      >
        <ZoomableGroup>
          <Geographies
            geography="/features.json"
            stroke="#000000"
            strokeWidth={0.5}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getCountryColor(geo)}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default MapThird;
