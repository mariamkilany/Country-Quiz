import React, { useContext} from 'react'
import { ScoreContext } from '../App';

function Question(props) {
    const {isCorrect,isWrongIndex,done, handleNext,randomAns,setIsCorrect,setDone,setIsWrongIndex,count,setCount,setOut}=useContext(ScoreContext)
    const country = props.country
    console.log(country)
    const randomQ =parseInt(props.randomQ);
    const countries = props.countries
    const random = props.random;
    const questions = ['Which country does this flag belong to?','is the capital of','What is the capital of']
    var i =0
    const question = randomQ===1? country.capital[0]+' '+questions[randomQ]: randomQ===2? questions[randomQ]+' '+country.name.common : questions[randomQ];
    const choises=['','','','']
    console.log(randomQ)
    const newChoises = randomQ===2? choises.map((choise,index)=>{
        if(index===randomAns)
            return country.capital[0]
        else {
            i++
            return countries[parseInt(random+i)%250].capital[0]
        }
    }):
    choises.map((choise,index)=>{
        if(index===randomAns)
            return country.name.common
        else {
            i++
            return countries[parseInt(random+i)%250].name.common
        }
    })
    const handleCorrect =(answer)=>{
        if(answer===randomAns){
            setIsCorrect(answer)
            setCount(count+1)
        }
        else{
            setIsWrongIndex(answer)
            setIsCorrect(randomAns)
        }
        setDone(true)
    }
    return (
        <>
        <div className="quesTxt">
        {randomQ===0?<img src={country.flags.svg} className="flag" />:''}
            <h5 className="ques">
            {question}
            </h5>
        </div>
        {
            newChoises.map((choise,index)=>{
                return(
        <div className={`answer w3-center w3-animate-left  ${isCorrect===index?'correct':''} ${isWrongIndex===index?'wrong':''}`} onClick={()=>{handleCorrect(index)}}>
            <span className={`choise`}>{String.fromCharCode(65+index)}</span>
            <span className="ansTxt">
            {choise}
            </span>
        </div>
                )
            })
        }
        <div className={`row d-flex flex-row-reverse  w3-animate-left ${!done?'d-none':''}`} style={{paddingRight: '15px'}}>
            <button className='btn nxtBtn col-5 ' onClick={handleNext} >Next</button>
        </div>
        </>
    )
}

export default Question
