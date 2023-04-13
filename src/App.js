import './App.css';
import { Home } from './components/Home';
import { Services } from './components/Services';

import data from './data.json';

import { DataContext } from './contexts/DataContext';
import { Work } from './components/Work';

function App() {

  return (
    <DataContext.Provider value={data}>
      <body>
        <Home />
        <Services />
        <Work />
      </body>
    </DataContext.Provider>
  );
}

export default App;
