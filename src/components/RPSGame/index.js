import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';


export default function RPSGame(props) {
    const [timerFlag, setTimerFlag] = useState(true)
    const [result, setResult] = useState("")
    const [timer, setTimer] = useState(5)
    const [randomOne, setRandomOne] = useState({})

    const { selected, rpsobj, handlePlayAgain, handleScore } = props
    const housePickedObj = rpsobj?.filter((f) => f.value == selected)
    

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer - 1);
            if (timer == 0) {
                pickRandomObj();
            }
        }, [1000])

    }, [timer])


    function pickRandomObj() {
        const houseNotPickedObj = rpsobj?.filter((f) => f.value != selected)
        const randomIndex = Math.floor(Math.random() * houseNotPickedObj.length);
        const randomobj = houseNotPickedObj?.[randomIndex]
        setRandomOne(randomobj)
        calculateResult(randomobj);
        
    }

    function calculateResult(randomobj) {
        setTimerFlag(false);
        if (housePickedObj[0].value == "rock" && randomobj?.value == "scissor") {
            handleScore();
            setResult("YOU WON")
        }
        if (housePickedObj[0].value == "scissor" && randomobj?.value == "paper") {
            handleScore();
            setResult("YOU WON")
        }
        if (housePickedObj[0].value == "paper" && randomobj?.value == "rock") {
            handleScore();
            setResult("YOU WON")
        }
        else {
            setResult("YOU LOSE")
        }
    }

    const handlePlay = () => {
        handlePlayAgain();
    }


    return (
        <>
            <div className='rps-text-container'>
                <p className='you-picked'>YOU PICKED</p>
                <p>THE HOUSE PICKED</p>
            </div>
            <div className="rps-circle-selected-container">
                <div className='selected-circle' style={{ border: `1rem solid ${housePickedObj[0].color}` }}>
                    <img alt="selectedone" className="selected-one" src={housePickedObj[0]?.imgSrc} />
                </div>
                {result && result.length > 0 && <div className='result-container'>
                    <p className='you-won'>{result}</p>
                    <Button variant="contained" sx={{ width: "8rem", backgroundColor: "white", color: "black" }} onClick={handlePlay}>PLAY AGAIN</Button>
                </div>}

                <div className='selected-circle' style={{ border: randomOne ? `1rem solid ${randomOne?.color}` : "" }}>
                    {timerFlag ? <p className="timer-countdown">{timer}</p> : <img alt="rock" className="selected-one" src={randomOne?.imgSrc} />}

                </div>
            </div>
        </>

    )
}
