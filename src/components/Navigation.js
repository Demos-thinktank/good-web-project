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
  let query = router.query;
  // console.log("p", query);
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
      colour = "gray";
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
              style={{
                color: path.includes("research") && "rgb(239, 87, 52)",
              }}
            >
              <NavDropdown.Item as={Link} href="/research">
                <a
                  className={
                    query == "/security-and-sovereignty"
                      ? "navdropdown-link-selected"
                      : "navdropdown-link"
                  }
                >
                  Research Home
                </a>
              </NavDropdown.Item>
              <NavDropdown.Divider
                style={{
                  borderColor: "rgb(239, 87, 52, 0.4)",
                }}
              />
              <NavDropdown.Item
                as={Link}
                href="/research/security-and-sovereignty"
              >
                <a
                  className={
                    query == "/security-and-sovereignty"
                      ? "navdropdown-link-selected"
                      : "navdropdown-link"
                  }
                >
                  Security and Sovereignty
                </a>
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/research/the-digital-citizen">
                <a
                  className={
                    query == "/the-digital-citizen"
                      ? "navdropdown-link-selected"
                      : "navdropdown-link"
                  }
                >
                  The Digital Citizen
                </a>
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/research/the-digital-commons">
                <a
                  className={
                    path == "/research/the-digital-commons"
                      ? "navdropdown-link-selected"
                      : "navdropdown-link"
                  }
                >
                  The Digital Commons
                </a>
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
              font-size: 1.4rem;
              font-weight: 600;
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
