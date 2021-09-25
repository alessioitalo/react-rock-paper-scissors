import { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Container from './components/Container';
import Circle from './components/Circle';
import Rules from './components/Rules';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className='App'>
      <Scoreboard score={score} />
      <Container>
        <span>
          <Circle type='paper' />
          <Circle type='scissors' />
        </span>
        <Circle type='rock' />
      </Container>
      <Rules />
    </div>
  );
}

export default App;
