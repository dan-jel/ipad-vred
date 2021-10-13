import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Ip = () => {
  const [ip, setIp] = useState("loading...");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIp(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

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
