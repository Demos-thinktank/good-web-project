// import Head from "next/head";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { attributes, react as HomeContent } from "../content/home.md";

function Home() {
  let { title, cats } = attributes;
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
  }, []);
  return (
    <>
      {loading && (
        <Layout myClass="home-bkg">
          {/* <article>
            <h1>{title}</h1>
            <HomeContent />
            <ul>
              {cats.map((cat, k) => (
                <li key={k}>
                  <h2>{cat.name}</h2>
                  <p>{cat.description}</p>
                </li>
              ))}
            </ul>
          </article> */}
          {/* <div className="research-table"></div> */}
          {/* <style jsx>
            {`
              .research-table {
              }
            `}
          </style> */}
        </Layout>
      )}
    </>
  );
}

export default Home;
