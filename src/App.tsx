import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import { PlaylistTable } from "./components/PlaylistTable";
import { Callback } from "./components/Callback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlaylistTable />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
