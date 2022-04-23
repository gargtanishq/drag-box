import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import PageTwo from './Components/PageTwo';

function App() {
  const [fromDiffPage, setFromDiffPage] = useState(false);

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route
            path='/' exact
            element={<Home fromDiffPage={fromDiffPage}
              setFromDiffPage={setFromDiffPage} />}
          />
          <Route
            path='/PageTwo' exact
            element={<PageTwo
              setFromDiffPage={setFromDiffPage} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
