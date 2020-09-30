import React, { useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";
import { attributes } from "../../content/research-home.md";

export async function getStaticProps() {
  const data = await attributes;

  return {
    props: {
      data,
    },
  };
}

const Research = ({ data }) => {
  const [opacity, setopacity] = useState({
    one: false,
    two: false,
    three: false,
  });

  // add attribute to html?
  function handleMouseEnter(e) {
    let { innerText } = e.target;
    switch (innerText) {
      case "Security and Sovereignty":
        setopacity((opacity) => ({ ...opacity, one: true }));
        break;
      case "The Digital Citizen":
        setopacity((opacity) => ({ ...opacity, two: true }));
        break;
      case "The Digital Commons":
        setopacity((opacity) => ({ ...opacity, three: true }));
        break;
      default:
        console.log("An error occured");
    }
  }

  function handleMouseLeave(e) {
    let { innerText } = e.target;
    switch (innerText) {
      case "Security and Sovereignty":
        setopacity((opacity) => ({ ...opacity, one: false }));
        break;
      case "The Digital Citizen":
        setopacity((opacity) => ({ ...opacity, two: false }));
        break;
      case "The Digital Commons":
        setopacity((opacity) => ({ ...opacity, three: false }));
        break;
      default:
        console.log("An error occured");
    }
  }

  const links = [
    { rel: "preload", href: "/assets/img/research-bkg.webp", as: "image" },
    { rel: "preload", href: "/assets/img/town2.webp", as: "image" },
  ];
  const title = "Research Home | The Good Web Project";

  return (
    <>
      <Layout rootClass="research-bkg" links={links} title={title}>
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
                    className="building b1"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {data.section1}
                  </p>
                </Link>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/research/the-digital-citizen">
                  <p
                    className="building b2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {data.section2}
                  </p>
                </Link>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/research/the-digital-commons">
                  <p
                    className="building b3"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {data.section3}
                  </p>
                </Link>
              </Col>
            </Row>
          </Container>
          <div className="good-web">
            <img src="/assets/img/town2.webp" className="town" />
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
            .building {
              margin-bottom: 0;
              padding-bottom: 0.3rem;
              font-weight: 200;
              font-size: 1.5rem;
              cursor: pointer;
              text-align: center;
              display: flex;
              align-items: flex-end;
            }
            .b1 {
              border-bottom: ${opacity.one
                ? "1px solid rgb(239, 87, 52)"
                : "1px solid transparent"};
            }
            .b2 {
              border-bottom: ${opacity.two
                ? "1px solid rgb(239, 87, 52)"
                : "1px solid transparent"};
            }
            .b3 {
              border-bottom: ${opacity.three
                ? "1px solid rgb(239, 87, 52)"
                : "1px solid transparent"};
            }
          `}
        </style>
      </Layout>
    </>
  );
};

export default Research;
