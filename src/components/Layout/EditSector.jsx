import React, { useState, useContext } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import InputField from "../Form/InputField";
import Feedback from "../Form/Feedback";
import { SectorContext } from "../../api/Sector";

const EditSectorForm = ({ sector, navigate }) => {
  const INITIAL_FIELDS = {
    title: sector.title || "",
    difficulty: sector.difficulty || "easy",
    message: sector.message || "",
    distance: sector.distance || "",
    duration: sector.duration || "",
    latitude: sector.location.latitude || "",
    longitude: sector.location.longitude || "",
  };
  const { update_sector } = useContext(SectorContext);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FIELDS);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
      formData.longitude
    ) {
      update_sector(sector._id, formData);
      navigate("/dashboard", { replace: true });
    } else {
      console.log(formData);
      setValidated(true);
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <Form
        className="w-100 mt-3"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Container className="pb-5">
          <Card className="px-4">
            <Card.Header>
              <h3 className="m-0 p-0">Update Official Sector</h3>
            </Card.Header>
            <Row className="m-0 p-0  mb-4 mt-3">
              <Col sm={12} lg={4} xl={4} className="mb-md-4 mb-sm-4">
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
                  error={"Duration is required"}
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
                  error={"Distance is required"}
                  value={formData.distance}
                  handleChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="m-0 p-0  mb-4">
              <Col sm={12} lg={4} xl={4} className="mb-md-4 mb-sm-4">
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
              <Col sm={12} lg={4} xl={4} className="mb-md-4 mb-sm-4">
                <InputField
                  htmlFor={"latitude"}
                  text={"Sector Location Latitude"}
                  type={"number"}
                  name={"latitude"}
                  id={"latitude"}
                  placeholder={"Enter latitude of location"}
                  error={"Sector Latitude is required"}
                  value={formData.latitude}
                  handleChange={handleChange}
                />
              </Col>
              <Col sm={12} lg={4} xl={4} className="mb-md-4 mb-sm-4">
                <InputField
                  htmlFor={"longitude"}
                  text={"Sector Location Longitude"}
                  type={"number"}
                  name={"longitude"}
                  id={"longitude"}
                  placeholder={"Enter longitude of location"}
                  error={"Sector longitude is required"}
                  value={formData.longitude}
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
              <Col className="d-flex justify-content-start gap-2">
                <Button type="submit" className="btn btn-lg px-5">
                  Update Sector
                </Button>
              </Col>
            </Row>
          </Card>
        </Container>
      </Form>
    </Container>
  );
};

export default EditSectorForm;
