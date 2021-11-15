// import Tripping from './Tripping'
import Map from './Map'
import Search from './Search'

import Filter from './Filter'
import Delay from './Delay'
import Weather from './Weather'
import News from './News'
import '../css/App.css';

function App() {
  return (

    <div className="container">
      <header>
      <News />
      <div className="logo">
      <img  src="/images/logo.png"  alt="logo" width="100" />
      <Weather />
      </div>
      </header>
      <div className= 'google-map'>
        <Map />
      </div>

      <aside className="search-delay-filter">
        <div className="sdf-windows">
        <Search />
        </div>
        <div className="sdf-windows">
        <Delay />
        </div>
        <div className="sdf-windows">
        <Filter />
        </div>
      </aside>
    </div>
  );
}

export default App;
