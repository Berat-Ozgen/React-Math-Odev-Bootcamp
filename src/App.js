import './App.css';
import {useState} from 'react'
import Final from './component/Final';
import Game from './component/Game';
import Start from './component/Start';
import { MainContext } from './context/MainContext';






function App() {

  const Data = [
    {
      text: "10 x 10",
      options: [
        { id: 0, text: "80", isCorrect: false },
        { id: 1, text: "90", isCorrect: false },
        { id: 2, text: "100 ", isCorrect: true }
      ],
    },
    {
      text: "4 x 8",
      options: [
        { id: 0, text: "32", isCorrect: true },
        { id: 1, text: "40", isCorrect: false },
        { id: 2, text: "44", isCorrect: false }
      ],
    },
    {
      text: "6 x 6",
      options: [
        { id: 0, text: "36", isCorrect: true },
        { id: 1, text: "66 ", isCorrect: false },
        { id: 2, text: "44", isCorrect: false }
      ],
    },
    {
      text: "10 x 0",
      options: [
        { id: 0, text: "10", isCorrect: false },
        { id: 1, text: "0", isCorrect: true },
        { id: 2, text: "11", isCorrect: false }
      ],
    },
    {
      text: "5 x 5",
      options: [
        { id: 0, text: "55", isCorrect: false },
        { id: 1, text: "20", isCorrect: false },
        { id: 2, text: "25", isCorrect: true }
      ],
    },
    {
      text: "5 x 10",
      options: [
        { id: 0, text: "50", isCorrect: true },
        { id: 1, text: "40", isCorrect: false },
        { id: 2, text: "30", isCorrect: false }
      ],
    },
    {
      text: "8 * 9",
      options: [
        { id: 0, text: "71", isCorrect: true },
        { id: 1, text: "81", isCorrect: false },
        { id: 2, text: "90", isCorrect: false }
      ],
    },
    {
      text: "3 x 3",
      options: [
        { id: 0, text: "10", isCorrect: false },
        { id: 1, text: "9", isCorrect: true },
        { id: 2, text: "6", isCorrect: false }
      ],
    },
    {
      text: "5 x 6",
      options: [
        { id: 0, text: "32", isCorrect: false },
        { id: 1, text: "29", isCorrect: false },
        { id: 2, text: "30", isCorrect: true }
      ],
    },
    {
      text: "2 x 20",
      options: [
        { id: 0, text: "30", isCorrect: false },
        { id: 1, text: "40", isCorrect: true },
        { id: 2, text: "50", isCorrect: false }
      ],
    },
    ];





  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [score,setScore] = useState(0)
  const [start,setStart] = useState(true)
  const [truee, setTruee] = useState([true])
  const [final,setFinal] = useState(false)
  const [textt,setTextt] = useState([])



  const value = {
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    start,
    setStart,
    truee,
    setTruee,
    final,
    setFinal,
    textt,
    setTextt,
    Data
  }


  return (
    <MainContext.Provider value={value}>

    {start === true ?
     <Start/> :
      <Game/>}

    </MainContext.Provider>
  );
}

export default App;

