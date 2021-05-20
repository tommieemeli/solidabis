import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import CardDeck from "react-bootstrap/CardDeck";
import Table from "react-bootstrap/Table";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>MATKAILUMITTARI</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="inputs">
              <Form>
                <Form.Row>
                  <Form.Group controlId="distance" as={Col}>
                    <Form.Label>MATKA</Form.Label>
                    <FormControl
                      type="number"
                      placeholder="Matka kilometreinä"
                    />
                  </Form.Group>
                  <Form.Group controlId="car">
                    <Form.Label>AUTO</Form.Label>
                    <Form.Control as="select" custom>
                      <option>Auto A</option>
                      <option>Auto B</option>
                      <option>Auto C</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="speed">
                      <Form.Label>NOPEUS 1</Form.Label>
                      <FormControl
                        type="number"
                        placeholder="Nopeus (km/h)"
                      ></FormControl>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="speed">
                      <Form.Label>NOPEUS 2</Form.Label>
                      <FormControl
                        type="number"
                        placeholder="Nopeus (km/h)"
                      ></FormControl>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Button type="submit" variant="danger">
                  LASKE !
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        <Container>
          <Row>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h2>TIETOA</h2>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title>AUTOT</Card.Title>
                    <Card.Text>
                      <b>KULUTUS</b>
                      <li>Auto A: 3l / 100km</li>
                      <li>Auto B: 3,5l / 100km</li>
                      <li>Auto C: 4l / 100km</li>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>OHJELMA</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>INFO</Card.Title>
                    <Card.Text>asd</Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
