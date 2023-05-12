import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom';
import './App.css';

function Home() {
  return <h1>Bienvenido</h1>;
}


function Word() {
  const {word} = useParams();
  return <h1>The word is: {word}</h1>;
}

function ColorWord() {
  const {word, color1, color2} = useParams();

  return (
    <h1 style={{color: color1, backgroundColor: color2}}>The word is: {word}</h1>
  );
}

function Number() {
  const { number } = useParams();
  return <h1>{isNaN(+number) ? 'Esta ruta solo acepta números' : `The number is: ${number}`}</h1>
  }

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/hello">Palabra</Link>
            </li>
            <li>
              <Link to="/hello/blue/red">Palabra con color</Link>
            </li>
            <li>
              <Link to="/num/4">Número</Link>
              {/* <Link to="/4">Número</Link> */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:word" element={<Word />} />
          <Route path="/:word/:color1/:color2" element={<ColorWord />} />
          <Route path="/num/:number" element={<Number />} />
          {/* <Route path="/:number" element={<Number />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
