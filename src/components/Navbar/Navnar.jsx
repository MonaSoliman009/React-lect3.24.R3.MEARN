
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { themeContext } from './../../contexts/theme';
import Button from '../Button/Buuton';
const Header = () => {


    const lang =useSelector((state)=>state.lang.language)
    const {theme,setTheme}  = useContext(themeContext)

    return (
        <>
           <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to="/">Home {lang}</Link>
           <Link to="/about" className="mx-5">About Us</Link>
           
           <Link to="/contact">Contact</Link>
           <Link to="/products" className="mx-5">Products</Link>

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
