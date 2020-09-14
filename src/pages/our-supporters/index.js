import { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../../components/Layout";
import {
  attributes,
  react as SupportersContent,
} from "../../content/our-supporters.md";

export default class About extends Component {
  render() {
    let { supporters } = attributes;

    let contributors = supporters.map((supporter, k) => (
      //   <div>
      //     <img src={supporter.image} />
      //     <p>{supporter.description}</p>
      //   </div>
      <Col xs={12} md={6} lg={4} key={k}>
        <Card className="bg-dark text-white">
          <Card.Img src={supporter.image} alt="One of our supporters" />
          <Card.ImgOverlay>
            {/* <Card.Title>Card title</Card.Title> */}
            <Card.Text>{supporter.description}</Card.Text>
            {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Title>Supporter Name</Card.Title>
            <Card.Text>Supporter Title</Card.Text>
          </Card.Body>
          {/* <Card.Body>
            <Card.Link href="#">Supporter Link</Card.Link>
          </Card.Body> */}
        </Card>
      </Col>
    ));

    return (
      <>
        <Layout>
          <div style={{ margin: "auto" }}>
            <Container>
              <Row>
                <Col xs={12}>
                  <SupportersContent />
                </Col>
              </Row>
              <Row>{contributors}</Row>
            </Container>
          </div>
        </Layout>
      </>
    );
  }
}
