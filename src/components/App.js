import Tripping from './Tripping'
import Map from './Map'
import Search from './Search'
import Filter from './Filter'
import Delay from './Delay'

import '../css/App.css';

function App() {
  return (

    <div className="container">
      

      <div className= 'google-map'>
        <Map />
      </div>

      <aside className="search-delay-filter">
        <Search />
        <Delay />
        <Filter />
      </aside>
    </div>
  );
}

export default App;
