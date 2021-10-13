import styled from "styled-components";
import { ReactComponent as SVGIcon } from "../icons/Button.svg";

const Button = () => {
  return (
    <Container>
      <Blur>
        <Shadow />
        <Reflection />
        <Circle />
      </Blur>
      <StyledIcon />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
`;

const Circle = styled.div`
  height: 150px;
  width: 150px;
  background: #eaebed;
  border-radius: 100%;
  position: absolute;
  top: 75px;
  left: 75px;
`;

const Blur = styled.div`
  height: 100%;
  width: 100%;
  filter: blur(20px);
`;

const Shadow = styled.div`
  height: 150px;
  width: 150px;
  background: rgba(46, 49, 54, 0.16);
  position: absolute;
  top: 100px;
  left: 100px;
  border-radius: 100%;
`;

const Reflection = styled.div`
  height: 150px;
  width: 150px;
  background: white;
  position: absolute;
  top: 50px;
  left: 50px;
  border-radius: 100%;
`;

const StyledIcon = styled(SVGIcon)`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 120px;
  left: 120px;
`;

export default Button;
