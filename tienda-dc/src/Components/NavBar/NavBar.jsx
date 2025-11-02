import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
      <h1>Tienda DC</h1>
      <nav>
        <ul>
          <li>Maquinas</li>
          <li>Accesorios</li>
          <li>Consumibles</li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
    
  )
}

export default NavBar