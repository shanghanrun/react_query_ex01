
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import Home from './page/Home';
import Query from './page/Query';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/query" element={<Query />}></Route>
      </Routes>
    </div>
  );
}

export default App;
