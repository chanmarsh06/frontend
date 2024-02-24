import React, { Fragment } from "react";
import { Container } from "reactstrap";
import Header from "./component/Header";
import Content from "./component/Content";

import MainCard from "./component/MainCard";

const App = () => {
  return (
    <Fragment>
      <Container>
        <Header />
        <Content />
      </Container>
      <MainCard />
    </Fragment>
  );
};

export default App;
