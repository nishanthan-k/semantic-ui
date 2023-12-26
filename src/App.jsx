import { BrowserRouter, Routes, Route } from "react-router-dom"
import AllRoutes from "./pages/AllRoutes"
import ButtonRoutes from "./routes/ButtonRoutes"
import GeneralBtn from "./elements/Buttons/GeneralBtn"
import AnimatedBtn from "./elements/Buttons/AnimatedBtn"
import LabeledBtn from "./elements/Buttons/LabeledBtn"
import IconBtn from "./elements/Buttons/IconBtn"
import GroupBtn from "./elements/Buttons/GroupBtn"
import ContainerRoutes from "./routes/ContainerRoutes"
import ContainerBox from "./elements/Container/ContainerBox"
import FlagRoutes from "./routes/FlagRoutes"
import FlagComponent from "./elements/Flag/FlagComponent"


const App = () => {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route exact path="/" element={<AllRoutes />} />

          <Route exact path="/button" element={<ButtonRoutes />} />
          <Route exact path="/button/GeneralBtn" element={<GeneralBtn />} />
          <Route exact path="/button/AnimatedBtn" element={<AnimatedBtn />} />
          <Route exact path="/button/LabeledBtn" element={<LabeledBtn />} />
          <Route exact path="/button/IconBtn" element={<IconBtn />} />
          <Route exact path="/button/GroupBtn" element={<GroupBtn />} />

          <Route exact path="/container" element={<ContainerRoutes />} />
          <Route exact path="/container/ContainerBox" element={<ContainerBox />} />

          <Route exact path="/flag" element={<FlagRoutes />} />
          <Route exact path="/flag/Flag" element={<FlagComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App