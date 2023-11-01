import React, { useContext, useEffect } from "react";
import { Container, Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { SectorContext } from "../../api/Sector";
const CustomCard = () => {
  const { getOfficialSector, officialSectors } = useContext(SectorContext);
  useEffect(() => {
    getOfficialSector();
  }, []);
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h3 className="m-0 p-0">Offical Map Sectors </h3>
          <NavLink
            to="/add-sector"
            className="custom-btn add-sector-link bg-primary"
          >
            Add Sector
          </NavLink>
        </Card.Header>
        <Card.Body>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Duration</th>
                <th>Distance</th>
                <th>Location</th>
                <th>Tasks</th>
                <th>Difficulty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {officialSectors.length > 0 &&
                officialSectors.map((sector, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{sector.title}</td>
                    <td>{sector.duration} M</td>
                    <td>{sector.distance} Km</td>
                    <td>
                      {sector.location.latitude}, {sector.location.longitude}
                    </td>
                    <td>Tasks</td>
                    <td>{sector.difficulty}</td>
                    <td className="d-flex gap-4 align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={faEdit}
                        color="green"
                        className="icon"
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="icon"
                        color="#ff0004"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CustomCard;
