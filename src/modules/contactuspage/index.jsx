import React from 'react'
import "./style.css"
import { Container, Col, Row } from 'react-bootstrap'
import contactus_banner from "../../asserts/images/contactus_banner.svg"
import call_ from "../../asserts/images/call_.svg"
import email from "../../asserts/images/email.svg"
import address from "../../asserts/images/address.svg"
import Publish from '../../components/publish'
import Footer from '../../components/footer'
export default function Contactuspage() {
  return (
    <main>
      <section className='homepage_banner'>
        <div className='contactus-banner-image'>
          <img src={contactus_banner} alt="" />
        </div>
      </section>
      <section className='contact-subsection'>
        <Container>
          <div className="section-heading-dark">
            <p>
              Contact Us
            </p>
          </div>
          <Row className="contact_details">
            <Col md={4}>
              <div className="card_contact">
                <div className="contact_img">
                  <img src={call_} alt="" />
                </div>
                <div className='contact-description'>
                <div className="contact-heading">
                  <p>+91 8448444943<br />GARHWA</p>
                </div>
                <div className="contact-sub-heading">
                  <p>Sukbana, Near Railway Crossing, Garhwa, Jharkhand - 822114</p>
                </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card_contact">
                <div className="contact_img">
                  <img src={email} alt="" />
                </div>
                <div className='contact-description'>
                <div className="contact-heading">
                  <p>contactus@grozep.com<br />RANCHI (Headquarter)</p>
                </div>
                <div className="contact-sub-heading">
                  <p>3rd floor Hariom Tower, Lalpur, Ranchi, Jharkhand-830001</p>
                </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card_contact">
                <div className="contact_img">
                  <img src={address} alt="" />
                </div>
                <div className='contact-description'>
                <div className="contact-heading">
                  <p>3rd floor Hariom Tower, Lalpur, Ranchi,<br /> Jharkhand-830001</p>
                </div>
                <div className="contact-sub-heading">
                  <p>Sukbana, Near Railway Crossing, Garhwa, Jharkhand - 822114</p>
                </div>
                </div>
              </div>
            </Col>
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
