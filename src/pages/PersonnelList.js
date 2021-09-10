import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import moment from "moment";
import "./PersonnelList.css";

const renderData = (personnelList) => {
  return (
    <>
      {personnelList.map((item, index) => {
        return (
          <Row key={index}>
            <Card className="rounded-3 border-0  h-100 w-100 margin-card">
              <Card.Header className="bg-transparent d-flex justify-content-between">
                <div className="id-personnel">
                  Personnel ID:<span>123456</span>
                </div>
                <div>
                  <FaIcons.FaEllipsisH className="text-end" />
                </div>
              </Card.Header>
              <Card.Body className="row w-100">
                <div className="d-flex col-md-12 col-6 align-items-center justify-content-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={item.picture.large}
                      className="w-100 rounded-circle"
                      alt="profilespicture"
                    />
                  </div>
                </div>
                <Card.Text className="mt-3 col-md-12 col-6 card-text">
                  <div>
                    <div className="fw-bold text-muted">Name</div>
                    <div className="text-muted">
                      {item.name.first} {item.name.last}
                    </div>
                  </div>
                  <div>
                    <div className="fw-bold text-muted">Telephone</div>
                    <div className="text-muted">{item.phone}</div>
                  </div>
                  <div className="d-md-block d-none">
                    <div className="fw-bold text-muted">Birthday</div>
                    <div className="text-muted">
                      {moment(item.dob.date).format("D MMMM")}
                    </div>
                  </div>
                  <div className="d-md-block d-none">
                    <div className="fw-bold text-muted">Email</div>
                    <div className="text-muted">{item.email}</div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        );
      })}
    </>
  );
};

function PersonalList() {
  const [personnelList, setPersonnelList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const [pageNumberLimit] = useState(7);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(7);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(personnelList.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = personnelList.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=28")
      .then((res) => {
        setPersonnelList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <Fragment>
      <Container className="p-md-4 p-1 main-wrapper">
        <div className="p-3 bg-white">
          <Row>
            <Col md={7} className="title-text">
              <div className="d-block">
                <h2>PERSONNEL LIST</h2>
              </div>
              <div className="d-block">
                <h5>List of all Personnels</h5>
              </div>
            </Col>
            <Col md sm={12}>
              <InputGroup className="input-search">
                <InputGroup.Text
                  id="input"
                  className="bg-transparent border-end-0"
                >
                  <FaIcons.FaSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Find Personnels"
                  className="border-start-0"
                />
              </InputGroup>
            </Col>
            <Col md sm={12}>
              <Button className="text-secondary w-100 bg-white">
                Add Personnel <FaIcons.FaPlus />
              </Button>
            </Col>
          </Row>
        </div>
        <div className="mt-4">
          <Row md={4} sm={1} xs={1}>
            {renderData(currentItems)}
          </Row>
          <ul className="pageNumbers">
            <li>
              <button
                onClick={handlePrevBtn}
                disabled={currentPage === pages[0] ? true : false}
              >
                <FaIcons.FaChevronLeft />
                <span>Previous Page</span>
              </button>
            </li>
            <li>
              <button
                onClick={handleNextBtn}
                disabled={
                  currentPage === pages[pages.length - 1] ? true : false
                }
              >
                <span>Next Page</span>
                <FaIcons.FaChevronRight />
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </Fragment>
  );
}

export default PersonalList;
