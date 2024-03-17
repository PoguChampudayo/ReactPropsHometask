import './App.css';
import { Stars } from './components/Stars/Stars';

function App() {
  const count = 2
  if ([1, 2, 3, 4, 5].includes(count)){
  return (
    <Stars count={count}/>
  );
  }
}

export default App;
