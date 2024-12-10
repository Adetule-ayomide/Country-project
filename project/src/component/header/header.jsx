import { useEffect, useState } from 'react';
import './header.css'


function Header() {
  const [dark, setDark] = useState(false);
  const myTheme = document.querySelector("#root");

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    savedTheme && setDark(JSON.parse(savedTheme));
  }, [])

  useEffect(() =>{
    localStorage.setItem('theme', JSON.stringify(dark));
    dark ? myTheme.classList.add('theme') : myTheme.classList.remove('theme')
  }, [dark])
  
  const handleToggle = () =>{
    setDark(!dark)
  }
  
  return (
    <div className="header">
      <h3>Where in the world?</h3>
      <div className="themeContainer">
        {dark ? (
          <img src="/moon.png" alt="" onClick={handleToggle} />
        ) : (
          <img src="/sun.png" alt="" onClick={handleToggle} />
        )}
        <h5>{dark ? "Dark mode" : "Light mode"}</h5>
      </div>
    </div>
  );
}

export default Header