import React, {useState } from 'react';
import {Formik} from 'formik';
import * as Yup from "yup";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { useAppContext } from "../lib/contextLib";
import LoaderButton from '../LoaderButton/LoaderButton';

const schema = Yup.object().shape({
  GameActivityId: Yup.string().required(),
  GameActivityTag: Yup.string().required(),
  GameActivityIdTag: Yup.string().required(),
  GameActivityDescription: Yup.string().required(),
  StartDate: Yup.date().required(() => new Date()),
  // EndDate: Yup.date.required().when(
  //     "StartDate",
  //     (StartDate, schema) => StartDate && schema.min(StartDate)),
  TeamCode: Yup.string().required(),
  TeamName: Yup.string().required(),
  Gender: Yup.string().required(),
  TeamMemberCount: Yup.number().required(),
  PlayerCount: Yup.number().required(),
});


export default function TeamFormPage() {
  
  const [isLoading, setIsLoading] = useState(false); 
  // const { userHasLoggedIn } = useAppContext();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
  }
  
  return (
    <Formik
      validationSchema={schema}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      dirty={true}
      initialValues={{
        GameActivityId: '',
        GameActivityTag: '',
        GameActivityIdTag: '',
        GameActivityDescription: '',
        StartDate: '',
        EndDate: '',
        TeamCode: '',
        TeamName: '',
        Gender: '',
        TeamMemberCount: '',
        PlayerCount: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        isValid,
        setFieldValue
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
          <b>Game Information</b>
            <Form.Group as={Row} className="mb-3" controlId="formGameActivityId">
            <Form.Label column sm="6">GameActivityId</Form.Label>
            <Col sm="6">
            <Form.Select name='GameActivityId' onChange={handleChange}
              values={values.GameActivityId} isValid={touched.GameActivityId }>
              <option>Select GameActivityId</option>
              <option value="ZA-AL">ZA-AL</option>
              <option value="VE-AL">VE-AL</option>
            </Form.Select>
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formGameActivityTag">
            <Form.Label column sm="6">GameActivityTag</Form.Label>
            <Col sm="6">
            <Form.Select name='GameActivityTag' onChange={handleChange}
              values={values.GameActivityTag} isValid={touched.GameActivityTag }>
              <option>Select GameActivityTag</option>
              <option value="STANDARD">STANDARD</option>
              <option value="SATURDAY">SATURDAY</option>
              <option value="SUNDAY">SUNDAY</option>
            </Form.Select>
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formGameActivityIdTag">
            <Form.Label column sm="6">GameActivityIdTag</Form.Label>
              <Col sm="6">
                <Form.Control type="text" name='GameActivityIdTag' onChange={handleChange}
                  values={values.GameActivityIdTag = `${values.GameActivityId} / ${values.GameActivityTag}`}
                  disabled />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formStartDate">
            <Form.Label column sm="6">Start Date</Form.Label>
              <Col sm="6">
                <Form.Control type="date" name='StartDate' onChange={handleChange}
                  values={values.StartDate} isValid={touched.StartDate } />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formEndDate">
            <Form.Label column sm="6">End Date</Form.Label>
              <Col sm="6">
                <Form.Control type="date" name='EndDate' onChange={handleChange}
                  values={values.EndDate} isValid={touched.EndDate }/>
              </Col>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <b>Team Information</b>
          <Form.Group as={Row} className="mb-3" controlId="formTeamCode">
            <Form.Label column sm="6">Team Code</Form.Label>
              <Col sm="6">
                <Form.Control type="text" name='TeamCode' placeholder="Enter Team Code"
                  onChange={handleChange} values={values.TeamCode} isValid={touched.TeamCode }/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formTeamName">
            <Form.Label column sm="6">Team Name</Form.Label>
              <Col sm="6">
                <Form.Control type="text" name='TeamName' placeholder="Enter Team Name"
                  onChange={handleChange} values={values.TeamName} isValid={touched.TeamName }/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formGender">
            <Form.Label column sm="6">Gender</Form.Label>
            <Col sm="6">
            <Form.Select aria-label="Default select example" name='Gender'
              onChange={handleChange} values={values.Gender} isValid={touched.Gender }>
              <option>Select Gender</option>
              <option value="1">Female</option>
              <option value="2">Male</option>
              <option value="2">TransGender</option>
            </Form.Select>
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formTeamMemberCount">
            <Form.Label column sm="6">Team Member Count</Form.Label>
              <Col sm="6">
                <Form.Control type="number" name='TeamMemberCount' placeholder="Enter Team Member Count"
                  onChange={handleChange} values={values.TeamMemberCount} isValid={touched.TeamMemberCount }/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlayerCount">
            <Form.Label column sm="6">Player Count</Form.Label>
              <Col sm="6">
                <Form.Control type="number" name='PlayerCount' placeholder="Enter Player Count"
                  onChange={handleChange} values={values.PlayerCount} isValid={touched.PlayerCount }/>
              </Col>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
      </Form.Group>
        <LoaderButton block="true"
            size="lg"
            type="submit"
            isLoading={isLoading}
            disabled={!isValid}>
              Submit
        </LoaderButton>
        </Form>
      )}
      </Formik>
  )
}
