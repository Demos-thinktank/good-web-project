import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";
import { attributes, react as JoinInContent } from "../../content/join-in.md";

function JoinIn() {
  return (
    <>
      <Layout>
        <Container>
          <Row>
            {/* <Col xs={12}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: " rgb(239, 87, 52)",
                  width: "max-content",
                  margin: "0 auto",
                }}
              >
                {title}
                <hr
                  style={{
                    borderBottom: "2px solid gray",
                    margin: "0.5rem 10% 1.5rem 10%",
                  }}
                />
              </p>
            </Col> */}
          </Row>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "0.25rem",
            }}
          >
            <div
              style={{
                fontStyle: "italic",
                textAlign: "center",
                height: "min-content",
                marginBottom: 0,
                width: "95%",
              }}
            >
              <JoinInContent />
            </div>
          </Row>
          <Row>
            <iframe
              src="https://pol.is/3tkbwzpauc"
              title="Polis conversation"
              id="myiframe"
              style={{
                width: "100%",
                minHeight: "1400px",
                borderWidth: "0px",
              }}
            ></iframe>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default JoinIn;
