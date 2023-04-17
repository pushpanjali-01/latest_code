import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import play_store_download from "../../asserts/images/play_store_download.svg"
import app_store_download from "../../asserts/images/app_store_download.svg"
import mobile_up from "../../asserts/images/mobile_up.png"
import mobile_down from "../../asserts/images/mobile_down.png"
import mob1_cover from "../../asserts/images/mob1_cover.svg"
import mob1_inner from "../../asserts/images/mob1_inner.svg"
import mob2_cover from "../../asserts/images/mob2_cover.svg"
import mob2_inner from "../../asserts/images/mob2_inner.svg"
import "./style.css"
export default function Publish() {
    return (
        <main>
            <section className='subsection-publish'>
                <Container>
                    <Row>
                        <Col md={6} className="banner-left-setion">
                            <Row>
                                <div className='main-heading-dark'>
                                    <p>Groceries in <br />your pocket</p>
                                </div>
                            </Row>
                            <Row>
                                <div className="heading-small">
                                    <p>Order your daily needs & house hold items<br />on the go, with the all-new Grozep app.</p>
                                </div>
                            </Row>
                            <div>
                                <Row>
                                    <Col md={6}>
                                        <div className='download_images'>
                                            <div>
                                                <img src={play_store_download} alt="" />
                                            </div>
                                            <div>
                                                <img src={app_store_download} alt="" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6} className="mobile_display">
                            <Row>
                                <div className='mobile_down'>
                                    <img src={mob2_inner} alt='' className='mob2_inner' />
                                    <img src={mob2_cover} alt="" className='mob2_cover' />
                                </div>
                            </Row>
                            <Row>
                                <div className='mobile_up'>
                                    <img src={mob1_inner} alt='' className='mob1_inner' />
                                    <img src={mob1_cover} alt="" className='mob1_cover' />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}
