import './App.css';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { AgencyServices } from './components/AgencyServices'

import data from './data.json';

import { DataContext } from './contexts/DataContext';
import { Work } from './components/Work';

function App() {

  return (
    <DataContext.Provider value={data}>
      <div className='main'>
        <Home />
        <Services />
        <Work />
        <AgencyServices />
      </div>
    </DataContext.Provider>
  );
}

export default App;
