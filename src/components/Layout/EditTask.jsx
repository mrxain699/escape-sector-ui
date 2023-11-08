import React, { useState, useContext } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import InputField from "../Form/InputField";
import CustomButton from "../Form/CustomButon";
import Feedback from "../Form/Feedback";
import { SectorContext } from "../../api/Sector";
import { getFormattedData } from "../../utils/Functions";

const EditTaskForm = ({ task, sector_id, navigate }) => {
  const INITIAL_FIELDS = {
    title: task.title || "",
    question: task.question || "",
    answer: task.answer || "",
    hints: task.hints.join("\n") || "",
    latitude: task.location.latitude || "",
    longitude: task.location.longitude || "",
    message: task.message || "",
    image: task.image || "",
  };
  const { update_task } = useContext(SectorContext);
  const [validated, setValidated] = useState(false);
  const [taskFormData, setTaskFormData] = useState(INITIAL_FIELDS);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      if (files && files.length > 0) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageBlob = reader.result;
          setTaskFormData({
            ...taskFormData,
            image: imageBlob,
          });
        };
        reader.readAsDataURL(files[0]);
      }
    } else {
      setTaskFormData({
        ...taskFormData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      taskFormData.title &&
      taskFormData.question &&
      taskFormData.answer &&
      taskFormData.latitude &&
      taskFormData.longitude &&
      taskFormData.message &&
      taskFormData.hints
    ) {
      update_task(sector_id, task._id, taskFormData);
      navigate(`/tasks/${sector_id}`, { replace: true });
      setTaskFormData(INITIAL_FIELDS);
    } else {
      setValidated(true);
    }
  };

  return (
    <Form
      className="w-100 mt-3"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <Container className="pb-5 card-container">
        <Card className="mt-5 px-4">
          <Card.Header style={{ justifyContent: "flex-start" }}>
            <h3 className="m-0 p-0 mx-3">Edit Sector Tasks</h3>
          </Card.Header>
          <Row className="m-0 p-0  mb-4 mt-3">
            <Col sm={12} lg={3} xl={3} className="mb-md-4 mb-sm-4">
              <InputField
                htmlFor={"title"}
                text={"Task Title"}
                type={"text"}
                name={"title"}
                id={"title"}
                placeholder={"Enter task title"}
                error={"Task title is required"}
                value={taskFormData.title}
                handleChange={handleChange}
              />
            </Col>
            <Col sm={12} lg={3} xl={3} className="mb-md-4 mb-sm-4">
              <InputField
                htmlFor={"latitude"}
                text={"Task Location Latitude"}
                type={"number"}
                name={"latitude"}
                id={"latitude"}
                placeholder={"Enter latitude of task location"}
                error={"Task location latitude is required"}
                value={taskFormData.latitude}
                handleChange={handleChange}
              />
            </Col>
            <Col sm={12} lg={3} xl={3} className="mb-md-4 mb-sm-4">
              <InputField
                htmlFor={"longitude"}
                text={"Task Location Longitude"}
                type={"number"}
                name={"longitude"}
                id={"longitude"}
                placeholder={"Enter longitude of task location"}
                error={"Task location longitude is required"}
                value={taskFormData.longitude}
                handleChange={handleChange}
              />
            </Col>
            <Col sm={12} lg={3} xl={3} className="mb-md-4 mb-sm-4">
              <InputField
                htmlFor={"answer"}
                text={"Task Answer"}
                type={"text"}
                name={"answer"}
                id={"answer"}
                placeholder={"Enter task answer"}
                error={"Task answer is required"}
                value={taskFormData.answer}
                handleChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="m-0 p-0 mb-4">
            <Col sm={12} lg={6} xl={6} className="mb-md-4 mb-sm-4">
              <Form.Group>
                <Form.Label htmlFor="question">Task Question</Form.Label>
                <Form.Control
                  name="question"
                  id="question"
                  placeholder="Enter task question..."
                  required={true}
                  as="textarea"
                  rows={3}
                  value={taskFormData.question}
                  onChange={handleChange}
                />
                <Feedback type={"invalid"} text={"Task question is required"} />
              </Form.Group>
            </Col>
            <Col sm={12} lg={6} xl={6}>
              <Form.Group>
                <Form.Label htmlFor="message">Task Message</Form.Label>
                <Form.Control
                  name="message"
                  id="message"
                  placeholder="Enter task completion message..."
                  required={true}
                  as="textarea"
                  rows={3}
                  value={taskFormData.message}
                  onChange={handleChange}
                />
                <Feedback
                  type={"invalid"}
                  text={"Task completion message is required"}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="m-0 p-0 mb-4">
            <Col>
              <Form.Group>
                <Form.Label htmlFor="hints">Task Hints</Form.Label>
                <Form.Control
                  name="hints"
                  id="hints"
                  placeholder="Enter task hints..."
                  required={true}
                  as="textarea"
                  rows={4}
                  value={taskFormData.hints}
                  onChange={handleChange}
                />
                <small className="text-muted">
                  Note: You can add multiple hints and Tasks. Each hint should
                  start with a new line. At least one hint and task is required.
                </small>
                <Feedback type={"invalid"} text={"Task hints is required"} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="m-0 p-0 mb-4">
            <Col>
              <Form.Group>
                <Form.Label htmlFor="image">Task Image</Form.Label>
                <Form.Control
                  name="image"
                  id="image"
                  required={false}
                  type="file"
                  size="lg"
                  onChange={handleChange}
                  as={"input"}
                  style={{ height: "100%" }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="m-0 p-0 mb-4">
            <Col className="d-flex justify-content-between gap-2">
              <CustomButton type={"submit"} text={"Update Task"} />
            </Col>
          </Row>
        </Card>
      </Container>
    </Form>
  );
};

export default EditTaskForm;
