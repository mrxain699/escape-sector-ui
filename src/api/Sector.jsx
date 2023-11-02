import React, { createContext, useState } from "react";
import axios from "axios";
export const SectorContext = createContext();
const Sector = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const [officialSectors, setOfficialSectors] = useState([]);
  const [sectorTasks, setSectorTasks] = useState([]);
  const add_sector = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-sector`,
        {
          ...data,
        }
      );
      if (response) {
        setAlert(response.data);
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOfficialSector = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/official-sectors`
      );
      if (response) {
        setOfficialSectors(response.data.official_sectors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSectorTasks = async (sector_id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/tasks/${sector_id}`
      );
      if (response.data.status === "success") {
        setSectorTasks(response.data.sector_tasks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSector = async (sector_id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-sector/${sector_id}`
      );
      if (response.data.status === "success") {
        console.log(response.data.status);
        setAlert(response.data);
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    add_sector,
    alert,
    officialSectors,
    getOfficialSector,
    getSectorTasks,
    sectorTasks,
    deleteSector,
    setAlert,
  };
  return (
    <SectorContext.Provider value={value}>{children}</SectorContext.Provider>
  );
};

export default Sector;
