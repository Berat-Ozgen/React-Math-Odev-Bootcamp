import React from 'react'
import Resart from '../SVG/Resart'
import { MainContext,useContext } from '../context/MainContext';
import '../App.css';


function Final() {


  const {Data,currentQuestion,setCurrentQuestion,score,setScore,start,setStart,truee,setTruee,final,setFinal, textt,setTextt} = useContext(MainContext)

  

  if(final) {
    document.body.style.background = "#2D2D2D";
  }


  const resartClick = () => {
      setScore(0)
      setCurrentQuestion(0)
      setFinal(false)
      localStorage.removeItem("true")
      localStorage.removeItem("score")
      localStorage.removeItem("currentQ")
      setTextt([])

  }


  console.log(textt)

  return (
    <div className='final-component'>

        <div className='final'>
            <h2 className='final-header'>Final</h2>
            <div className='point'>Point: {score}</div>
            <div className='questions'>Questions: {currentQuestion+1}</div>
            <div className='correct'>Correct Answers: {truee.length}</div>
            <div onClick={resartClick} className='resart'><Resart/></div>
        </div>

        

        <div className='Questions'>
            <h2 className='allQuestion'>All Question</h2>
     
             {textt.map((item,index) => (

              <p key={index}> {item} </p>

             ))}
           

        </div>

    </div>
  )
}

export default Final
