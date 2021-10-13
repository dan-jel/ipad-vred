import PhoneFrame from "./components/PhoneFrame";
import styled from "styled-components";

function App() {
  return (
    <Container className="App">
      <PhoneFrame />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #eaebed;
`;

export default App;
