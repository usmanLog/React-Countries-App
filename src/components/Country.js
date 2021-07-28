import React from "react";

export function Country({ flag, name, region, population, capital }) {
  return (
    <div className="w-64 sm:w-11/12 sm:h-auto sm:mx-auto h-80 m-6 rounded-md overflow-hidden bg-white shadow-md">
      <div className="w-full h-1/2">
        <img className="w-full h-full" src={flag} alt={name} />
      </div>
      <div className="ml-3 mt-6">
        <p className="mb-3 text-base text-semibold">{name}</p>
        <small>
          <strong>Population:</strong>{" "}
          {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </small>
        <br />

        <small>
          <strong>Region:</strong> {region}
        </small>
        <br />
        <small>
          <strong>Capital:</strong> {capital}
        </small>
      </div>
    </div>
  );
}
