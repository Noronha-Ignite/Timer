import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Timer } from "./pages/Timer"
import { History } from "./pages/History"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}