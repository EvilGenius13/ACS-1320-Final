import React from "react";
import './MetalMeta.css'
import data from '../metal.json'


function MetalMeta() {
  const totalBands = data.length
  let totalFans = 0
  for (let band in data) {
    totalFans += data[band].fans
  }
  totalFans = totalFans * 1000
  const totalSyles = data.map(band => band.style).filter((style, index, array) => array.indexOf(style) === index).length

  return (
    <div className="MetalMeta">
      <h4>Metal Bands 🤘</h4>
      <p>Bands: {totalBands}</p>
      <p>Styles: {totalSyles}</p>
      <p>Total Fans: {totalFans.toLocaleString('en')}</p>
    </div>
  );
}

export default MetalMeta;