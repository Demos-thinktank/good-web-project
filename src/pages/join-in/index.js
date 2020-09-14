import { Component } from "react";
import Layout from "../../components/Layout";
import { attributes, react as JoinInContent } from "../../content/join-in.md";

export default class About extends Component {
  render() {
    let { title } = attributes;

    return (
      <>
        <Layout>
          <div>{title}</div>
          <JoinInContent />
        </Layout>
      </>
    );
  }
}
