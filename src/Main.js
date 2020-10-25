import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Main() {
  const history = useHistory();

  const handleClose = () => {
    history.push("/post");
  };
  return (
    <React.Fragment>
      <Container
        fluid
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#bababa",
          paddingTop: "35vh",
        }}
      >
        <Row>
          <Col className="d-flex justify-content-md-center">
            <div
              className="main-font"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "15px",
                lineHeight: "120px",
                textAlign: "center",
                width: "40%",
                height: "150px",
                fontSize: "2.4em",
              }}
            >
              EmoTracker.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              class="secondary-font"
              style={{ textAlign: "center", fontSize: "1.8em" }}
            >
              Just breathe. We got you.
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col className="d-flex justify-content-md-center">
            <div
              class="main-font"
              type="button"
              style={{
                width: "20%",
                height: "45px",
                fontSize: "1.6em",
                lineHeight: "45px",
                background:
                  "linear-gradient(96.23deg, #FA80D2 0%, #FED757 100%)",
                textAlign: "center",
              }}
              //   onClick={() => history.push("/post")}
              onClick={handleClose}
            >
              Write Something.
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
