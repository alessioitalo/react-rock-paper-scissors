import { useState } from 'react';
import Scoreboard from './components/Scoreboards';
import Container from './components/Container';
import Circle from './components/Circle';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className='App'>
      <Scoreboard score={score} />
      <Container>
        <Circle />
        <Circle />
        <Circle />
      </Container>
      <button>RULES</button>
    </div>
  );
}

export default App;
