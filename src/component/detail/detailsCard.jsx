import "./detailed.css";

function DetailsWrapper({
  flag,
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevel,
  currencies,
  languages,
  border,
}) {
  return (
    <div className="detailsWrapper">
      <div className="detailsFlag">
        <img src={flag} alt={name} />
      </div>

      <div className="detailsContainer">
        <div className="sec1">
          <h2>{name}</h2>
        </div>
        <div className="sec2">
          <div className="subSec2">
            <p>
              <b>native name: </b>
              {nativeName}
            </p>
            <p>
              <b>population: </b>
              {population}
            </p>
            <p>
              <b>region: </b>
              {region}
            </p>
            <p>
              <b>sub region: </b>
              {subRegion}
            </p>
            <p>
              <b>capital: </b>
              {capital}
            </p>
          </div>
          <div className="detailsSec2">
            <p>
              <b>top level domain: </b>
              {topLevel}
            </p>
            <p>
              <b>currencies: </b>
              {currencies}
            </p>
            <p>
              <b>languagues: </b>
              {languages}
            </p>
          </div>
        </div>
        <div className="sec3">
          <span className="borders">
            <b>border country: </b>
            {border}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetailsWrapper;
