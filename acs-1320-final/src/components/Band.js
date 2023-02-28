import React from "react";
import './Band.css'
import Like from './Like'

function Band(props) {
  function totalFans() {
    const fans = props.band.fans;
    const multiplyFans = fans * 1000;
    return multiplyFans.toLocaleString("en");
  }
  const band = props.band;
  const bandStyles = band.style.split(',');
  const bandStylesList = bandStyles.map(style => (
    <li key={style}>{style}</li>
  ));
  return (
    <div className="Band">
      <h3>{band.band_name}</h3>
      <p><span>Origin:</span> {band.origin} 
      <span>Fans:</span> {totalFans()} 
      <span>Formed:</span> {band.formed} 
      <span>Split:</span>{band.split}</p>
      <p>{band.style}</p>
      <ul>{bandStylesList}</ul>
      {band.split === '-' ? <Like /> : null}
    </div>
  );
}

export default Band;