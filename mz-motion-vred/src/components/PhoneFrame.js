import styled from "styled-components";
import { useState } from "react";

import Logo from "./Logo";
import Arrow from "./Arrow";
import Temp from "./Temp";
import Ip from "./Ip";
import Timer from "./Timer";

const PhoneFrame = () => {
  const [celsius, setCelsius] = useState();

  return (
    <Container>
      <Container2>
        <Logo />
        <Arrow />
        <Temp celsius={celsius} />
        <Ip setCelsius={setCelsius} />
        <Timer />
      </Container2>
    </Container>
  );
};

const Container = styled.div`
  background: #eaebed;
  display: flex;
  height: 750px;
  width: 350px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  box-shadow: -64px -64px 99px rgba(255, 255, 255, 0.5);
`;

const Container2 = styled(Container)`
  box-shadow: 64px 64px 99px rgba(46, 49, 54, 0.08);
  background-image: linear-gradient(-45deg, #eaebee 100%, #e7e8e9 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PhoneFrame;
