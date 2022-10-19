import { Route, Routes } from "react-router-dom"
import { InformacionBasica } from "../components/InformacionBasica"
import { Login } from "../components/Login"

export const AppRouter = () => {
  return (
    <Routes>

        <Route path="*"  element={<Login/>}/>
        <Route path="Informacion"  element={ <InformacionBasica/>} />

    </Routes>
  )
}
