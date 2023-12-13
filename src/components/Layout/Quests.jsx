import { useContext, useEffect, useState } from "react";
import { Container, Card, Table, Alert, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { SectorContext } from "../../api/Sector";
import AlertModal from "./AlertModal";
const Quest = ({ id }) => {
  const { getSectorQuests, sectorQuests, deleteQuest, alert, loading } =
    useContext(SectorContext);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [questId, setQuestId] = useState(null);
  const onPressDelete = (quest_Id) => {
    setQuestId(quest_Id);
    setShowAlertModal(true);
  };
  const onPressCancel = () => setShowAlertModal(false);
  const onPressModalDelete = () => {
    deleteQuest(id, questId);
    setShowAlertModal(false);
  };
  useEffect(() => {
    getSectorQuests(id);
  }, []);
  return (
    <Container className="mt-5 card-container">
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
          <h3 className="m-0 p-0">Sectors Side Quests</h3>
          <NavLink
            to={`/add-quest/${id}`}
            className="custom-btn add-sector-link bg-primary"
          >
            Add Side Quest
          </NavLink>
        </Card.Header>
        <Card.Body>
          {sectorQuests.length > 0 ? (
            <Table bordered responsive hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Options</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {sectorQuests.length > 0 &&
                  sectorQuests.map((quest, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{quest.question}</td>
                      <td>{quest.answer}</td>
                      <td>{quest.options.join(", ")}</td>
                      <td className="text-center">
                        <NavLink
                          to={`/edit-quest/${id}/${quest._id}`}
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
                          onClick={() => onPressDelete(quest._id)}
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
            <p className="nav-link">No Side Quests Found</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Quest;
