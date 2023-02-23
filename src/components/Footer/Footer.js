
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://impp.imerit.net/">
              iMPP
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://imerit.net/datastudio/peopleplatform/">
              About Us
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://www.imerit.net"
            target="_blank"
          >
            iMPP
          </a>{" "}
          for iMerit
        </div>
      </Container>
    </footer >
  );
}

export default Footer;
