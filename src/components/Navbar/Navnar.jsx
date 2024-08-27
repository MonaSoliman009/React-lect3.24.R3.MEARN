
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { themeContext } from './../../contexts/theme';
import Button from '../Button/Buuton';
import { authContext } from './../../contexts/Auth';
const Header = () => {


    const lang =useSelector((state)=>state.lang.language)
    const translate =useSelector((state)=>state.lang.translate)

    const {theme,setTheme}  = useContext(themeContext)
  const {isAuth,setAuth} = useContext(authContext)

    return (
        <>
           <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to="/">{translate.Home} {lang}</Link>
           <Link to="/about" className="mx-5">{translate.About}</Link>
           
           <Link to="/contact">{translate.Contact}</Link>
           <Link to="/products" className="mx-5">{translate.Products}</Link>
         {(!isAuth)?<Link to="/login">{translate.Login}</Link>:<Link to="/login" onClick={()=>{
          localStorage.removeItem("token")
          setAuth(false)
         }}>Logout</Link>}  
           <p>{theme}</p>
           <Button theme={theme} setTheme={setTheme}/>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </>
    );
}

export default Header;
