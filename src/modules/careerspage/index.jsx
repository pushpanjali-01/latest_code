import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import map_ from "../../asserts/images/map_.svg"
import career_banner2 from "../../asserts/images/career_banner2.svg"
import Publish from '../../components/publish'
import Footer from '../../components/footer'
import "./style.css"
import { useLocation, useHistory } from 'react-router-dom'
export default function Careerspage() {
  const history = useHistory();
  const navigateToJobsPage = () => history.push('/jobspage');
  return (
    <main>
      <section className='career_banner'>
        <div className='career_banner_image'>
          <Container>
            <Row className='career_row'>
              <div className='career_btn'>
                <div className='dark-button'>
                  <button onClick={navigateToJobsPage}>View Jobs</button>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
      <section className='subsection-career-location'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='map_image'>
                <img src={map_} alt="" className="map_img" />
              </div>
            </Col>
            <Col md={6}>
              <div className='careers-section1'>
                <div className="main-heading-dark">
                  <p className="info">Flexibility to do your best work  <span className="section-heading-green">remotely</span> </p>
                </div>
                <div className="section-sub-heading-light">
                  <p>We’ve been remote first for nearly a decade nd have teammates in more than 80 cities worldwide. We go to great length to set you up for success from day one, and work hard to keep you connected.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='subsection-banner2'>
        <div className='career_banner2'>
          <img src={career_banner2} alt="" />
        </div>
      </section>
      <section className='subsection-card'>
        <Container>
          <Card className="card_ui">
            <div className="description">
              <div className="heading">
                <p>Open positions</p>
              </div>
              <div className="sub-heading_career">
                <p>We're hiring across the board in engineering, marketing and ops.</p>
              </div>
            </div>
            <div className="input_field">
              <input placeholder="Search from jobs below">
              </input>
            </div>
            <Container>
              <Row>
                <Col md={9}>
                  <div className="experience1">
                    <p className="desig">
                      IOS Developer - Buy4rarn-Retail
                    </p>
                    <p className="exp">
                      Experience: 2-7 years
                    </p>
                  </div>
                </Col>
                <Col md={3} >
                  <div className="viewbtn">
                    <button>View jobs</button>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="divider_line"></div>
            <Container>
              <Row>
                <Col md={9}>
                  <div className="experience">
                    <p className="desig">
                      UX and UI designer - Buy4rarn-Retail
                    </p>
                    <p className="exp">
                      Experience: 2-6 years
                    </p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="viewbtn1">
                    <button >View Jobs</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card>
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
