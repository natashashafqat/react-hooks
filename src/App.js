import './App.css';
import { useEffect, useState } from 'react';

function Basketball() {

  // Hook to add React state to function components
  // Means you don't need to convert function to class
  // Passing 0 to useState provides an initial state for count
  const [count, setCount] = useState(0);
  const [basketballMake, setBasketball] = useState('wilson');

  function updateVariables(count, basketballMake) {
    setCount(count+1);
    if (basketballMake === 'wilson') {
      setBasketball('nike');
    }
    else {
      setBasketball('wilson');
    }
  }

  // componentDidMount, componentDidUpdate, componentWillUnmount combined
  // Runs additional code after React has updated the DOM (re-rendered)
  useEffect(() => {
    document.title = `Your basketball brand is ${basketballMake}`;
  }, [basketballMake]);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <p>Your basketball brand is {basketballMake}.</p>
      <button id="clickButton" onClick={() => updateVariables(count, basketballMake)}>
        Click Me
      </button>
    </div>
  );
}

export default Basketball;
