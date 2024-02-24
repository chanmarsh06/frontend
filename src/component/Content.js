import { Image, Input } from "antd";

import React from "react";
import { Col, Row, Button, Badge } from "reactstrap";
import Course from "../assests/img/111.png";
// const { Search } = Input;

const Content = () => {
  return (
    <>
      <Row className="mt-5">
        <Col className="mx-auto text-center">
          <h1>
            Learn with Focus <br /> Despite{" "}
            <span className="text-primary">ADHD</span>
          </h1>
        </Col>
      </Row>
      <Row
        className="text-center mx-auto"
        style={{ maxWidth: "75%", marginTop: "10px" }}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          voluptatum aperiam veniam eveniet provident maiores fuga fugiat
          molestias tempora quam sapiente dolor ut, odit recusandae aut ullam
          repellat id consectetur. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sunt consequatur
        </p>
      </Row>
      <Row
        className="text-center mx-auto"
        style={{ maxWidth: "40%", marginTop: "20px" }}
      >
        <Col className="d-flex">
          <Input
            placeholder="Search"
            style={{ width: "60%" }}
            className="me-3"
          />
          <Button color="primary" style={{ width: "40%" }}>
            Get Early Access
          </Button>
        </Col>
      </Row>
      <Row
        className="text-center mx-auto"
        style={{ maxWidth: "15%", marginTop: "20px" }}
      >
        <Badge color="primary" className="py-2" pill>
          💰27% Off Early Access
        </Badge>
      </Row>
      {/* <Row>
        <img src={Course} alt="Course" />
      </Row> */}
    </>
  );
};

export default Content;
