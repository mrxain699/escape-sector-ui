import React, { createContext, useState } from "react";
import axios from "axios";
export const SectorContext = createContext();
const Sector = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const [sectors, setSectors] = useState([]);
  const [sectorTasks, setSectorTasks] = useState([]);
  const [sector, setSector] = useState(null);
  const [task, setTask] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const getSectorById = async (sector_id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/sector/${sector_id}`
      );
      if (response.data.status === "success") {
        setSector(response.data.sector);
      } else {
        setAlert({
          status: "danger",
          message: response.data.message,
        });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      setAlert({
        status: "danger",
        message: "Unable to get sector",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const getSectorTaskById = async (sector_id, task_id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/sector/${sector_id}/${task_id}`
      );
      if (response.data.status === "success") {
        setTask(response.data.task);
      } else {
        setAlert({
          status: "danger",
          message: response.data.message,
        });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      setAlert({
        status: "danger",
        message: "Unable to get sector task",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const getSectors = async (official) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/sectors/${official}`
      );
      if (response.data.status === "success") {
        setIsLoading(false);
        setSectors(response.data.sectors);
      } else {
        setIsLoading(false);
        setAlert({
          status: "danger",
          message: response.data.message,
        });
        setTimeout(() => setAlert(null), 3000);
        setSectors([]);
      }
    } catch (error) {
      setIsLoading(false);
      setAlert({
        status: "danger",
        message: "Unable to get sectors",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const add_sector = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-sector`,
        {
          ...data,
        }
      );
      if (response.data.status === "success") {
        setAlert(response.data);
        setTimeout(() => setAlert(null), 3000);
      } else {
        setAlert({
          status: "danger",
          message: response.data.message,
        });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      setAlert({
        status: "danger",
        message: "Unable to add sector",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const update_sector = async (sector_id, data) => {
    const updated_data = {
      ...data,
      location: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
      id: sector_id,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/update-sector`,
        {
          ...updated_data,
        }
      );
      if (response.data.status === "success") {
        setAlert(response.data);
        setSector(null);
        setTimeout(() => setAlert(null), 3000);
      } else {
        setAlert({
          status: "danger",
          message: response.data.message,
        });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      setAlert({
        status: "danger",
        message: "Unable to update sector",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const add_task = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-task`,
        {
          ...data,
        }
      );
      if (response.data.status === "success") {
        setAlert(response.data);
        setTimeout(() => setAlert(null), 3000);
      } else {
        setAlert({
          status: "danger",
          message: response.data.message,
        });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      setAlert({
        status: "danger",
        message: "Unable to add task",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const update_task = async (sector_id, task_id, data) => {
    const updated_data = {
      ...data,
      location: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
      hints: data.hints.split("\n"),
      sector_id: sector_id,
      task_id: task_id,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/update-task`,
        {
          ...updated_data,
        }
      );
      if (response.data.status === "success") {
        setAlert(response.data);
        setTask(null);
        setTimeout(() => setAlert(null), 3000);
      } else {
        setAlert({
          status: "danger",
          message: response.data.message,
        });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      setAlert({
        status: "danger",
        message: "Unable to update task",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const getSectorTasks = async (sector_id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/tasks/${sector_id}`
      );
      if (response.data.status === "success") {
        setSectorTasks(response.data.sector_tasks);
      } else {
        setAlert({
          status: "danger",
          message: response.data.message,
        });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      setAlert({
        status: "danger",
        message: "Unable to get sector tasks",
      });
      setTimeout(() => setAlert(null), 3000);
      setSectorTasks([]);
    }
  };

  const deleteSector = async (sector_id, official) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-sector/${sector_id}`
      );
      if (response.data.status === "success") {
        getSectors(official);
        setAlert(response.data);
        setTimeout(() => setAlert(null), 3000);
      } else {
        setAlert({
          status: "danger",
          message: response.data.message,
        });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      setAlert({
        status: "danger",
        message: "Unable to delete sector",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const deleteTask = async (sector_id, task_id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-task/${sector_id}/${task_id}`
      );
      if (response.data.status === "success") {
        getSectorTasks(sector_id);
        setAlert(response.data);
        setTimeout(() => setAlert(null), 3000);
      } else if (response.data.status === "failed") {
        setAlert({
          status: "danger",
          message: response.data.message,
        });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      setAlert({
        status: "danger",
        message: "Unable to delete task",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const value = {
    add_sector,
    alert,
    sectors,
    getSectors,
    getSectorTasks,
    sectorTasks,
    deleteSector,
    setAlert,
    deleteTask,
    getSectorById,
    sector,
    update_sector,
    getSectorTaskById,
    task,
    update_task,
    add_task,
    loading,
  };
  return (
    <SectorContext.Provider value={value}>{children}</SectorContext.Provider>
  );
};

export default Sector;
