import logo from './logo.svg';
import './App.css';
import MainHomePage from './HomePage/MainHomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from './HomePage/MainHeader';

function App() {
  return (
    <>
    <MainHeader></MainHeader>
    <Router>
    <Routes>
      <Route path="" element={<MainHomePage></MainHomePage>} />
    </Routes>
    </Router>
    </>

  );
}

export default App;
