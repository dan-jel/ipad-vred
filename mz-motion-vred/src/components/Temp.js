import styled from "styled-components";
import { ReactComponent as SVGIcon } from "../icons/Temp.svg";

const Temp = ({ celsius }) => {
  return (
    <Container>
      <StyledIcon />
      <Box>
        <h1>{celsius} °C</h1>
        <h2>current temp.</h2>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 45px;
  position: relative;
  left: -10px;
`;

const StyledIcon = styled(SVGIcon)`
  margin: 5px 15px 0 0;
  width: 50px;
  height: 50px;
`;

const Box = styled.div`
  h1 {
    font-size: 50px;
    font-weight: 400;
  }
  h2 {
    font-weight: 300;
    color: #bfc0c3;
  }
  h1,
  h2 {
    margin: -5px 0 0 0;
  }
`;

export default Temp;
