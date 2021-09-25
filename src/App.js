import { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Container from './components/Container';
import Circle from './components/Circle';
import Rules from './components/Rules';
import Modal from './components/Modal'

function App() {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false)

  const showRulesHandler = ()=>{
    setShowRules(!showRules) 
  }

  return (
    <div className='App'>
    {showRules && <div className="backdrop"><Modal onClick={showRulesHandler}/></div>}
      <Scoreboard score={score} />
      <Container>
        <span>
          <Circle type='paper' />
          <Circle type='scissors' />
        </span>
        <Circle type='rock' />
      </Container>
      <Rules onClick={showRulesHandler}/>
    </div>
  );
}

export default App;
