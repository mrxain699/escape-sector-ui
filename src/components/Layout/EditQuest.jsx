import React, { useState, useContext } from "react";
import { Container, Card, Form, Row, Col, Alert } from "react-bootstrap";
import InputField from "../Form/InputField";
import CustomButton from "../Form/CustomButon";
import Feedback from "../Form/Feedback";
import { SectorContext } from "../../api/Sector";

const EditQuestForm = ({ quest, sector_id, navigate }) => {
  const INITIAL_FIELDS = {
    question: quest.question || "",
    answer: quest.answer || "",
    options: quest.options.join("\n") || "",
    image: quest.image || "",
  };
  const { update_quest, alert } = useContext(SectorContext);
  const [validated, setValidated] = useState(false);
  const [questFormData, setQuestFormData] = useState(INITIAL_FIELDS);
  const [optionsFeedback, setOptionsFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      if (files && files.length > 0) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageBlob = reader.result;
          setQuestFormData({
            ...questFormData,
            image: imageBlob,
          });
        };
        reader.readAsDataURL(files[0]);
      }
    } else {
      setQuestFormData({
        ...questFormData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      questFormData.question &&
      questFormData.answer &&
      questFormData.options &&
      questFormData.image &&
      sector_id
    ) {
      questFormData.options = questFormData.options.trim();
      questFormData.options = questFormData.options.split("\n");
      if (questFormData.options.length > 4) {
        setOptionsFeedback("You can add only four options");
        questFormData.options = questFormData.options.join("\n");
      } else {
        await update_quest(sector_id, quest._id, questFormData)
          .then(() => {
            setOptionsFeedback(null);
            setValidated(false);
            setQuestFormData(INITIAL_FIELDS);
            navigate(`/quests/${sector_id}`, { replace: true });
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
        <Card className="mt-5  px-0">
          <Card.Header style={{ justifyContent: "flex-start" }}>
            <h3 className={`m-0 p-0 mx-3`}>Edit Sector Quest</h3>
          </Card.Header>
          {alert && (
            <Alert variant={alert.status} className="mx-4 my-2">
              <p className="m-0 p-0">{alert.message}</p>
            </Alert>
          )}
          <Card.Body className="px-4">
            <Row className="m-0 p-0 mb-4">
              <Col sm={12} lg={6} xl={6} className="mb-md-4 mb-sm-4">
                <InputField
                  htmlFor={"answer"}
                  text={"Answer"}
                  type={"text"}
                  name={"answer"}
                  id={"answer"}
                  placeholder={"Enter Answer"}
                  error={"Answer is required"}
                  value={questFormData.answer}
                  handleChange={handleChange}
                />
              </Col>
              <Col sm={12} lg={6} xl={6} className="mb-md-4 mb-sm-4">
                <Form.Group>
                  <Form.Label htmlFor="image">Image</Form.Label>
                  <Form.Control
                    name="image"
                    id="image"
                    required={true}
                    type="file"
                    size="lg"
                    onChange={handleChange}
                    as={"input"}
                    style={{ height: "100%" }}
                  />
                  <Feedback type={"invalid"} text={"Image is required"} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="px-2 ">
              <Col sm={12} lg={6} xl={6} className="mb-md-4 mb-sm-4">
                <Form.Group>
                  <Form.Label htmlFor="question">Question</Form.Label>
                  <Form.Control
                    name="question"
                    id="question"
                    placeholder="Enter Question..."
                    required={true}
                    as="textarea"
                    rows={4}
                    value={questFormData.question}
                    onChange={handleChange}
                  />
                  <Feedback type={"invalid"} text={"Question is required"} />
                </Form.Group>
              </Col>
              <Col sm={12} lg={6} xl={6} className="mb-md-4 mb-sm-4">
                <Form.Group>
                  <Form.Label htmlFor="Options">Options</Form.Label>
                  <Form.Control
                    name="options"
                    id="options"
                    placeholder="Enter Quest Options..."
                    required={true}
                    as="textarea"
                    rows={4}
                    value={questFormData.options}
                    onChange={handleChange}
                  />
                  <small className="text-muted ">
                    Note: You can add only four Options. Each option should
                    start with a new line.
                  </small>
                  <br />
                  {optionsFeedback ? (
                    <small className="text-danger">{optionsFeedback}</small>
                  ) : (
                    ""
                  )}
                  <Feedback type={"invalid"} text={"Options is required"} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-0 p-0 mb-4">
              <Col className="d-flex justify-content-between gap-2">
                <CustomButton type="submit" text={"Update Quest"} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Form>
  );
};

export default EditQuestForm;
