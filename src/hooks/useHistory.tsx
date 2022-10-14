import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { TimerInfo } from "../models/Timer";

type HistoryContextProps = {
  history: TimerInfo[],
  insertTimerIntoHistory: (timer: TimerInfo) => void,
  updateLastTimer: (updatedTimer: TimerInfo) => void
}

const LOCAL_STORAGE_HISTORY_KEY = '@ignitetimer/timer-history';

const HistoryContext = createContext({} as HistoryContextProps)

export const HistoryContextProvider = ({ children }: { children: ReactNode }) => {
  const fetchInitialData = (): TimerInfo[] => {
    const localStorageHistoryStr = localStorage.getItem(LOCAL_STORAGE_HISTORY_KEY);

    if (!localStorageHistoryStr) return [];

    return JSON.parse(localStorageHistoryStr);
  }

  const updateHistoryInLocalStorage = (list: TimerInfo[]) => {
    localStorage.setItem(LOCAL_STORAGE_HISTORY_KEY, JSON.stringify(list))
  }

  const [history, setHistory] = useState<TimerInfo[]>(fetchInitialData);

  useEffect(() => {
    updateHistoryInLocalStorage(history);
  }, [history])

  const insertTimerIntoHistory = (timer: TimerInfo) => {
    setHistory(previous => [
      ...previous,
      timer,
    ])
  }

  const updateLastTimer = (updated: TimerInfo) => {
    setHistory(previous => [
      ...(previous.slice(0, -1)),
      updated
    ])
  }

  return (
    <HistoryContext.Provider value={{
      history,
      insertTimerIntoHistory,
      updateLastTimer
    }}>
      {children}
    </HistoryContext.Provider>
  )
}

export const useHistory = () => useContext(HistoryContext)