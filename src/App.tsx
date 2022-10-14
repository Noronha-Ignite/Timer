import { HistoryContextProvider } from "./hooks/useHistory";
import { TimerContextProvider } from "./hooks/useTimer";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <HistoryContextProvider>
      <TimerContextProvider>
        <AppRoutes />
      </TimerContextProvider>
    </HistoryContextProvider>
  )
}
