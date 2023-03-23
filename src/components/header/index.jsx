import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import logo from "../../asserts/images/logo.svg"
import hamburger from "../../asserts/images/hamburger.svg"
import { Link, NavLink } from 'react-router-dom';
export default function Header() {
    return (
        <Navbar as={'header'} collapseOnSelect expand="lg" className='page-header'>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" className="logo_img" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" ><img src={hamburger} /></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto menu-items" >
                        <NavLink to="/" exact activeClassName="active" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/careerspage" activeClassName="active" className="nav-link" >
                            Careers
                        </NavLink>
                        <NavLink to="/aboutuspage" activeClassName="active" className="nav-link">
                            About Us
                        </NavLink>
                        <NavLink to="/contactuspage" activeClassName="active" className="nav-link" >
                            Contact Us
                        </NavLink>
                        <NavLink to="/privacypolicy" activeClassName="active" className="nav-link d-lg-none" >
                            Privacy and Policies
                        </NavLink>
                        <NavLink to="/termsandconditions" activeClassName="active" className="nav-link d-lg-none" >
                            Terms and Conditions
                        </NavLink>
                        <NavLink to="/faqs" activeClassName="active" className="nav-link d-lg-none" >
                            FAQs
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
