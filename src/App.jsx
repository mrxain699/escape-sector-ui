import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CommunitySectors from "./pages/CommunitySectors";
import Tasks from "./pages/Tasks";
import Quests from "./pages/Quests";
import AddSector from "./pages/AddSector";
import AddSectorTask from "./pages/AddSectorTask";
import AddSectorQuest from "./pages/AddSectorQuest";
import EditSector from "./pages/EditSector";
import EditTask from "./pages/EditTask";
import EditQuest from "./pages/EditQuest";
import { AuthContext } from "./api/Auth";
function App() {
  const { loginToken, isTokenExpired } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            loginToken && !isTokenExpired ? (
              <Navigate to="/dashboard" replace={true} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            loginToken && !isTokenExpired ? (
              <Dashboard />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/community-sector"
          element={
            loginToken && !isTokenExpired ? (
              <CommunitySectors />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/add-sector/:type"
          element={
            loginToken && !isTokenExpired ? (
              <AddSector />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/edit-sector/:sectorId"
          element={
            loginToken && !isTokenExpired ? (
              <EditSector />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/tasks/:sectorId"
          element={
            loginToken && !isTokenExpired ? (
              <Tasks />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/quests/:sectorId"
          element={
            loginToken && !isTokenExpired ? (
              <Quests />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/add-task/:sectorId"
          element={
            loginToken && !isTokenExpired ? (
              <AddSectorTask />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/add-quest/:sectorId"
          element={
            loginToken && !isTokenExpired ? (
              <AddSectorQuest />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/edit-task/:sectorId/:taskId"
          element={
            loginToken && !isTokenExpired ? (
              <EditTask />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
        <Route
          path="/edit-quest/:sectorId/:questId"
          element={
            loginToken && !isTokenExpired ? (
              <EditQuest />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
