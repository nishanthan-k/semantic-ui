import { BrowserRouter, Routes, Route } from "react-router-dom"
import AllRoutes from "./pages/AllRoutes"
import ButtonRoutes from "./routes/ButtonRoutes"
import GeneralBtn from "./elements/Buttons/GeneralBtn"
import AnimatedBtn from "./elements/Buttons/AnimatedBtn"

const App = () => {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route exact path="/" element={<AllRoutes />} />

          <Route exact path="/button" element={<ButtonRoutes />} />
          <Route exact path="/button/GeneralBtn" element={<GeneralBtn />} />
          <Route exact path="/button/AnimatedBtn" element={<AnimatedBtn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App