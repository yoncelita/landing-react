import './App.css';
import { Home } from './components/Home';

import data from './data.json';

import { DataContext } from './contexts/DataContext';

function App() {

  return (
    <DataContext.Provider value={data}>
      <Home />
    </DataContext.Provider>
  );
}

export default App;
