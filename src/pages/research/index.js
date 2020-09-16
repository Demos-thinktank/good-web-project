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
          <Container>
            <Row
              style={{
                justifyContent: "center",
                color: "white",
                marginBottom: "2rem",
                fontSize: "1.2rem",
              }}
            >
              <Col style={{ display: "flex", justifyContent: "center" }}>
                Security and Sovereignty
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                The Digital Citizen
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                The Digital Commons
              </Col>
            </Row>
            <Row>
              <img src="/assets/img/town.png" className="town-img" />
            </Row>
          </Container>
          <style jsx>
            {`
              .town-img {
                width: 100%;
                margin: 0 auto 2rem auto;
              }
            `}
          </style>
        </Layout>
      )}
    </>
  );
};

export default Research;
