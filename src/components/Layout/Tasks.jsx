import React, { useContext, useEffect } from "react";
import { Container, Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { SectorContext } from "../../api/Sector";
const Task = ({ id }) => {
  const { getSectorTasks, sectorTasks } = useContext(SectorContext);
  useEffect(() => {
    getSectorTasks(id);
  }, []);
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h3 className="m-0 p-0">Sectors Tasks</h3>
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
                      <NavLink to="/" className="btn btn-success ">
                        Edit
                      </NavLink>
                    </td>
                    <td className="text-center">
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

export default Task;
