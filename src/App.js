import './App.css';
import Home from './modules/home';
import { Routes, Route } from 'react-router-dom';
import Seller from './modules/seller';
import Buyer from './modules/buyer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="seller" element={<Seller />} />
        <Route path="buyer" element={<Buyer />} />
      </Routes>
    </div>
  );
}

export default App;
