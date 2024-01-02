import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import InputField from "../Form/InputField";
import Feedback from "../Form/Feedback";
import AddTask from "./AddTask";
import { SectorContext } from "../../api/Sector";
const INITIAL_FIELDS = {
  title: "",
  difficulty: "easy",
  message: "",
  distance: "",
  duration: "",
  latitude: "",
  longitude: "",
  price: 0,
  locked: false,
  tasks: [],
};

const AddSectorForm = ({ official }) => {
  const { alert } = useContext(SectorContext);
  const [validated, setValidated] = useState(false);
  const [displayTaskForm, setDisplayTaskForm] = useState(false);
  const [displaySectorForm, setDisplaySectorForm] = useState(true);
  const [formData, setFormData] = useState(INITIAL_FIELDS);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title &&
      formData.difficulty &&
      formData.message &&
      formData.distance &&
      formData.duration &&
      formData.latitude &&
      formData.longitude &&
      formData.price >= 0
    ) {
      setDisplaySectorForm(false);
      setDisplayTaskForm(true);
      setFormData({
        ...formData,
        tasks: [],
      });
    } else {
      setValidated(true);
    }
  };

  const toggleSectorForm = () => {
    setDisplaySectorForm(true);
    setDisplayTaskForm(false);
  };

  const reset = () => {
    setFormData(INITIAL_FIELDS);
  };

  return (
    <Container className="mt-5 mb-5 card-container">
      {displaySectorForm && (
        <Form
          className="w-100 mt-3"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Container className="pb-5">
            {alert && (
              <Alert variant={alert.status}>
                <p className="m-0 p-0">{alert.message}</p>
              </Alert>
            )}
            <Card className="px-4">
              <Card.Header>
                <h3 className="m-0 p-0">Add Sector</h3>
              </Card.Header>
              <Row className="m-0 p-0  mt-3">
                <Col sm={12} lg={4} xl={4} className="mb-md-4 mb-sm-4 mb-xs-4">
                  <InputField
                    htmlFor={"title"}
                    text={"Title"}
                    type={"text"}
                    name={"title"}
                    id={"title"}
                    placeholder={"Enter sector title"}
                    error={"Title is required"}
                    value={formData.title}
                    handleChange={handleChange}
                  />
                </Col>
                <Col sm={12} lg={4} xl={4} className="mb-md-4 mb-sm-4">
                  <InputField
                    htmlFor={"duration"}
                    text={"Duration"}
                    type={"number"}
                    name={"duration"}
                    id={"duration"}
                    placeholder={"Enter duration in minutes e:g 60"}
                    error={
                      "Duration is required and should be a positive number"
                    }
                    value={formData.duration}
                    handleChange={handleChange}
                  />
                </Col>
                <Col sm={12} lg={4} xl={4} className="mb-md-4 mb-sm-4">
                  <InputField
                    htmlFor={"distance"}
                    text={"Distance"}
                    type={"number"}
                    name={"distance"}
                    id={"distance"}
                    placeholder={"Enter distance in Km e:g 2"}
                    error={
                      "Distance is required and should be a positive number"
                    }
                    value={formData.distance}
                    handleChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="m-0 p-0 ">
                <Col sm={12} lg={3} xl={3} className="mb-md-4 mb-sm-4">
                  <Form.Group>
                    <Form.Label htmlFor="difficulty" as={"label"}>
                      Difficulty Level
                    </Form.Label>
                    <Form.Select
                      name="difficulty"
                      id="difficulty"
                      value={formData.difficulty}
                      onChange={handleChange}
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </Form.Select>
                    <Feedback
                      type={"invalid"}
                      text={"Difficulty level is required"}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} lg={3} xl={3} className="mb-md-4 mb-sm-4">
                  <InputField
                    htmlFor={"latitude"}
                    text={"Sector Location Latitude"}
                    type={"number"}
                    name={"latitude"}
                    id={"latitude"}
                    placeholder={"Enter latitude of location"}
                    error={
                      "Sector Latitude is required and should be a decimal number"
                    }
                    value={formData.latitude}
                    handleChange={handleChange}
                  />
                </Col>
                <Col sm={12} lg={3} xl={3} className="mb-md-4 mb-sm-4">
                  <InputField
                    htmlFor={"longitude"}
                    text={"Sector Location Longitude"}
                    type={"number"}
                    name={"longitude"}
                    id={"longitude"}
                    placeholder={"Enter longitude of location"}
                    error={
                      "Sector longitude is required and should be a decimal number"
                    }
                    value={formData.longitude}
                    handleChange={handleChange}
                  />
                </Col>
                <Col sm={12} lg={3} xl={3} className="mb-md-4 mb-sm-4">
                  <InputField
                    htmlFor={"Sector Price"}
                    text={"Sector Price"}
                    type={"number"}
                    name={"price"}
                    id={"price"}
                    placeholder={"Enter Sector price"}
                    error={"Sector price is not valid"}
                    value={formData.price}
                    handleChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="m-0 p-0 mb-4">
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control
                      name="message"
                      id="message"
                      placeholder="Enter message..."
                      required={true}
                      as="textarea"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <Feedback type={"invalid"} text={"Message is required"} />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="m-0 p-0 mb-4">
                <Col>
                  <Form.Check type={"checkbox"} id="checkbox">
                    <Form.Check.Input
                      type={"checkbox"}
                      name="locked"
                      checked={formData.locked}
                      onChange={handleChange}
                    />
                    <Form.Check.Label>Sector Lock</Form.Check.Label>
                  </Form.Check>
                </Col>
              </Row>
              <Row className="m-0 p-0 mb-4">
                <Col className="d-flex justify-content-start gap-2">
                  <Button type="submit" className="btn btn-lg px-5">
                    Next
                  </Button>
                </Col>
              </Row>
            </Card>
          </Container>
        </Form>
      )}

      {displayTaskForm && (
        <AddTask
          sectorData={formData}
          reset={reset}
          handleToggle={toggleSectorForm}
          official={official}
        />
      )}
    </Container>
  );
};

export default AddSectorForm;
