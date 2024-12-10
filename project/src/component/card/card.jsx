import './card.css'

function Information({ name, population, region, capital }) {
    return (
      <>
        <h3>{name}</h3>
        <div>
            <p><b>population:</b> {population}</p>
            <p><b>region:</b> {region}</p>
            <p><b>capital:</b> {capital}</p>
        </div>
      </>
    );
}

function Card({ flag, name, population, region, capital }) {
  return (
    <div className="cardContainer">
      <div className="cardFlag">
        <img src={flag} alt={name} className="flag" />
      </div>
      <div className="cardInfo">
        <Information
          name={name}
          population={population}
          region={region}
          capital={capital}
        />
      </div>
    </div>
  );
}
export default Card