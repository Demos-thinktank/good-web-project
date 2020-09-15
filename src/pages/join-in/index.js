import React, { useEffect, useState } from "react";
import IframeResizer from "iframe-resizer-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";
import { attributes, react as JoinInContent } from "../../content/join-in.md";

function JoinIn() {
  const [loading, setloading] = useState(false);
  // const [polis, setpolis] = useState(null);
  useEffect(() => {
    setloading(true);
    // setpolis("https://pol.is/embed.js");
  }, []);

  let { title } = attributes;

  return (
    <>
      {loading && (
        <Layout>
          <Container>
            <Row>
              <Col
                xs={12}
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  color: " rgb(239, 87, 52)",
                }}
              >
                {title}
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                margin: "0.25rem 0 1rem 0",
              }}
            >
              <JoinInContent />
            </Row>
            <Row>
              {/* <div className="polis" data-conversation_id="3tkbwzpauc"></div>
              <script src={polis}></script> */}

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
      )}
    </>
  );
}

export default JoinIn;
