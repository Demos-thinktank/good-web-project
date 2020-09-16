import { attributes } from "../../content/research-sub-page.md";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const data = await attributes;

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { page: "the-digital-commons" } },
      { params: { page: "the-digital-citizen" } },
      { params: { page: "security-and-sovereignty" } },
    ],
    fallback: false,
  };
}

export default function ResearchSubPage({ data }) {
  // console.log("data", data);
  const router = useRouter();
  const { page } = router.query;
  // console.log("page", page);
  let main = data[page].description.map((para, k) => {
    return <p key={k}>{para.paragraph}</p>;
  });

  let aside = data[page].research.map((research, k) => (
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
  // }

  return (
    <>
      <Layout>
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
                  {data.title}
                </p>
                {aside}
              </div>
            </Col>
          </Row>
        </Container>
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
