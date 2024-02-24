import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Col, Row } from "reactstrap";
import Logo from "../assests/img/askan logo.jpeg";
import { Image, Button } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Row>
      <Navbar>
        <Col>
          <NavbarBrand className="d-flex align-items-center">
            <ImageViewer src={Logo} />
            <span>
              Study
              <span className="text-primary w-100 font-weight-bold">Buddy</span>
            </span>
          </NavbarBrand>
        </Col>
        <Col className="d-flex justify-content-center w-100 font-weight-bold align-items-center ms-5">
          <Link to="/features" className="nav-link pe-3">
            Features
          </Link>
          <Link to="/pricing" className="nav-link pe-3">
            Pricing
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button type="primary">Get Started</Button>
        </Col>
      </Navbar>
    </Row>
  );
};

const ImageViewer = ({ src }) => {
  return (
    <Image.PreviewGroup
      preview={{
        onChange: (current, prev) =>
          console.log(`current index: ${current}, prev index: ${prev}`),
      }}
    >
      <Image src={src} alt="" width={50} />
    </Image.PreviewGroup>
  );
};

export default Header;
