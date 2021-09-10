import React, { Fragment } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { Route } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import PersonalList from "../../pages/PersonnelList";
import "./Sidebar.css";

function Sidebar() {
  return (
    <Fragment>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} className="menu-list">
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link className="nav-linkss" eventKey="first">
                  <FaIcons.FaHome className="home-icon" />{" "}
                  <span className="home-icon">Beranda</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <FaIcons.FaUsers className="user-icon" />
                  <span className="user-icon"> Personal List</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  <FaIcons.FaCalendarAlt className="calender-alt" />
                  <span className="calender-alt"> Daily Attendace</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h1>Home</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Route>
                  <PersonalList />
                </Route>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  );
}

export default Sidebar;
