import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import footer_logo from "../../asserts/images/logo.svg"
import insta from "../../asserts/images/insta.svg"
import ln from "../../asserts/images/ln.svg"
import youtube from "../../asserts/images/youtube.svg"
import "./style.css"
export default function Footer() {
    return (
        <main>
            <section className='footer-section'>
                <Container>
                    <Row>
                        <div className='footer_logo'>
                            <img src={footer_logo} alt="" />
                        </div>
                    </Row>
                    <Row>
                        <Col md={6} className="footer-left-section">
                            <Row>
                                <Col md={12} className="company-info1">
                                    <Row>
                                        <div>
                                            <div className='footer-heading-white'>
                                                <p>RANCHI (Headquarter)</p>
                                            </div>
                                            <div className='footer-sub-heading'>
                                                <p>3rd floor Hariom Tower, Lalpur, Ranchi, Jharkhand-830001</p>
                                            </div>
                                            <div className="footer-heading-white">
                                                <p>contactus@grozep.com</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='footer-heading-white'>
                                                <p>FOLLOW US</p>
                                            </div>
                                            <div className="socilaMedia">
                                                <img src={insta} alt="" />
                                                <img src={ln} alt="" />
                                                <img src={youtube} alt="" />
                                            </div>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div>
                                            <div className='footer-heading-white'>
                                                <p>GARHWA</p>
                                            </div>
                                            <div className='footer-sub-heading'>
                                                <p>Sukbana, Near Railway Crossing, Garhwa, Jharkhand - 822114</p>
                                            </div>
                                            <div className='footer-heading-white'>
                                                <p>+91 8448444943</p>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} className="footer-right-section">
                            <Row>
                                <Col md={12} className="company-info2">
                                    <Row>
                                        <div className='footer-heading-white'>
                                            <p>COMPANY</p>
                                        </div>
                                        <div className="footer-list">
                                            <ul>
                                                <li>
                                                    <a href="aboutuspage">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="/careerspage">Careers</a>
                                                </li>
                                                <li>
                                                    <a href="/contactuspage">Contact Us</a>
                                                </li>
                                                <li>
                                                    <a href="/privacypolicy">Privacy Policies</a>
                                                </li>
                                                <li>
                                                    <a href="/termsandconditions">Terms & Conditions</a>
                                                </li>
                                                <li>
                                                    <a href="/faqs">FAQs</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="company">
                                            <div className="footer-heading-white">
                                                <p>
                                                    DELIVERY AREAS
                                                </p>
                                            </div>
                                            <div className="footer-list">
                                                <ul>
                                                    <li>
                                                        Garhwa
                                                    </li>
                                                    <li>
                                                        Ranchi
                                                    </li>
                                                    <li>
                                                        Jamshedpur
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <div className="divider">
                        </div>
                    </Row>
                    <div className='footer-down-section'>
                        <Row>
                            <Col md={12} className="footer-column">
                                <Row>
                                    <div className="footer-copy-right">
                                        <p>Copyright © 2023 Grozep Inc. All rights reserved</p>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='footer-country'>
                                        <p>India</p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section>

            </section>
        </main>
    )
}
