import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CommunitySectors from "./pages/CommunitySectors";
import Tasks from "./pages/Tasks";
import AddSector from "./pages/AddSector";
import AddSectorTask from "./pages/AddSectorTask";
import EditSector from "./pages/EditSector";
import EditTask from "./pages/EditTask";
import { AuthContext } from "./api/Auth";
function App() {
  const { loginToken } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !loginToken ? (
              <Login />
            ) : (
              <Navigate to="/dashboard" replace={true} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            loginToken ? <Dashboard /> : <Navigate to="/" replace={true} />
          }
        />
        <Route
          path="/community-sector"
          element={
            loginToken ? (
              <CommunitySectors />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/add-sector/:official"
          element={
            loginToken ? <AddSector /> : <Navigate to="/" replace={true} />
          }
        />
        <Route
          path="/edit-sector/:sectorId"
          element={
            loginToken ? <EditSector /> : <Navigate to="/" replace={true} />
          }
        />
        <Route
          path="/tasks/:sectorId"
          element={loginToken ? <Tasks /> : <Navigate to="/" replace={true} />}
        />
        <Route
          path="/add-task/:sectorId"
          element={
            loginToken ? <AddSectorTask /> : <Navigate to="/" replace={true} />
          }
        />
        <Route
          path="/edit-task/:sectorId/:taskId"
          element={
            loginToken ? <EditTask /> : <Navigate to="/" replace={true} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
