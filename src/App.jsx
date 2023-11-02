import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddSector from "./pages/AddSector";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/dashboard" element={<Dashboard />} />
        <Route  path="/tasks/:sectorId" element={<Tasks />} />
        <Route  path="/add-sector" element={<AddSector />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
