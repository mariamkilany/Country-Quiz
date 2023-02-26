import './App.css';
import svg from './undraw_adventure_4hum 1.svg' 
import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import loading from './Wedges-3s-200px.gif'
import Question from './components/Question';
import Result from './components/Result';


export const ScoreContext = createContext(null)

function App() {
  const [countries,setCountries]=useState(null)
  const [random,setRandom]=useState(Math.floor(Math.random()*249))
  const [randomQ,setRandomQ]=useState(Math.floor(Math.random()*3))
  const [done,setDone]=useState(false)
  const [isCorrect,setIsCorrect]=useState(null)
  const [isWrongIndex,setIsWrongIndex]=useState(null)
  const [randomAns,setRandomAns]=useState(Math.floor(Math.random()*4))
  const [out,setOut]=useState(false)
  const [count,setCount]=useState(0)
    useEffect(() => {
      setTimeout(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{
        setCountries(res.data)
      })
      },1000)
    }, [])



    const handleNext =()=>{
      setDone(false)
      setRandom(Math.floor(Math.random()*250))
      setRandomQ(Math.floor(Math.random()*3))
      setIsCorrect(null)
      if(isWrongIndex!==null)
      setOut(true)
      setIsWrongIndex(null)
      setRandomAns(Math.floor(Math.random()*4))
      
    }

    return(
    <ScoreContext.Provider value={{setIsCorrect,setDone,setIsWrongIndex,isCorrect,isWrongIndex , done , handleNext,randomAns,count,setCount,setOut}}>
    <div className="container row">
    <div className="quesCont col-8 col-sm-6 col-md-4 col-xl-3">
    <h4 className="heading">Country Quiz</h4>
    <img src={svg} alt="hum" className="icon1" />
    {countries===null?
    <img src={loading} className="loading" alt="loading" /> 
    :
    
    !out?
    <Question country={countries[random]} randomQ={randomQ} countries={countries} random={random} />
    :
    <Result/>
  }
    </div>
    </div>
    </ScoreContext.Provider>
  );
}

export default App;
