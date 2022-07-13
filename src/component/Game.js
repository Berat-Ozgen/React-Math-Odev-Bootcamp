import {useState} from 'react'
import AnswerSVG from '../SVG/ANSWER';
import Human from '../SVG/HUMAN';
import Final from './Final';
import { MainContext,useContext } from '../context/MainContext';
import '../App.css';


function Game() {

  const {Data,currentQuestion,setCurrentQuestion,score,setScore,start,setStart,truee,setTruee,final,setFinal,textt,setTextt} = useContext(MainContext)

  




    const handleClick = (isCorrect,text) => {

     setTextt([...textt,text])

     console.log(textt)

      if(isCorrect) {

          setScore(score +10)
          document.body.style.background = "green";
          setTruee([...truee,isCorrect])
          localStorage.setItem("true",truee.length)
          localStorage.setItem("score",score + 10)
        
          
      }else {
        document.body.style.background = "red";
      }


      if(currentQuestion +1 < Data.length) {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion +1)
          localStorage.setItem("currentQ",currentQuestion +1)
          document.body.style.background = "#2D2D2D";
        }, 1000);

        
        
      } else {
        setFinal(true)
      }

    }


    



    if(final) {
     return<Final/>
    } else {

      return (
        <div className='game-component'>
    
          <nav className='navbar'>Score: {score} Tour: {currentQuestion +1} Questions: {currentQuestion +1} / {Data.length}</nav>
          
            <div className='answer'>
    
            {
              Data[currentQuestion].options.map((data)=>(
                <div key={data.id} onClick={() => handleClick(data.isCorrect,data.text)} className={`round-${data.id}`}> <AnswerSVG/> <span className='data-text'>{data.text}</span> </div>
              ))
            }
    
            </div>
    
            <div className='question'>
    
              <div className='Human'>
                <span className='human'><Human/></span>
                <div className='question'>{Data[currentQuestion].text}</div>
                </div>
    
            </div>
           
        </div>
      )

    }




 
}

export default Game;