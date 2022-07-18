import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useFormFields } from "../../lib/hooksLib";
import { onError } from "../../lib/errorLib";
import { useAppContext } from "../../lib/contextLib";
import LoaderButton from "../LoaderButton/LoaderButton";
import './Login.css';

export default function Login() {
  const nav = useNavigate();
  const { userHasLoggedIn } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();

    try {
      userHasLoggedIn(true);
      alert("Logged in");
      nav("/dashboard");
    } catch (e) {
      onError(e);
    }
  }
  

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
            block="true"
            size="lg"
            type="submit"
            isLoading={isLoading}
            disabled={!validateForm()}
        >
        Login
        </LoaderButton>
      </Form>
    </div>
  );
}