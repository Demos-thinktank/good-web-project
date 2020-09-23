import React from "react";
import Layout from "../components/Layout";

function Home() {
  const link = [
    { rel: "preload", href: "/assets/img/home-bkg.png", as: "image" },
  ];
  const title = "The Good Web Project";

  return <Layout rootClass="home-bkg" links={link} title={title}></Layout>;
}

export default Home;
