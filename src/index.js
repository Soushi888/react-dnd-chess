import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {observe} from './Game'
import {Board} from "./components/Board";

const root = document.getElementById('root')

observe((knightPosition) => ReactDOM.render(
  <Board knightPosition={knightPosition}/>, root))
document.getElementById('root')
;
