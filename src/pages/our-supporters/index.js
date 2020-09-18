import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";
import {
  attributes,
  react as SupportersContent,
} from "../../content/our-supporters.md";

let { supporters } = attributes;

function OurSupporters() {
  const [visibility, setvisibility] = useState(
    Array(supporters.length).fill(false)
  );
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
  }, []);

  let contributors = supporters.map((supporter, k) => {
    let bgCol;
    if (k == 0 || k % 4 == 0) {
      bgCol = "rgb(197, 7, 77)";
    } else if (k == 1 || k % 5 == 0) {
      bgCol = "rgb(239, 87, 52)";
    } else {
      bgCol = "rgb(189, 189, 189)";
    }

    return (
      <Col
        xs={12}
        md={6}
        lg={4}
        key={k}
        style={{
          marginBottom: "3rem",
        }}
      >
        <Card
          className="text-white"
          style={{
            margin: "1rem 0",
            backgroundColor: `${bgCol}`,
            border: "none",
            padding: "0.2rem",
          }}
          onMouseEnter={() => {
            setvisibility((prevState) =>
              prevState.map((el, i) => i === k && true)
            );
          }}
          onMouseLeave={() => {
            setvisibility((prevState) =>
              prevState.map((el, i) => i === k && false)
            );
          }}
        >
          <Card.Img
            src={supporter.image}
            alt="One of our supporters"
            style={{ height: "35vh", objectFit: "cover" }}
          />
          {visibility[k] && (
            <Card.ImgOverlay
              style={{ backgroundColor: "inherit", opacity: "1" }}
            >
              <Card.Text>{supporter.description}</Card.Text>
            </Card.ImgOverlay>
          )}
          <Card.Body>
            <Card.Title>{supporter.name}</Card.Title>
            {/* <Card.Text>{supporter.title}</Card.Text> */}
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <>
      {loading && (
        <Layout>
          {/* <div style={{ margin: "auto" }}> */}
          <Container>
            <Row>
              <Col xs={12} style={{ textAlign: "center" }}>
                <SupportersContent />
              </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>{contributors}</Row>
          </Container>
          {/* </div> */}
          <style jsx>
            {`
              .supporter-img {
                height: 30vh;
                object-fit: cover;
              }
            `}
          </style>
        </Layout>
      )}
    </>
  );
  // }
}

export default OurSupporters;
