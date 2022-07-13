import {useState} from 'react'
import { MainContext,useContext } from '../context/MainContext';
import StartSVG from '../SVG/startSVG';
import '../App.css';



function Start() {

    const {currentQuestion,setCurrentQuestion,score,setScore,start,setStart,truee,setTruee} = useContext(MainContext)


    const startClick = () => {
        setStart(false)
        localStorage.removeItem("true")
        localStorage.removeItem("score")
        localStorage.removeItem("currentQ")
    }

    return (
        <div className='start-component'>

            <h2 className='start-h2'>Mathematics Game</h2>

            <div className='information-table'>
                <h4 className='h4-1'>Total Score: {localStorage.getItem("score") === null ? 0 :localStorage.getItem("score") }</h4>
                <h4 className='h4-2'>Total Questions: {localStorage.getItem("currentQ") === null ? 0 :localStorage.getItem("currentQ")}</h4>
                <h4 className='h4-3'>Correct Answers: { localStorage.getItem("true") === null ? 0 :localStorage.getItem("true")}</h4>
            </div>

           <div className='start-div' onClick={() => startClick()}> <span className='span-start'>start</span>  <span className='startSVG'> <StartSVG/> </span> </div> 

           

        </div>
    )
}

export default Start;
