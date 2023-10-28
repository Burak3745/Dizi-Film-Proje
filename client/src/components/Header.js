import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../image/King.png";
import SmileFace from "../image/smiley-face.png"

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user, setUser]);
  const AdminControl = user && user.userType
  return (
    <Navbar
    className="bg-body-tertiary"
      collapseOnSelect
      bg="auto"
      variant="dark"
      expand="lg"
      >
      <Container fluid>
        <Nav.Link href="/">
          <img
            alt="Logo"
            src={Logo}
            style={{height: "90px", width: "auto"}}
            className="d-inline-block align-top"
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" hidden={!user}>
            <Nav.Link href="/diziler" className="text-light">
              Diziler
            </Nav.Link>
            <Nav.Link href="/filmler" className="text-light">
              Filmler
            </Nav.Link>
          </Nav>

          <Nav>
            <img
              hidden={!user}
              height="35"
              width="50"
              src={SmileFace}
              alt=""
              className="rounded-circle me-1"
              fluid
            />
            
            <NavDropdown
              hidden={!user}
              title={user && user.email}
              id="dropdownMenu"
            >
              <NavDropdown.Item className="dropdownItem" onClick={() => navigate("/message")}>
                Bildirimler
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownItem" onClick={() => navigate("/profile")}>
                Profil
              </NavDropdown.Item>
              { AdminControl == "ADMIN" ? (
              <NavDropdown.Item className="dropdownItem" onClick={() => navigate("/movielist")}>
                Admin Panel
              </NavDropdown.Item>
              ):(<div></div>)
              }
            </NavDropdown>

            {user ? (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  borderRadius: "6px",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#e95420",
                }}
                onClick={(e) => {
                  localStorage.removeItem("user");
                  setUser(null);
                  navigate("/");
                }}
              >
                {" "}
                Çıkış yap{" "}
              </motion.button>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
