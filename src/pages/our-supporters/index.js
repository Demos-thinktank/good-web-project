import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";
import { attributes } from "../../content/our-supporters.md";

export async function getStaticProps() {
  const data = await attributes;

  return {
    props: {
      data,
    },
  };
}

function OurSupporters({ data }) {
  let { description, supporters } = data;
  const [visibility, setvisibility] = useState(
    Array(supporters.length).fill(false)
  );

  let contributors = supporters.map((supporter, k) => {
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
            backgroundColor: `${supporter.cardColor}`,
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
      <Layout>
        <Container>
          <Row>
            <Col xs={12} style={{ textAlign: "center" }}>
              {description}
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>{contributors}</Row>
        </Container>
        <style jsx>
          {`
            .supporter-img {
              height: 30vh;
              object-fit: cover;
            }
          `}
        </style>
      </Layout>
    </>
  );
}

export default OurSupporters;
