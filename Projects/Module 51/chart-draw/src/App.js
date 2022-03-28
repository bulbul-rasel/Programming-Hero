import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpecialLine from './components/SpecialLine/SpecialLine';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })
  return (
    <div className="App">
      <animated.div style={props}>I will fade in</animated.div>
      <SpecialLine></SpecialLine>
      <MyLineChart></MyLineChart>
    </div>
  );
}

export default App;
