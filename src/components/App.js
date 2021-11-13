import Tripping from './Tripping'
import Map from './Map'
import Search from './Search'
import Filter from './Filter'
import Delay from './Delay'

import '../css/App.css';

function App() {
  return (

    <div className="container">
      <header>
      <h1>Tripping</h1>
      </header>
      <Tripping />
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
