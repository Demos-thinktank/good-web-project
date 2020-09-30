import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../../components/Layout";
import { attributes } from "../../content/contact-us.md";

export async function getStaticProps() {
  const data = await attributes;

  return {
    props: {
      data,
    },
  };
}

const ContactUs = ({ data }) => {
  let { description } = data;

  const title = "Contact Us | The Good Web Project";

  let main = description.map((para, k) => {
    return <p key={k}>{para.paragraph}</p>;
  });

  let aside = (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Your email" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="First name" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Last name" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Organisation" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Job title" />
      </Form.Group>
      <Form.Control as="select" disabled>
        <option>United Kingdom</option>
      </Form.Control>
      <br />
      <Button variant="primary" type="submit" disabled>
        Submit
      </Button>
    </Form>
  );

  return (
    <Layout title={title}>
      <Container>
        <Row>
          <Col xs={12} lg={{ span: 5, offset: 1 }}>
            <div className="column1">{main}</div>
          </Col>
          <Col xs={12} lg={{ span: 4, offset: 1 }}>
            <div className="column2">{aside}</div>
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
  );
};

export default ContactUs;
