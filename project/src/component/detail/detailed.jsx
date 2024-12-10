import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../header/header";
import DetailsWrapper from "./detailsCard";

function DetailedCountry() {
  const countryName = useParams();
  const [fullDetails, setFullDetails] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const allData = data;
        const selectedCountry = data.find((country) => {
          if (country.name == countryName.countryName) {
            return country;
          }
        });
        setData(allData);
        selectedCountry && setFullDetails(selectedCountry);
        console.log("Fetched data:....", data);
      })
      .catch((err) => console.error("Error fetching data", err));
  }, [countryName]);

  // const countryBorder = () => {
  //   const findBorder = [];
  //   const borderCode = fullDetails?.borders;
  //   for(let i = 0; i < data?.length; i++){
  //     for(let j = 0; j < borderCode?.length; j++){
  //       if(data[i].alpha3Code == borderCode[j]){
  //         findBorder.push(data[i].name)
  //       }
  //     }
  //   };
  //   console.log(borderCode);
  //   return(findBorder)
  // };
  // console.log(countryBorder());

  let myBorder;
  const countryBorder = () => {
    const borderFullName = fullDetails?.borders;

    myBorder = data
      ?.filter((country) => borderFullName?.includes(country?.alpha3Code))
      .map((country) => country?.name);

    console.log(borderFullName);

    return myBorder;
  };

  console.log(myBorder);
  console.log(countryBorder());

  if (!fullDetails) {
    return <h2 className="loadingDetails">Loading country details...</h2>;
  }

  const goBack = () => navigate("/")

  return (
    <div>
      <Header text="Dark Mode" />
      <div>
        <button className="backBtn" onClick={goBack}>Back</button>
      </div>
      <div>
        <DetailsWrapper
          flag={fullDetails.flag}
          name={fullDetails.name}
          nativeName={fullDetails.nativeName}
          population={fullDetails.population}
          region={fullDetails.region}
          capital={fullDetails.capital}
          topLevel={fullDetails.topLevelDomain}
          currencies={
            fullDetails.currencies ? fullDetails.currencies[0].code : "null"
          }
          subRegion={fullDetails.subregion}
          languages={fullDetails.languages.map((lang, i) =>
            i == fullDetails.languages.length - 1 ? lang.name : lang.name + ", "
          )}
          border={myBorder.map((e, i) => (
            <p key={i} className="border">
              {e}
            </p>
          ))}
        />
      </div>
    </div>
  );
}

export default DetailedCountry;
