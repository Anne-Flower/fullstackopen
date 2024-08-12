import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const handleSearch = (event) => {
    setSearchCountries(event.target.value);
  };
  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountries.toLowerCase())
  );

  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleSelectedCountryDetails = (country) => {
    setSelectedCountry(country)
  }

  useEffect(() => {
    console.log("effect");
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log("promise fulfilled");
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log("render", countries.length, "country");
  return (
    <div>
      find countries :{" "}
      <input
        type="text"
        placeholder="write here"
        value={searchCountries}
        onChange={handleSearch}
      ></input>
      <ul>
      {countriesToShow.length === 1 ? (
        <div>
          <h3>{countriesToShow[0].name.common}</h3>
          <p>Capital: {countriesToShow[0].capital}</p>
          <p>Area: {countriesToShow[0].area}</p>
          <p>Flag: {countriesToShow[0].flag}</p>

        </div>
      ) : countriesToShow.length > 10 ? (
        <p>Too many matches</p>
      ) : (
        countriesToShow.map((country) => (
          <li key={country.cca3}>{country.name.common} <button onClick={() => handleSelectedCountryDetails(country)}>show</button></li>
        ))
      )}
    </ul>
    {selectedCountry && (
  <div>
    <h3>{selectedCountry.name.common}</h3>
    <p>Capital: {selectedCountry.capital[0]}</p>
    <p>Area: {selectedCountry.area}</p>
    <p>Flag: {selectedCountry.flag}</p>
  </div>
)}
    </div>
  );
}

export default App;
