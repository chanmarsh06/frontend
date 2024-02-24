import { Card, Col, Row } from "antd";
import React, { Fragment, useState } from "react";
import "../assests/css/card.css";

const MainCard = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className="my-3"
      gutter={16}
      style={{ maxWidth: "50%", margin: "auto" }}
    >
      <Row>
        <Col span={24}>
          <Card bordered={false} style={{ backgroundColor: "#f5fafe" }}>
            <Row gutter={16}>
              <Col span={12}>
                <Card
                  bordered={false}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <h5>summaraize long lecture</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, velit vero? Cupiditate porro aliquid cumque sint
                    excepturi repudiandae expedita quidem ducimus,
                  </p>
                  <div className="mt-2">
                    <a href="google.com">Get Started🤩🤗 </a>
                  </div>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  style={{
                    backgroundColor: "rgba(252, 152, 123, 0.5)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Card
                    className="antdCard"
                    bordered={false}
                    loading={loading}
                    style={{ flex: "1" }}
                  ></Card>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} className="mt-3">
        <Col span={12}>
          <Card
            bordered={false}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h5>summaraize long lecture</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              velit vero? Cupiditate porro aliquid cumque sint excepturi
              repudiandae expedita quidem ducimus,
            </p>
            <Card style={{ backgroundColor: "#0ca9ff" }}>
              <Row>
                <Col>
                  <Card
                    style={{
                      width: "300%",

                      marginBottom: "10px",
                    }}
                  ></Card>
                  <Card
                    style={{
                      width: "250%",

                      marginBottom: "10px",
                    }}
                  ></Card>
                  <Card
                    style={{
                      width: "400%",

                      marginBottom: "10px",
                    }}
                  ></Card>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            bordered={false}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h5>Asl Question and Answer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              velit vero? Cupiditate porro aliquid cumque sint excepturi
              repudiandae expedita quidem ducimus,
            </p>
            <Card
              style={{
                backgroundColor: "#0ca9ff",
                height: "60%",
              }}
            >
              <Row>
                <Col>
                  <Card
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    what Means constitution
                  </Card>
                  <Card
                    loading={loading}
                    style={{
                      marginBottom: "10px",
                    }}
                  ></Card>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MainCard;
