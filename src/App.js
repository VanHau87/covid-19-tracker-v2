import { useState, useEffect } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./App.css";
import InfoBox from "./InfoBox";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const handleChange = (e) => setCountry(e.target.value);
  useEffect(() => {
    //async => send a request, wait for it, do something
    const fetchCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((res) => res.map(({ country }) => country))
        .then((res) => setCountries(res));
    };
    fetchCountries();
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app_dropdown" variant="outlined">
          <Select value={country} variant="outlined" onChange={handleChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country, idx) => (
              <MenuItem value={country} key={idx}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" />
        <InfoBox title="Recovered" />
        <InfoBox title="Deaths" />
      </div>
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}

export default App;
