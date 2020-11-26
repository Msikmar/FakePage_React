import React, { useContext } from "react"
import Logo from "../../assets/images/logo.png";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import RoutePath from "../router/RoutePath";
import { UserContext } from "../../global/Userprovider"
import { useHistory } from "react-router-dom"

function Header() {

    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser) ? 
            <a className="username text-uppercase ml-2" onClick={() => logout()}> <i class="fas fa-user"></i> &nbsp; {authenticatedUser}</a> :
            <Nav.Link className="text-color-custom-links text-uppercase ml-2" href={RoutePath.login}><i class="fas fa-sign-in-alt"></i>  &nbsp; Login</Nav.Link>
    }

    const displayLinksIfAuthenticated = () => {
        return (authenticatedUser) ?
        <Nav className="mr-auto">
        <Nav.Link className="text-color-custom-links text-uppercase ml-2" href={RoutePath.home}>Home &nbsp;<i class="fas fa-home"></i></Nav.Link>
        <Nav.Link className="text-color-custom-links text-uppercase ml-2" href={RoutePath.news}>News &nbsp;<i class="far fa-newspaper"></i></Nav.Link>
        <Nav.Link className="text-color-custom-links text-uppercase ml-2" href={RoutePath.contact}>Contact us &nbsp;<i class="fas fa-user-friends"></i></Nav.Link>
        </Nav> :
        <Nav className="mr-auto"></Nav> 
    }

    const logout = () => {
        localStorage.removeItem("username")
        setAuthenticatedUser(false)
    }

    return (
        <>
        <Navbar sticky="top" className="bg-custom" expand="lg">
        <div className="ml-5"></div>
        <img className="navbarLogo bg-custom mr-3" src={Logo} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {displayLinksIfAuthenticated()}
            <Form inline className="mr-5">
                <FormControl type="text" placeholder="Search" className="mr-sm-2 mt-3 searchInput" />
                <Button className="btn btn-outline-light mt-3 searchButton" variant="outline-success">Search</Button>
            </Form>
            <Nav className="mr-auto">
                { displayUserIfAuthenticated()}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
      </>
    )
} 
export default Header
