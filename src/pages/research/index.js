import React, { useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";

const Research = () => {
  const [opacity, setopacity] = useState({
    one: false,
    two: false,
    three: false,
  });

  return (
    <>
      <Layout myClass="research-bkg">
        <div style={{ margin: "auto 0" }}>
          <Container>
            <Row
              style={{
                justifyContent: "center",
                color: "white",
                paddingBottom: "0.3rem",
                fontWeight: "500",
              }}
            >
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/research/security-and-sovereignty">
                  <p
                    style={{
                      borderBottom: opacity.one
                        ? "1px solid rgb(239, 87, 52)"
                        : "1px solid transparent",
                      marginBottom: 0,
                      paddingBottom: "0.3rem",
                      fontWeight: "200",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                    onMouseEnter={() =>
                      setopacity((opacity) => ({ ...opacity, one: true }))
                    }
                    onMouseLeave={() =>
                      setopacity((opacity) => ({ ...opacity, one: false }))
                    }
                  >
                    Security and Sovereignty
                  </p>
                </Link>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/research/the-digital-citizen">
                  <p
                    style={{
                      borderBottom: opacity.two
                        ? "1px solid rgb(239, 87, 52)"
                        : "1px solid transparent",
                      marginBottom: 0,
                      paddingBottom: "0.3rem",
                      fontWeight: "200",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                    onMouseEnter={() =>
                      setopacity((opacity) => ({ ...opacity, two: true }))
                    }
                    onMouseLeave={() =>
                      setopacity((opacity) => ({ ...opacity, two: false }))
                    }
                  >
                    The Digital Citizen
                  </p>
                </Link>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/research/the-digital-commons">
                  <p
                    style={{
                      borderBottom: opacity.three
                        ? "1px solid rgb(239, 87, 52)"
                        : "1px solid transparent",
                      marginBottom: 0,
                      paddingBottom: "0.3rem",
                      fontWeight: "200",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                    onMouseEnter={() =>
                      setopacity((opacity) => ({ ...opacity, three: true }))
                    }
                    onMouseLeave={() =>
                      setopacity((opacity) => ({ ...opacity, three: false }))
                    }
                  >
                    The Digital Commons
                  </p>
                </Link>
              </Col>
            </Row>
          </Container>
          <div className="good-web">
            <img src="/assets/img/town.png" className="town" />
            <Link href="/research/security-and-sovereignty">
              <img
                className="vector-1"
                onMouseEnter={() =>
                  setopacity((opacity) => ({ ...opacity, one: true }))
                }
                onMouseLeave={() =>
                  setopacity((opacity) => ({ ...opacity, one: false }))
                }
                src="/assets/svg/vector-1.svg"
              ></img>
            </Link>
            <Link href="/research/the-digital-citizen">
              <img
                className="vector-2"
                onMouseEnter={() =>
                  setopacity((opacity) => ({ ...opacity, two: true }))
                }
                onMouseLeave={() =>
                  setopacity((opacity) => ({ ...opacity, two: false }))
                }
                src="/assets/svg/vector-2.svg"
              ></img>
            </Link>
            <Link href="/research/the-digital-commons">
              <img
                className="vector-3"
                onMouseEnter={() =>
                  setopacity((opacity) => ({ ...opacity, three: true }))
                }
                onMouseLeave={() =>
                  setopacity((opacity) => ({ ...opacity, three: false }))
                }
                src="/assets/svg/vector-3.svg"
              ></img>
            </Link>
          </div>
        </div>
        <style jsx>
          {`
            .good-web {
              width: 100%;
              padding: 2.5%;
              position: relative;
            }
            .town {
              width: 100%;
            }
            .vector-1,
            .vector-2,
            .vector-3 {
              position: absolute;
              cursor: pointer;
            }
            .vector-1 {
              top: 8.5%;
              left: 7.5%;
              width: 11.5%;
              opacity: ${opacity.one ? "1" : "0"};
            }
            .vector-2 {
              top: 28%;
              left: 40%;
              width: 13%;
              opacity: ${opacity.two ? "1" : "0"};
            }
            .vector-3 {
              top: 37%;
              right: 21.5%;
              width: 16%;
              opacity: ${opacity.three ? "1" : "0"};
              z-index: 1;
            }
          `}
        </style>
      </Layout>
    </>
  );
};

export default Research;
