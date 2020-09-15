import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    document.getElementById("basic-nav-dropdown").removeAttribute("href");
  }, []);
  const router = useRouter();
  let path = router.pathname;
  let colour;
  switch (path) {
    case "/":
    case "/research":
      colour = "white";
      break;
    case "/about":
    case "/our-supporters":
    case "/join-in":
    case path.match(/\/research.+/):
    case "/login":
      colour = "gray";
      break;
    default:
      colour = "orange";
  }
  return (
    <>
      <Navbar expand="md" style={{ marginBottom: "2rem" }}>
        <Navbar.Brand href="/">
          <img
            src="/assets/img/logo.png"
            width="auto"
            height="120"
            alt="The good web project logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="nav-items">
            <Nav.Link as={Link} href="/about">
              <a
                className={path == "/about" ? "nav-link-selected" : "nav-link"}
              >
                About
              </a>
            </Nav.Link>
            <Nav.Link as={Link} href="/our-supporters">
              <a
                className={
                  path == "/our-supporters" ? "nav-link-selected" : "nav-link"
                }
              >
                Our Supporters
              </a>
            </Nav.Link>
            <Nav.Link as={Link} href="/join-in">
              <a
                className={
                  path == "/join-in" ? "nav-link-selected" : "nav-link"
                }
              >
                Join In
              </a>
            </Nav.Link>
            <NavDropdown
              title="Research"
              id="basic-nav-dropdown"
              className={
                path.match(/\/research.+/) ? "nav-link-selected" : "nav-link"
              }
            >
              <NavDropdown.Item
                href="/research"
                className={
                  path == "/research/security-and-sovereignty"
                    ? "navdropdown-link-selected"
                    : "navdropdown-link"
                }
              >
                Research Home
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/research/security-and-sovereignty"
                className={
                  path == "/research/security-and-sovereignty"
                    ? "navdropdown-link-selected"
                    : "navdropdown-link"
                }
              >
                Security and Sovereignty
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/research/the-digital-citizen"
                className={
                  path == "/research/the-digital-citizen"
                    ? "navdropdown-link-selected"
                    : "navdropdown-link"
                }
              >
                The Digital Citizen
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/research/the-digital-commons"
                className={
                  path == "/research/the-digital-commons"
                    ? "navdropdown-link-selected"
                    : "navdropdown-link"
                }
              >
                The Digital Commons
              </NavDropdown.Item>
            </NavDropdown>
            <Button as={Link} href="/login">
              <a className="nav-btn">Login</a>
            </Button>
          </div>
        </Navbar.Collapse>
        <style jsx>
          {`
            .nav-items {
              width: 100%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              font-size: 1.2rem;
              font-weight: 500;
              color: ${colour} !important;
            }

            @media (max-width: 767px) {
              .nav-items {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              }
            }
          `}
        </style>
      </Navbar>
    </>
  );
}
