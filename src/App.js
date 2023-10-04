import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import 'Routes' and 'Route'
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import History from './components/History';
import WordDetails from './components/WordDetails';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/history" element={<History />} />
        <Route path="/word/:word" element={<WordDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

