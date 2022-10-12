import { TimerContextProvider } from "./hooks/useTimer";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <TimerContextProvider>
      <AppRoutes />
    </TimerContextProvider>
  )
}
