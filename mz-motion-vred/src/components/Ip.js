import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import * as data from "../ApiKey.json";

const Ip = ({ setCelsius }) => {
  const [ip, setIp] = useState("loading...");

  const getData = async () => {
    const ipRes = await axios.get("https://geolocation-db.com/json/");
    setIp(ipRes.data.IPv4);

    const lat = ipRes.data.latitude;
    const long = ipRes.data.longitude;

    const url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      long +
      "&appid=" +
      data.key +
      "&units=metric";
    const tempRes = await axios.get(url);
    const temp = tempRes.data.main.temp;
    setCelsius(Math.floor(temp));
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  });

  return (
    <Container>
      <h1>{ip}</h1>
      <h2>current Ip.</h2>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  position: relative;
  left: 15px;
  h1 {
    font-size: 25px;
    font-weight: 400;
  }
  h2 {
    font-weight: 300;
    color: #bfc0c3;
  }
  h1,
  h2 {
    margin: 0;
  }
`;

export default Ip;
