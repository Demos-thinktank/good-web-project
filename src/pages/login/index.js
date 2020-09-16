import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";

const Login = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <h3
            style={{
              color: "rgb(239, 87, 52)",
              textAlign: "center",
              width: "100%",
            }}
          >
            Under Construction
          </h3>
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
