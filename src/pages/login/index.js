import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";
import { attributes } from "../../content/login.md";

export async function getStaticProps() {
  const data = await attributes;

  return {
    props: {
      data,
    },
  };
}

const Login = ({ data }) => {
  let { description } = data;
  return (
    <Layout>
      <Container>
        <Row>
          {/* <h3
            style={{
              color: "rgb(239, 87, 52)",
              textAlign: "center",
              width: "100%",
            }}
          >
            Under Construction
          </h3> */}
          <div
            style={{
              fontStyle: "italic",
              textAlign: "center",
              height: "min-content",
              marginBottom: 0,
              width: "95%",
            }}
          >
            {description}
          </div>
        </Row>
      </Container>

      <div style={{ margin: "auto" }}>
        <img
          src="/assets/img/construction.gif"
          alt="under construction"
          style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
        />
      </div>
    </Layout>
  );
};

export default Login;
