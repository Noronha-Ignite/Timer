import { nanoid } from "nanoid";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { TimerInfo } from "../models/Timer";
import { useHistory } from "./useHistory";

type TimerContextProps = {
  handleToggleTimer: () => void;
  setCurrentTimerInfo: (data: Partial<TimerInfo>) => void;
  
  currentTimer: TimerInfo;
}

const TimerContext = createContext({} as TimerContextProps);

export const TimerContextProvider = ({ children }: { children: ReactNode }) => {

  const { insertTimerIntoHistory, updateLastTimer } = useHistory();
  const [timerDecreasingInterval, setTimerDecreasingInterval] = useState<number>();
  const [currentTimer, setCurrentTimer] = useState<TimerInfo>({
    listedInHistory: false,
    ended: false,
    running: false,
    secondsRemaining: 0,
    title: ""
  });

  const setCurrentTimerInfo = (data: Partial<TimerInfo>) => {
    setCurrentTimer(previous => ({
      ...previous,
      ...data,
    }));
  }
  const handleToggleTimer = () => {
    const timer: TimerInfo = {
      ...currentTimer,
      listedInHistory: true,
      running: !currentTimer.running
    }

    if (!currentTimer.listedInHistory) {
      insertTimerIntoHistory(timer)
      setCurrentTimerInfo({
        listedInHistory: true
      })
    }

    updateLastTimer(timer)

    setCurrentTimerInfo({
      running: !currentTimer.running,
    });
  }

  useEffect(() => {
    if (currentTimer.running) {
      const interval = setInterval(() => {
        setCurrentTimer(previous => ({
          ...previous,
          secondsRemaining: previous.secondsRemaining - 1,
        }))
      }, 1000);
  
      setTimerDecreasingInterval(interval);
  
      return () => clearInterval(interval);
    } else {
      clearInterval(timerDecreasingInterval);
    }
  }, [currentTimer]);

  return (
    <TimerContext.Provider
      value={{
        currentTimer,
        setCurrentTimerInfo,
        handleToggleTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}

export const useTimer = () => useContext(TimerContext);