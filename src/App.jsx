import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CommunitySectors from "./pages/CommunitySectors";
import Tasks from "./pages/Tasks";
import AddSector from "./pages/AddSector";
import AddSectorTask from "./pages/AddSectorTask";
import EditSector from "./pages/EditSector";
import EditTask from "./pages/EditTask";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const get_token = localStorage.getItem("token");
    if (get_token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <Login />
            ) : (
              <Navigate to="/dashboard" replace={true} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Navigate to="/" replace={true} />
          }
        />
        <Route
          path="/community-sector"
          element={
            isLoggedIn ? (
              <CommunitySectors />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/add-sector/:official"
          element={
            isLoggedIn ? <AddSector /> : <Navigate to="/" replace={true} />
          }
        />
        <Route
          path="/edit-sector/:sectorId"
          element={
            isLoggedIn ? <EditSector /> : <Navigate to="/" replace={true} />
          }
        />
        <Route
          path="/tasks/:sectorId"
          element={isLoggedIn ? <Tasks /> : <Navigate to="/" replace={true} />}
        />
        <Route
          path="/add-task/:sectorId"
          element={
            isLoggedIn ? <AddSectorTask /> : <Navigate to="/" replace={true} />
          }
        />
        <Route
          path="/edit-task/:sectorId/:taskId"
          element={
            isLoggedIn ? <EditTask /> : <Navigate to="/" replace={true} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
