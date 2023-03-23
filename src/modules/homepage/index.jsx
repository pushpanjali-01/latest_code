import React from 'react'
import "./style.css"
import Container from 'react-bootstrap/esm/Container'
import { Row, Col } from 'react-bootstrap'
import mobile from "../../asserts/images/mobile.png";
import lays from "../../asserts/images/lays.svg";
import fortune from "../../asserts/images/fortune.svg"
import biscuit from "../../asserts/images/biscuit.svg"
import horlicks from "../../asserts/images/horlicks.svg"
import hairoil from "../../asserts/images/hairoil.svg"
import dairymilk from "../../asserts/images/dairymilk.svg"
import superfast from "../../asserts/images/superfast_.svg"
import loyaltypoints from "../../asserts/images/loyaltypoints_.svg"
import instantrefund from "../../asserts/images/instantrefund_.svg"
import map_ from "../../asserts/images/map_.svg"
import placeorder from "../../asserts/images/placeorder.svg"
import ordershipment from "../../asserts/images/ordershipment.svg"
import enjoytime from "../../asserts/images/enjoytime.svg"
import profile from "../../asserts/images/profile.svg"
import left from "../../asserts/images/left_.svg"
import right from "../../asserts/images/right_.svg"
import double_quotes from "../../asserts/images/double_quotes.svg"
import Publish from '../../components/publish';
import Footer from '../../components/footer';
import Carousal from '../../components/carousal';

// import {Col} from 'react-bootstrap/esm/Col'
export default function Homepage() {
    return (
        <main>
            <section className='hompage_banner'>
                <Container>
                    <Row>
                        <Col md={6} className="banner-left-setion">
                            <Row>
                                <div className="main-heading-light">
                                    <p>Get your groceries within 30 minutes</p>
                                </div>
                            </Row>
                            <Row>
                                <div className='main-sub-heading-light'>
                                    <p>
                                        Explore wide range of products with exclusive offers and earn loyalty points on purchase.
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div className='dark-button'>
                                    <button>DOWNLOAD NOW</button>
                                </div>
                            </Row>
                        </Col>
                        <Col md={6} className="banner-right-section">
                            <div className='outer-section'>
                                <div className="inner-circle">
                                    <img src={fortune} className="fortune" alt=""></img>
                                    <img src={lays} className="lays" alt=""></img>
                                    <img src={biscuit} className="biscuit" alt=""></img>
                                    <img src={mobile} className="mobileImg" alt=""></img>
                                    <img src={horlicks} className="horlicks" alt=""></img>
                                    <img src={hairoil} className="hairoil" alt=""></img>
                                    <img src={dairymilk} className="dairymilk" alt=""></img>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="subsection">
                <Container>
                    <div className='section-heading-dark'>
                        <p>
                            Why buy from us?
                        </p>
                    </div>
                    <Row className='Images-row'>
                        <Col md={4}>
                            <div className='props-images'>
                                <img src={superfast} alt="" />
                            </div>
                            <div className='description-section'>
                                <div className='section-sub-heading-dark'>
                                    <p>Superfast delivery</p>
                                </div>
                                <div className='section-sub-heading-light'>
                                    <p>Order will be delivered<br /> within 30 minutes</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='props-images'>
                                <img src={loyaltypoints} alt="" />
                            </div>
                            <div className='description-section'>
                                <div className='section-sub-heading-dark'>
                                    <p>Earn loyalty points</p>
                                </div>
                                <div className='section-sub-heading-light'>
                                    <p>Earn exclusive loylty points<br /> on purchase</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='props-images'>
                                <img src={instantrefund} alt="" />
                            </div>
                            <div className='description-section'>
                                <div className='section-sub-heading-dark'>
                                    <p>Instant refund</p>
                                </div>
                                <div className='section-sub-heading-light'>
                                    <p>Get instant refund on order <br />cancelled/returned</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='subsection-gray-shade'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='map_image'>
                                <img src={map_} alt="" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='location-description'>
                                <Row>
                                    <div className='right-heading-dark'>
                                        <p>Delivery Area</p>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='right-sub-heading-light'>
                                        <p>
                                            We are currently delivering 2,000+ <br />daily in 2 major cities within Jharkhand. <br />We're coming to your city soon...
                                        </p>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="location-list">
                                        <ul>
                                            <li className="location1">
                                                Garhwa
                                            </li>
                                            <li className="location2">
                                                Ranchi
                                            </li>
                                        </ul>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='subsection'>
                <Container>
                    <div className='section-heading-dark'>
                        <p>
                            How it works?
                        </p>
                    </div>
                    <Row className='Images-row'>
                        <Col md={4}>
                            <div className='outer'>
                                <div className='shaded-circle1'>
                                    <img src={placeorder} alt="" />
                                </div>
                            </div>
                            <div className='description-section'>
                                <div className='section-sub-heading-dark'>
                                    <p>Place an order</p>
                                </div>
                                <div className='section-sub-heading-light'>
                                    <p>Choose from wide range<br /> of products</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='outer'>
                                <div className='shaded-circle2'>
                                    <img src={ordershipment} alt="" />
                                </div>
                            </div>
                            <div className='description-section'>
                                <div className='section-sub-heading-dark'>
                                    <p>Order shipment</p>
                                </div>
                                <div className='section-sub-heading-light'>
                                    <p>Our delivery partner will<br /> be at your door</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='outer'>
                                <div className='shaded-circle3'>
                                    <img src={enjoytime} alt="" />
                                </div>
                            </div>
                            <div className='description-section'>
                                <div className='section-sub-heading-dark'>
                                    <p>Enjoy your time</p>
                                </div>
                                <div className='section-sub-heading-light'>
                                    <p>boom! you'll never have <br />to wait in queue again</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='subsection-gray-shade'>
                <Container>
                    <div className="section-heading-dark">
                        <p>What people say about us?</p>
                    </div>
                    <Row className='review-row'>
                        <Col md={1}></Col>
                        <Col md={9}>
                            <Carousal />
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Publish />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}
