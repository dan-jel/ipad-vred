import styled from "styled-components";
import { ReactComponent as SVGIcon } from "../icons/Button.svg";

const Button = ({ active, setActive, setStart }) => {
  const handleClick = (e) => {
    setActive(!active);
    if (active) {
      setStart(Date.now());
    }
  };

  return (
    <Container>
      <Blur>
        {active ? (
          <div>
            <ShadowOut />
            <ReflectionOut />
          </div>
        ) : (
          <div>
            <ShadowIn />
            <ReflectionIn />
          </div>
        )}
        <ShadowOut />
        <ReflectionOut />
        <Circle />
      </Blur>
      <StyledIcon onClick={handleClick} active={active} />
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

const ShadowOut = styled.div`
  height: 150px;
  width: 150px;
  background: rgba(46, 49, 54, 0.16);
  position: absolute;
  top: 100px;
  left: 100px;
  border-radius: 100%;
`;

const ReflectionOut = styled.div`
  height: 150px;
  width: 150px;
  background: white;
  position: absolute;
  top: 50px;
  left: 50px;
  border-radius: 100%;
`;

const ShadowIn = styled(ShadowOut)`
  background: white;
`;

const ReflectionIn = styled(ReflectionOut)`
  background: rgba(46, 49, 54, 0.16);
`;

const StyledIcon = styled(SVGIcon)`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 120px;
  left: 120px;
  :hover {
    cursor: pointer;
  }
  g {
    line {
      stroke: ${(props) => (props.active ? "#BFC0C3" : "#45dfeb")};
    }
    path {
      stroke: ${(props) => (props.active ? "#BFC0C3" : "#45dfeb")};
    }
  }
`;

export default Button;
