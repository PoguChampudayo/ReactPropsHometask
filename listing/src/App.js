import './App.css';
import { Listing } from './components/Listing/Listing';
import data from './components/data/items.json'

function App() {
  return (
    <Listing items={data}/>
  );
}

export default App;
