import React, { useState , useEffect} from 'react'
import IconPaper from "../../images/icon-paper.svg"
import IconRock from "../../images/icon-rock.svg"
import IconScissor from "../../images/icon-scissors.svg"
import RPSGame from "../RPSGame"

export default function RPS() {
    const [score, setScore] = useState(0)
    const [playRPS, setPlayRPS] = useState(false)
    const [selected, setSelected] = useState(null)

    const handlePlay = (e) => {
        setPlayRPS(true);
        setSelected(e)
    }

    const handlePlayAgain = (e) => {
        setPlayRPS(false);
    }


    const handleScore = (e) => {
        setScore(prev => prev + 1);
    }

    useEffect(()=> {

    },[playRPS])

    const rpsobj = [{
        id: 1,
        value: "paper",
        imgSrc : IconPaper,
        color: "#5d7bf3"
    },
    {
        id: 2,
        value: "rock",
        imgSrc : IconRock,
        color: "#e55a62"
    },
    {
        id: 3,
        value: "scissor",
        imgSrc : IconScissor,
        color: "#e9b134"
    }]

    return (
        <div className='rps-container'>
            <div className="rps-sub-container">
                <div className='text-container'>
                    <div className='text-sub-container'>
                        <p className='rock-text'>ROCK</p>
                        <p className='rock-text'>PAPER</p>
                        <p className='rock-text'>SCISSORS</p>
                    </div>
                    <div className='score-container'>
                        <p className='score'>SCORE</p>
                        <p className='score-value'>{score}</p>
                    </div>

                </div>
                {
                    !playRPS ?
                    <div className="rps-circle-container">
                            <div className='row'>
                                <div className='circle paper' onClick={() => handlePlay("paper")}>
                                    <img alt="paper" src={IconPaper} />
                                </div>
                                <div className='circle rock' onClick={() => handlePlay("rock")}>
                                    <img alt="rock" src={IconRock} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='circle scissor' onClick={() => handlePlay("scissor")}>
                                    <img alt="scissor" src={IconScissor} />
                                </div>

                            </div>
                        </div>
                        
                        : <RPSGame selected={selected} rpsobj={rpsobj} handlePlayAgain={handlePlayAgain} handleScore={handleScore}/>
                }
            </div>
        </div>
    )
}
