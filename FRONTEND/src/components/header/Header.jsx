
import "./Header.css"
import logo from "../../img/logo.png"


const Header = () => {
  return (
    <header className="header">
        <section className="header__containerLogo">
            <img className="header__containerLogo-img" src= {logo} alt="" />
               
            <h1 className="header__containerLogo-title">box music</h1>
            </section>
        
        
            <nav className="header__nav">
                <a href="#">INICIO</a>
                <a href="#">DFSASDFSA</a>
                <a href="#">DSAFSADF</a>
            </nav>
                 
    </header>
  )
}

export default Header
