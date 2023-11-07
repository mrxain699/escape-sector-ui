import React, { useContext, useEffect, useState } from "react";
import { Container, Card, Table, Alert, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { SectorContext } from "../../api/Sector";
import AlertModal from "./AlertModal";
const Sectors = ({ type, official }) => {
  const { getSectors, sectors, deleteSector, alert, loading } =
    useContext(SectorContext);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [sectorId, setSectorId] = useState(null);
  const [fetchSector, setFetchSector] = useState(true);
  const onPressDelete = (id) => {
    setSectorId(id);
    setShowAlertModal(true);
  };
  const onPressCancel = () => setShowAlertModal(false);
  const onPressModalDelete = () => {
    deleteSector(sectorId, official);
    setShowAlertModal(false);
  };
  useEffect(() => {
    getSectors(official);
  }, []);
  return (
    <Container className="mt-5">
      {alert && (
        <Alert variant={alert.status}>
          <p className="m-0 p-0">{alert.message}</p>
        </Alert>
      )}
      {showAlertModal && (
        <AlertModal
          heading="Delete Sector"
          show={showAlertModal}
          handleCancel={onPressCancel}
          handleDelete={onPressModalDelete}
        />
      )}

      <Card>
        <Card.Header>
          <h3 className="m-0 p-0">{type} Sectors </h3>
          <NavLink
            to={`/add-sector/${official}`}
            className="custom-btn add-sector-link bg-primary"
          >
            Add {type} Sector
          </NavLink>
        </Card.Header>
        <Card.Body>
          {sectors.length > 0 ? (
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
                {sectors.length > 0 &&
                  sectors.map((sector, index) => (
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
                        <NavLink
                          to={`/edit-sector/${sector._id}`}
                          className="btn btn-success"
                        >
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
          ) : loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status"></Spinner>
            </div>
          ) : (
            <p className="nav-link">No Sector Found</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Sectors;
