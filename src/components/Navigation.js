import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect } from "react";
// import logo from "../src/assets/img/logo.png";

export default function Navigation() {
  useEffect(() => {
    document.getElementById("basic-nav-dropdown").removeAttribute("href");
  }, []);
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      <Navbar expand="md" style={{ marginBottom: "2rem" }}>
        <Navbar.Brand href="/">
          <img
            src="/assets/img/logo.png"
            width="100"
            height="auto"
            // className="d-inline-block align-top"
            alt="The good web project logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav width="inherit"> */}
          <div className="nav-items">
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/our-supporters">
              Our Supporters
            </Nav.Link>
            <Nav.Link as={Link} href="/join-in">
              Join In
            </Nav.Link>
            {/* <Nav.Link href="/research">Research</Nav.Link> */}
            <NavDropdown
              // as={button}
              title="Research"
              id="basic-nav-dropdown"
              // disabled
            >
              <NavDropdown.Item href="/research">
                Research Home
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/research/security-and-sovereignty">
                Security and Sovereignty
              </NavDropdown.Item>
              <NavDropdown.Item href="/research/the-digital-citizen">
                The Digital Citizen
              </NavDropdown.Item>
              <NavDropdown.Item href="/research/the-digital-commons">
                The Digital Commons
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/login">
              Login
            </Nav.Link>
          </div>
          {/* </Nav> */}
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
        {/* <div>
          <li>
            <Link href="/our-supporters">
              <a className="">Our Supporters</a>
            </Link>
          </li> */}
        {/* <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                blog
              </a>
            </Link>
          </li> */}
        {/* </ul> */}
        <style jsx>
          {`
            .nav-items {
              width: 100%;
              display: flex;
              justify-content: space-around;
              align-items: center;
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
