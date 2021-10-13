import { ReactComponent as SVGIcon } from "../icons/Arrow.svg";
import styled from "styled-components";

const Arrow = () => {
  return <StyledIcon />;
};

const StyledIcon = styled(SVGIcon)`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 60px;
  left: 40px;
`;

export default Arrow;
