import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";

const Research = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
  }, []);
  const router = useRouter();

  return (
    <>
      {loading && (
        <Layout myClass="research-bkg">
          <Container style={{ marginTop: "20%" }}>
            <Row style={{ justifyContent: "center", color: "white" }}>
              <Col>Security and Sovereignty</Col>
              <Col>The Digital Citizen</Col>
              <Col>The Digital Commons</Col>
            </Row>
            <Row>
              <img src="/assets/img/town.png" className="town-img" />
            </Row>
          </Container>
          <style jsx>
            {`
              .town-img {
                width: 95%;
                margin: 0 auto;
              }
            `}
          </style>
        </Layout>
      )}
    </>
  );
};

export default Research;
