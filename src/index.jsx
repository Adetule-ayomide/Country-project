import { Routes, Route } from "react-router-dom";
import App from "./App";
import DetailedCountry from "./component/detail/detailed";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/:countryName" element={<DetailedCountry />} />
    </Routes>
  );
}

export default Main;
