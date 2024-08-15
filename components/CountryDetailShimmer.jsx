import React from 'react'
import './CountryDetailShimmer.css'

export default function CountryDetailShimmer() {
  return (
    <main>
    <div className="country-details-container">
      <span className="back-button" onClick={() => history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="country-details detail-shimmer">
        <img  />
        <div className="details-text-container text-shimmer">
          <h1></h1>
          <div className="details-text text-shimmer">
            <p>
              
              <span className="native-name"></span>
            </p>
            <p>
              
              <span className="population"></span>
            </p>
            <p>
              
              <span className="region"></span>
            </p>
            <p>
              
              <span className="sub-region"></span>
            </p>
            <p>
              
              <span className="capital"></span>
            </p>
            <p>
             
              <span className="top-level-domain"></span>
            </p>
            <p>
              
              <span className="currencies"></span>
            </p>
            <p>
              
              <span className="languages"></span>
            </p>
          </div>
         <div className="border-countries">
           
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}
