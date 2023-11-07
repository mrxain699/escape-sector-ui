import React, { useState, useContext, useEffect } from "react";
import { Container, Form, Alert } from "react-bootstrap";
import Label from "../components/Form/Label";
import Input from "../components/Form/Input";
import Feedback from "../components/Form/Feedback";
import CustomButton from "../components/Form/CustomButon";
import { AuthContext } from "../api/Auth.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { authenticate, errorMessage, loginToken } = useContext(AuthContext);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      authenticate(formData)
        .then(() => {
          navigate("/dashboard", { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setValidated(true);
    }
  };

  return (
    <Container fluid={true} className="login_container">
      <Form
        className="login_form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <h1 className="mb-3 text-center">Login.</h1>
        {errorMessage && (
          <Alert variant="danger">
            <p className="m-0 p-0">{errorMessage}</p>
          </Alert>
        )}

        <Form.Group className="mb-4">
          <Label htmlFor={"username"} text={"Username"} />
          <Input
            type={"text"}
            name="username"
            placeholder={"Enter Username"}
            id={"username"}
            value={formData.username}
            handleChange={handleChange}
          />
          <Feedback type={"invalid"} text={"Username is required"} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Label htmlFor={"password"} text={"Password"} />
          <Input
            type={"password"}
            name="password"
            placeholder={"Enter Password"}
            id={"password"}
            value={formData.password}
            handleChange={handleChange}
          />
          <Feedback type={"invalid"} text={"Password is required"} />
        </Form.Group>
        <CustomButton type={"submit"} text={"Login"} />
      </Form>
    </Container>
  );
};

export default Login;
