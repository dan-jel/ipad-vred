import styled from "styled-components";
import Button from "./Button";
import { useState, useEffect } from "react";

const Timer = () => {
  const [active, setActive] = useState(true);
  const [start, setStart] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(Math.floor((Date.now() - start) / 1000));
    }, 1000);

    return () => clearInterval(secTimer);
  }, [start]);

  return (
    <Container>
      <Button active={active} setActive={setActive} setStart={setStart} />
      {active && <h2>it takes 1 minute</h2>}
      {!active && (
        <h2>
          {("0" + Math.floor(time / 60).toString()).slice(-2)}:
          {("0" + Math.floor(time % 60).toString()).slice(-2)}
        </h2>
      )}
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
