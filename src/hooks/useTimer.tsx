import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type TimerInfo = {
  secondsRemaining: number;
  running: boolean;
  ended: boolean;
  title: string;
}

type TimerContextProps = {
  handleToggleTimer: () => void;
  setCurrentTimerInfo: (data: Partial<TimerInfo>) => void;
  
  currentTimer: TimerInfo;
  timerHistory: TimerInfo[];
}

const TimerContext = createContext({} as TimerContextProps);

export const TimerContextProvider = ({ children }: { children: ReactNode }) => {
  const [timerDecreasingInterval, setTimerDecreasingInterval] = useState<number>();
  const [timerHistory, setTimerHistory] = useState<TimerInfo[]>([]);
  const [currentTimer, setCurrentTimer] = useState<TimerInfo>({
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
    setCurrentTimer(previous => ({
      ...previous,
      running: !previous.running,
    }));
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
        timerHistory
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}

export const useTimer = () => useContext(TimerContext);