import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";
import { attributes } from "../../content/about.md";

function About() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
  }, []);

  let { description, title, partners } = attributes;

  let main = description.map((para, k) => {
    if (k === 0) {
      let firstParagraph = para.paragraph.split(" ");
      return (
        <p key={k}>
          {firstParagraph[0]}{" "}
          <span style={{ color: "var(--gwp-orange)" }}>
            {firstParagraph.slice(1, 4).join(" ")}{" "}
          </span>
          {firstParagraph.slice(4).join(" ")}
        </p>
      );
    } else {
      return <p key={k}>{para.paragraph}</p>;
    }
  });

  let aside = partners.map((partner, k) => (
    <div key={k}>
      <p
        style={{
          borderBottom: "2px solid var(--gwp-orange)",
          marginBottom: "0.4rem",
          fontWeight: "500",
        }}
      >
        {partner.partner}
      </p>
      <p>{partner.description}</p>
    </div>
  ));

  return (
    <>
      {loading && (
        <Layout>
          {/* <div style={{ margin: "auto" }}> */}
          <Container>
            <Row>
              <Col xs={12} lg={{ span: 5, offset: 1 }}>
                <div className="column1">{main}</div>
              </Col>
              <Col xs={12} lg={{ span: 4, offset: 1 }}>
                <div className="column2">
                  <p
                    style={{
                      color: "var(--gwp-orange)",
                      fontWeight: "500",
                    }}
                  >
                    {title}
                  </p>
                  {aside}
                </div>
              </Col>
            </Row>
          </Container>
          {/* </div> */}
          <style jsx>
            {`
              .column1 {
                margin-bottom: 3rem;
              }
            `}
          </style>
        </Layout>
      )}
    </>
  );
}

export default About;
