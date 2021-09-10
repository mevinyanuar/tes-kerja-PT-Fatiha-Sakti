import React, { Fragment } from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Topbar />
        <Container>
          <Sidebar />
        </Container>
      </Router>
    </Fragment>   
  );
}

export default App;
