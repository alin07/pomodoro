import { useState } from 'react'
import { useInterval } from '../../hooks/useInterval'

import LoadingBar from '../loadingBar/loadingBar'
import dingSound from '../../assets/ding.mp3'
import nextArrow from '../../assets/next.svg'

import './pomodoro.css'

function Pomodoro() {
  const STUDY_TIME = 1500, BREAK_TIME = 300, LONG_BREAK_TIME = 900, DEFAULT_SESSION = 1;

  const [timer, setTimer] = useState<number>(STUDY_TIME)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)
  const [isBreakTime, setIsBreakTime] = useState<boolean>(false)
  const [sessionCount, setSessionCount] = useState<number>(DEFAULT_SESSION)
  const [totalSessionCount, setTotalSessionCount] = useState<number>(DEFAULT_SESSION)

  const [totalTime, setTotalTime] = useState<number>(STUDY_TIME);


  const dingAudio = new Audio(dingSound);

  const everySecond = () => {
    if (isTimerRunning) {
      if (timer === 0) {
        dingAudio.play()
        if (sessionCount === totalSessionCount && isBreakTime) {
          setIsTimerRunning(false)
        } else if (sessionCount !== totalSessionCount && isBreakTime) {
          setSessionCount(sc => sc + 1)
        }

        setIsBreakTime(bt => !bt)
        const currentTotalTime = isBreakTime
          ? STUDY_TIME
          : sessionCount % 4 === 0
            ? LONG_BREAK_TIME
            : BREAK_TIME


        setTimer(currentTotalTime)
        setTotalTime(currentTotalTime)

        return
      }
      setTimer(t => t - 1)
    }
  }

  useInterval(everySecond, 1000);

  return (
    <div>
      <h2>{isBreakTime ? 'Break' : 'Pomodoro'}</h2>
      <LoadingBar progress={timer} total={totalTime}
        isBreak={isBreakTime} />
      <div>
        <button onClick={() => {
          if (sessionCount >= totalSessionCount) {
            setSessionCount(DEFAULT_SESSION);
          }
          setIsTimerRunning(tr => !tr)
        }}>
          {isTimerRunning ? 'pause' : 'start'}
        </button>
      </div>
      <div>
        <button onClick={() =>
          totalSessionCount > 1 &&
          setTotalSessionCount(sc => sc - 1)
        }>
          <img className="next-arrow point-left" src={nextArrow} />
        </button>

        <span>session {sessionCount} out of {totalSessionCount}</span>
        <button onClick={() => setTotalSessionCount(sc => sc + 1)}>
          <img className="next-arrow" src={nextArrow} />
        </button>
      </div>
    </div>
  )
}

export default Pomodoro
