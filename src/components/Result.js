import React, { useContext } from 'react'
import { ScoreContext } from '../App'
import result from '../undraw_winners_ao2o 2.svg'
function  Result() {
    const {setOut,handleNext,setCount,count}=useContext(ScoreContext)
    const handleTryAgain=()=>{
        setOut(false)
        handleNext();
        setCount(0)
    }
    return (
        <>
            <div style={{textAlign: 'center'}} className='w3-animate-opacity'>
            <img src={result} alt="winner" style={{width: '80%',paddingTop:'20px'}}/>
            </div>
                <div style={{textAlign: 'center',paddingTop:'20px'}} className='w3-animate-opacity'>
                <h3 style={{color:'#3f3d56',fontWeight:'700'}}>Results</h3>
                <span style={{color:'#686591',fontWeight: 500}}>You got <span className='ans'>{count}</span> correct anwers</span>
                </div>
                <div style={{textAlign: 'center'}} className='w3-animate-opacity'>
                <button className='btn tryAgn' onClick={handleTryAgain}>Try again</button>
                </div>
        </>
    )
}

export default Result
