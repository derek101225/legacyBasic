import React from 'react';
import './App.css';
// import FunctionalComponent from './Components/Functional/FunctionalComponent'
// import ClassComponent from './Components/Class/ClassComponent'
import Counter from './Components/Counter/Counter'
import Fetch from './Components/Fetch/Fetch'

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent /> */}
      {/* <ClassComponent /> */}
      <Counter />
      <Fetch />
    </div>
  );
}

export default App;
