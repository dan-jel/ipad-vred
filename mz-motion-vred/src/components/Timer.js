import styled from "styled-components";
import Button from "./Button";

const Timer = () => {
  return (
    <Container>
      <Button />
      <h2>it takes 1 minute</h2>
    </Container>
  );
};

const Container = styled.div`
  height: 350px;
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0;
    color: #bfc0c3;
    font-weight: 400;
  }
`;

export default Timer;
