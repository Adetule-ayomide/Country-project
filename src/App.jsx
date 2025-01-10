import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./component/header/header";
import Input from "./component/input/input";
import Card from "./component/card/card";
import "./App.css";

function App() {
  const [details, setCardDetails] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterCountry, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      setCardDetails(data);
      setFilter(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching data", err);
      setLoading(false);
    });
  }, []);

  const inputSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    const searchedCountry = details.filter((item) => 
      item.name.toLowerCase().includes(searchTerm)
    );

    setFilter(searchedCountry);
  };

  const filterByRegion = (e) => {
    const myRegion = e.target.value.toLowerCase();
    const region = details.filter((filterRegion) => filterRegion.region.toLowerCase() == myRegion);
    region.length == 0 ? setFilter(details) : setFilter(region);
    console.log(region)
  }

  const go = (countryName) => {
    navigate(`/${countryName}`);
  };

  return (
    <section>
      <Header />
      <Input
        searchFn={inputSearch}
        inputValue={search}
        selectFn={filterByRegion}
        placeholder="Search for a country..."
      />
      {loading ? (
        <h2 className="loading">. . .</h2>
      ) : filterCountry.length > 0 ? (
        <div className="cardsWrapper">
          {filterCountry.map((data) => (
            <div key={data.name} onClick={() => go((data.name))}>
              <Card
                flag={data.flag}
                name={data.name}
                population={data.population}
                region={data.region}
                capital={data.capital}
              />
            </div>
          ))}
        </div>
      ) : (
        <h2 className="loading">No countries found</h2>
      )}
    </section>
  );
}

export default App;