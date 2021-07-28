import React, { useState } from "react";
import { Country } from "./Country";

export function SearchBar({ countries }) {
  const [data, setData] = useState();
  const [word, setWord] = useState();

  const handleChange = ({ target }) => {
    setData(
      [...countries].filter(
        (country) =>
          country.region === target.value && target.value !== "Filter By Region"
      )
    );
  };

  const handleType = ({ target }) => {
    setWord(
      [...countries].filter((country) =>
        country.name.toLowerCase().includes(target.value.toLowerCase())
      )
    );
  };

  console.log(word);

  return (
    <>
      <section className="w-4/5 flex flex-row mx-auto my-8 justify-between flex-wrap">
        <div className="sm:mb-6">
          <label htmlFor="search"></label>
          <input
            onChange={handleType}
            className="p-3 shadow-md"
            type="text"
            id="search"
            placeholder="Search for a country..."
          />
        </div>

        <div>
          <form>
            <select
              onChange={handleChange}
              name="regions"
              className="p-3 bg-white shadow-md"
              defaultValue="Filter By Region"
            >
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </div>
      </section>

      <div className="flex flex-wrap w-11/12 md:container mx-auto flex-row">
        {countries && !data && !word
          ? countries.map((country, idx) => (
              <Country
                key={idx}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            ))
          : countries && data && !word
          ? countries
              .filter((country) => data.includes(country))
              .map((country, idx) => (
                <Country
                  key={idx}
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              ))
          : countries && data && word
          ? countries
              .filter((country) => data.includes(country))
              .filter((country) => word.includes(country))
              .map((country, idx) => (
                <Country
                  key={idx}
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              ))
          : countries && word
          ? countries
              .filter((country) => word.includes(country))
              .map((country, idx) => (
                <Country
                  key={idx}
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              ))
          : ""}
      </div>
    </>
  );
}
