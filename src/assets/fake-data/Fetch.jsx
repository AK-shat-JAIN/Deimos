import React, { useState } from "react";
// import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
// import {} from 'react-router-dom'
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Fetch = () => {
  const [data, setData] = useState([]);

  const fetchdata = () => {
    fetch(
      "https://proxy.cors.sh/https://deimos-backend.zoronium.repl.co/api/menu/",
      {
        headers: {
          "x-cors-api-key": "temp_2d6559a2c271f90d6cf00c1751843ad0",
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        const fetchData = result;
      });
  };
  return fetchdata;
};

export default Fetch;
