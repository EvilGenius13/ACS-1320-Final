import './App.css';
import Heading from './components/Heading';
import MetalMeta from './components/MetalMeta';
import Band from './components/Band';
import data from './metal.json'
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [band, setBand] = useState('');
  const list = data.map(band => (
    <Band key={band.ID} band={band} />
  ));
  function search() {
    const input = query.toUpperCase();
    console.log(input);
    const band = data.filter(band => band.band_name.toUpperCase().includes(input));
    setBand(band);
    console.log(band);
  }
  function refreshPage() {
    window.location.reload(false);
  }
  if (band !== '') {
    return (
      <div className="App">
        <input type="text" placeholder="Search"
          onChange={e => setQuery(e.target.value)} value={query} />
        <button className='heading-button' onClick={search}>Search</button>
        <button className='heading-button' onClick={refreshPage}>Reset</button>
        <Heading />
        <MetalMeta />
        <div className='single-band'>
          <h3>You searched for: {query}</h3>
          <Band band={band[0]} />
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <input type="text" placeholder="Search"
        onChange={e => setQuery(e.target.value)} value={query} />
      <button className='heading-button' onClick={search}>Search</button>
      <button className='heading-button' onClick={refreshPage}>Reset</button>
      <Heading />
      <MetalMeta />
      <div className='band-list'>
        {list}
      </div>
    </div>
  );
}
export default App;
