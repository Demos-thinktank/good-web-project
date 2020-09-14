import Head from "next/head";
import Navigation from "./Navigation";

export default function Layout({ children, className }) {
  return (
    <div className={`root ${className ? className : ""}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main className="content">{children}</main>
      <style jsx>
        {`
          .root {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }
          .home-bkg {
            background: url("/assets/img/home-bkg.png");
            background-position: center bottom;
            background-size: cover;
          }

          //   @media (min-width: 767px) {
          //     .container {

          //     }
          //   }
        `}
      </style>
    </div>
  );
}
