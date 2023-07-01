import React, { useState } from "react";

const api = {
  key: "bf08ada48295eada7763b2cd2b880256",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  return (
    <div className="app">
      <main>

        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        
        <div>
          <div className="location-box">
            <div className="location">New York City, US</div>
            <div className="date">{ dateBuilder(new Date()) }</div>
          </div>
        </div>

      </main>
    </div>
  );

}

export default App;