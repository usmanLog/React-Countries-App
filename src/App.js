import React, { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { SearchBar } from "./components/SearchBar";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      const data = res.data;
      setCountries(data);
    });
  }, []);

  return (
    <section className="w-full min-h-screen h-auto bg-gray-100">
      <header>
        <Nav />
      </header>
      <SearchBar countries={countries} />
    </section>
  );
}

export default App;
