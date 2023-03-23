import React from 'react'
import "./style.css"
import { Container, Row, Col } from 'react-bootstrap'
import deliver from "../../asserts/images/deliver.svg"
import grocery from "../../asserts/images/grocery.png"
import shared1 from "../../asserts/images/shared1.png"
import shared2 from "../../asserts/images/shared2.png"
import img1 from "../../asserts/images/img1.png"
import img2 from "../../asserts/images/img2.png"
import img3 from "../../asserts/images/img3.png"
import img4 from "../../asserts/images/img4.png"
import img5 from "../../asserts/images/img5.png"
import Grocery_delivery from "../../asserts/images/Grocery_delivery.png"
import Publish from '../../components/publish'
import Footer from '../../components/footer'
export default function Aboutuspage() {
  return (
    <main>
      <section className='aboutUs_banner'>
        <div className='banner-image'>
          <Container>
            <Row className='aboutus_row'>
              <div className='aboutus_btn'>
                <div className=' aboutUs-dark-button'>
                  <button>Shop it</button>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
      <section className='subsection-aboutUs'>
        <Container>
          <Row className='aboutUs-row'>
            <Col md={6}>
              <div className='aboutUs-left-section'>
                <div className="section-heading-dark ">
                  <p>Who are we?</p>
                </div>
                <div className="under">
                </div>
                <div className="section-sub-heading-light-aboutUs">
                  <p>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
                </div>
              </div>
            </Col>
            <Col md={6} className="aboutUs-right-section">
              <div className="grocery_image">
                <img src={grocery} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='subsection-aboutus'>
        <Container>
          <div className='aboutUs-heading'>
            <div className="section-heading-dark">
              <p>Our shared philosophy</p>
            </div>
          </div>
          <div className="under"></div>
          <Row className='two-section'>
            <Col md={6}>
              <div className='left-shared'>
                <div className="groc">
                  <img src={shared1} alt="" />
                </div>
                <div className='aboutUs-sub-heading'>
                  <div className="section-sub-heading-dark">
                    <p>
                      Mindsets & leverage points
                    </p>
                  </div>
                  <div className="section-sub-heading-light-aboutUs-width">
                    <p>
                      We believe that being a leader is a mindset, much more than it is a title. And are codifying the operating principles that leaders at Blinkit follow at all times
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="right-shared">
                <div className="groc">
                  <img src={shared2} alt="" />
                </div>
                <div className='aboutUs-sub-heading'>
                  <div className="section-sub-heading-dark">
                    <p>
                      Learning organisation
                    </p>
                  </div>
                  <div className="section-sub-heading-light-aboutUs-width">
                    <p>
                      We are a group of people who are constantly learning the skills we need, and continuously improving upon ourselves to create the future we desire
                    </p>
                  </div>
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
              <div className='aboutUs-banner-left-setion'>
                <div className="main-heading-dark">
                  <p className="info">Get your <span className="section-heading-green">groceries</span> within 30 minutes</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="Grocery_delivery">
                <img src={Grocery_delivery} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='profile-section'>
        <Container>
          <div className="aboutUs-heading">
            <div className='section-heading-dark'>
              <p>
                Some of the people building grozep
              </p>
            </div>
          </div>
          <div className="under"></div>
          <div className="profiless">
            <Row className="profile_row">
              <Col md={4}>
                <div className="profile">
                  <div className="profile_Image">
                    <img src={img1} alt="" />
                  </div>
                  <div className="name_designation">
                    <div className="name_heading">
                      <p>Allahrakha Siddiqui</p>
                    </div>
                    <div className="designatio_heading">
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="profile">
                  <div className="profile_Image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="name_designation">
                    <div className="name_heading">
                      <p>Kumar Shashi</p>
                    </div>
                    <div className="designatio_heading">
                      <p>Manager</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="profile">
                  <div className="profile_Image">
                    <img src={img3} alt="" />
                  </div>
                  <div className="name_designation">
                    <div className="name_heading">
                      <p>Mahendran</p>
                    </div>
                    <div className="designatio_heading">
                      <p>UI/UX</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="profile_row">
              <Col md={4}>
                <div className="profile">
                  <div className="profile_Image">
                    <img src={img4} alt="" />
                  </div>
                  <div className="name_designation">
                    <div className="name_heading">
                      <p>AAAA</p>
                    </div>
                    <div className="designatio_heading">
                      <p>UI</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="profile">
                  <div className="profile_Image">
                    <img src={img5} alt="" />
                  </div>
                  <div className="name_designation">
                    <div className="name_heading">
                      <p>Pushpanjali</p>
                    </div>
                    <div className="designatio_heading">
                      <p>UI</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="profile">
                  <div className="profile_Image">
                    <img src={img5} alt="" />
                  </div>
                  <div className="name_designation">
                    <div className="name_heading">
                      <p>yyyyy</p>
                    </div>
                    <div className="designatio_heading">
                      <p>yyyyy</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
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
