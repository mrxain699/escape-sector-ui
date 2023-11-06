import React, { useContext, useEffect, useState } from "react";
import { Container, Card, Table, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { SectorContext } from "../../api/Sector";
import AlertModal from "./AlertModal";
const Task = ({ id }) => {
  const { getSectorTasks, sectorTasks, deleteTask, alert } =
    useContext(SectorContext);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [taskId, setTaskId] = useState(null);
  const onPressDelete = (task_id) => {
    setTaskId(task_id);
    setShowAlertModal(true);
  };
  const onPressCancel = () => setShowAlertModal(false);
  const onPressModalDelete = () => {
    deleteTask(id, taskId);
    getSectorTasks(id);
    setShowAlertModal(false);
  };
  useEffect(() => {
    getSectorTasks(id);
  }, [sectorTasks]);
  return (
    <Container className="mt-5">
      {alert && (
        <Alert variant={alert.status}>
          <p className="m-0 p-0">{alert.message}</p>
        </Alert>
      )}
      {showAlertModal && (
        <AlertModal
          heading="Delete Task"
          show={showAlertModal}
          handleCancel={onPressCancel}
          handleDelete={onPressModalDelete}
        />
      )}
      <Card>
        <Card.Header>
          <h3 className="m-0 p-0">Sectors Tasks</h3>
          <NavLink
            to={`/add-task/${id}`}
            className="custom-btn add-sector-link bg-primary"
          >
            Add Task
          </NavLink>
        </Card.Header>
        <Card.Body>
          <Table bordered responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Location</th>
                <th>Message</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {sectorTasks.length > 0 &&
                sectorTasks.map((task, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.title}</td>
                    <td>{task.question}</td>
                    <td>{task.answer}</td>
                    <td>
                      {task.location.latitude}, {task.location.longitude}
                    </td>
                    <td>{task.message}</td>
                    <td className="text-center">
                      <NavLink
                        to={`/edit-task/${id}/${task._id}`}
                        className="btn btn-success "
                      >
                        Edit
                      </NavLink>
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="icon"
                        color="#ff0004"
                        onClick={() => onPressDelete(task._id)}
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

export default Task;
