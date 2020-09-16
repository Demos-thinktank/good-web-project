import { attributes } from "../../content/research-sub-page.md";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";

ResearchSubPage.getInitialProps = async ({ query }) => {
  // await data
  await attributes;
  await query;
  return {
    description: attributes[query.page].description,
    title: attributes[query.page].title,
    research: attributes[query.page].research,
  };
};

export default function ResearchSubPage({ description, title, research }) {
  let main, aside;
  if (description && title && research) {
    main = description.map((para, k) => {
      return <p key={k}>{para.paragraph}</p>;
    });

    aside = research.map((research, k) => (
      <div key={k}>
        <p
          style={{
            borderBottom: "2px solid var(--gwp-orange)",
            marginBottom: "0.4rem",
            fontWeight: "500",
          }}
        >
          {research.title}
        </p>
        <p>{research.description}</p>
      </div>
    ));
  }

  return (
    <>
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
    </>
  );
}
