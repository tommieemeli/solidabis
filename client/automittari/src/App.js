import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Table from "react-bootstrap/Table";

import "./App.css";


function App() {

  const [data, setData] = useState({distance: '', speed1: '', speed2: ''});
  const [car, setCar] = useState('');

  const inputChanged = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const travelTime1 = (data.distance/data.speed1);
  const travelTime2 = (data.distance/data.speed2);


  const handleDropdown = (e) => {
    setCar(e.target.value)
  }

  const k = 1.009;
  const kulutus = Math.pow(k, data.speed1)
  const kulutus2 = Math.pow(k, data.speed2)
  var cartype = "";

  if(car === "3") {
    cartype = "Auto A";
  } else if(car === "3.5") {
    cartype = "Auto B";
  } else if(car === "4") {
    cartype = "Auto C";
  }

  const showData = () => {
    console.log("Matka: " + data.distance + "km " + "\n" + "Nopeus1: " + data.speed1 + "km/h" + "\n" + "Nopeus2: " + data.speed2 + "km/h" + "\n" +
    "Auto: " + cartype + ", auton kulutus: " + car + " L/100km" + "\n" + 
    "Matka aika1: " + (travelTime1*60) + " minuuttia " + "\n" + "Matka aika2: " + (travelTime2*60) + " minuuttia" + "\n" + 
    "Kulutus valitulla autolla ja nopeudella1: " + (car*kulutus) + "\n" + 
    "Kulutus valitulla autolla ja nopeudella2: " + (car*kulutus2));
  }

  

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
                      value={data.distance}
                      name="distance"
                      onChange={inputChanged}
                    />
                  </Form.Group>
                  <Form.Group controlId="car">
                    <Form.Label>AUTO</Form.Label>
                    <Form.Control as="select" custom onChange={handleDropdown}>
                      <option>Valitse..</option>
                      <option value="3">Auto A</option>
                      <option value="3.5">Auto B</option>
                      <option value="4">Auto C</option>
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
                        name="speed1"
                        onChange={inputChanged}
                      ></FormControl>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="speed">
                      <Form.Label>NOPEUS 2</Form.Label>
                      <FormControl
                        type="number"
                        placeholder="Nopeus (km/h)"
                        name="speed2"
                        onChange={inputChanged}
                      ></FormControl>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Button onClick={showData} variant="danger">
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
                  <th>AUTO ({cartype})</th>
                  <th>Matka-aika(min)</th>
                  <th>Bensankulutus (L/100km)</th>
                  <th>ASD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nopeus 1</td>
                  <td>{travelTime1*60}</td>
                  <td>{car*kulutus}</td>
                  <td>ASD</td>
                </tr>
                <tr>
                  <td>Nopeus 2</td>
                  <td>{travelTime2*60}</td>
                  <td>{car*kulutus2}</td>
                  <td>ASD</td>
                </tr>
                <tr>
                  <td>ASD</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>ASD</td>
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
                <Card border="danger" style={{ width: '25rem' }} bg="dark">
                  <Card.Body>
                    <Card.Title>AUTOT</Card.Title>
                    <Card.Text>
                      <b>KULUTUS</b>
                      <p>Kulutus on mitattu 1km/h vauhdissa, kulutus kasvaa 1,009 kertoimella per 1km/h</p>
                      <li>Auto A: 3l / 100km</li>
                      <li>Auto B: 3,5l / 100km</li>
                      <li>Auto C: 4l / 100km</li>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card border="danger" style={{ width: '25rem' }} bg="dark">
                  <Card.Body>
                    <Card.Title>OHJELMA</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
                <Card border="danger" style={{ width: '25rem' }} bg="dark">
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
