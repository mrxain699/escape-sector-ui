import React, { createContext, useState } from "react";
import axios from "axios";
export const SectorContext = createContext();
const Sector = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const [officialSectors, setOfficialSectors] = useState([]);
  const add_sector = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-sector`,
        {
          ...data,
        }
      );
      if (response) {
        setAlert({
          variant: response.data.status,
          message: response.data.message,
        });
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

  const value = { add_sector, alert, officialSectors, getOfficialSector };
  return (
    <SectorContext.Provider value={value}>{children}</SectorContext.Provider>
  );
};

export default Sector;
