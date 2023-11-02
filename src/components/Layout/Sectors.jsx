import React, { useContext, useEffect, useState } from "react";
import { Container, Card, Table, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { SectorContext } from "../../api/Sector";
import AlertModal from "./AlertMOdal";
const Sectors = () => {
  const { getOfficialSector, officialSectors, deleteSector, alert } =
    useContext(SectorContext);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [sectorId, setSectorId] = useState(null);
  const onPressDelete = (id) => {
    setSectorId(id);
    setShowAlertModal(true);
  };
  const onPressCancel = () => setShowAlertModal(false);
  const onPressModalDelete = () => {
    deleteSector(sectorId);
    getOfficialSector();
    setShowAlertModal(false);
  };
  useEffect(() => {
    getOfficialSector();
  }, [officialSectors]);
  return (
    <Container className="mt-5">
      {alert && (
        <Alert variant={alert.status}>
          <p className="m-0 p-0">{alert.message}</p>
        </Alert>
      )}
      {showAlertModal && (
        <AlertModal
          show={showAlertModal}
          handleCancel={onPressCancel}
          handleDelete={onPressModalDelete}
        />
      )}

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
          <Table bordered responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Duration</th>
                <th>Distance</th>
                <th>Location</th>
                <th>Difficulty</th>
                <th>Tasks</th>
                <th>Edit</th>
                <th>Delete</th>
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
                    <td>{sector.difficulty}</td>
                    <td className="text-center">
                      {" "}
                      <NavLink
                        to={`/tasks/${sector._id}`}
                        className="btn bg-primary text-light"
                      >
                        Tasks
                      </NavLink>
                    </td>
                    <td className="d-flex gap-4 align-items-center justify-content-center">
                      <NavLink to="/" className="btn btn-success">
                        Edit
                      </NavLink>
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="icon"
                        color="#ff0004"
                        onClick={() => onPressDelete(sector._id)}
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

export default Sectors;