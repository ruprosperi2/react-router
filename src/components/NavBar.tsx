import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}>
        <Link to={"/invoices"}>Invoices</Link>
        <Link to={"/espenses"}>Expenses</Link>
      </nav>
    </>
  )
}

export default NavBar