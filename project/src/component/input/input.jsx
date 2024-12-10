import "./input.css";

function Input({inputValue, searchFn, selectFn }) { 
  return (
    <div className="search">
      <input
        type="search"
        placeholder="search for a country"
        className="searchInput"
        value={inputValue}
        onChange={searchFn}
      />
      <select name="filter" id="filter" onChange={selectFn}>
        <option value="Filter by Region">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
    </div>
  );
}

export default Input;
