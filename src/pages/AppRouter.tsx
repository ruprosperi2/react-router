import { Routes, Route, Link } from "react-router-dom"
import Expenses from "./Expenses"
import Invoices from "./Invoices"
import NavBar from "../components/NavBar"


const AppRouter = () => {
  return (
    <>
      <h1>AppRouter</h1>
      <hr />

      <NavBar />

      <Routes>
        <Route path={"invoices"} element={<Invoices />} />
        <Route path={"espenses"} element={<Expenses />} />
      </Routes>
    </>
  )
}

export default AppRouter