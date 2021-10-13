import styled from "styled-components";
import { ReactComponent as SVGIcon } from "../icons/Logo.svg";

const Logo = () => {
  return <StyledIcon />;
};

const StyledIcon = styled(SVGIcon)`
  margin-top: 50px;
  width: 200px;
  height: 100px;
`;

export default Logo;
