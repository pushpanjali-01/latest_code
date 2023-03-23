import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import applyjob_banner from "../../asserts/images/applyjob_banner.svg"
import "./style.css"
import axios from "axios";
import Publish from '../../components/publish';
import Footer from '../../components/footer';
export default function Applyjobpage() {
    const [uploadFile, setUploadFile] = React.useState();
    const [superHero, setSuperHero] = React.useState();
    const [uploadResponse, setUploadResponse] = React.useState();

    const submitForm = (event) => {
        event.preventDefault();

        const dataArray = new FormData();
        dataArray.append("uploadFile", uploadFile);

        axios
            .post("/", dataArray, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then((response) => {
                setUploadResponse(`File uploaded successfully
        
        POST - superHeroName
        value - ${superHero}
        
        FILE - uploadFile`);
            })
            .catch((error) => {
                setUploadResponse(`File uploaded successfully

        POST - superHeroName
        value - ${superHero}
        
        FILE - uploadFile`);
            });
    };
    return (
        <main>
            <section className='jobs-banner'>
                <div className='banner-image-jobpage'>
                    <img src={applyjob_banner} alt="" />
                </div>
            </section>
            <section className='applyjob-section'>
                <Container>
                    <div className='jobs_heading'>
                        <p>
                            Apply for Job
                        </p>
                    </div>
                    <Card>
                        <form onSubmit={submitForm}>
                            <Row>
                                <div className='job-rows'>
                                    <Col className='labelfield' md={3}>
                                        <label for="full_name">Full name </label>
                                    </Col>
                                    <Col className='inputfields' md={9}>
                                        <input name="full_name" id="fullName" type="text" placeholder='Mike.j' />
                                    </Col>
                                </div>
                                <div className='divider_line'></div>
                                <div className='job-rows' >
                                    <Col className='labelfield' md={3}>
                                        <label for="email">Email address </label>
                                    </Col>
                                    <Col className='inputfields' md={9}>
                                        <input name="email" id="email" type="text" placeholder='mikej@hotmail.com' />
                                    </Col>
                                </div>
                                <div className='divider_line'></div>
                                <div className='job-rows'>
                                    <Col className='text-labelfield' md={3}>
                                        <label for="Message">Message</label>
                                    </Col>
                                    <Col className='text-area' md={9}>
                                        <input type="textarea"
                                            name="Message"
                                            placeholder='Your cover letter/message sent to the employer'
                                        />
                                    </Col>
                                </div>
                                <div className='divider_line'></div>
                                <div className='job-rows'>
                                    <Col className='cv-labelfield' md={3}>
                                        <label for="cv">Upload CV</label>
                                    </Col>
                                    <Col className="cv-input" md={9}>
                                        <div>
                                            <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
                                            <p className='cv-text'> Upload your CV/resume or any other relevant file. Max file size: 50 MB.</p>
                                        </div>
                                    </Col>
                                </div>
                                <div className='divider_line'></div>
                                <Row className='job-rows'>
                                    <div className='submit_button'>
                                        <button type="submit">Submit</button>
                                    </div>
                                </Row>
                            </Row>
                        </form>
                    </Card>
                </Container>
            </section>
            <section>
                <Publish/>
            </section>
            <section>
                <Footer/>
            </section>
        </main>
    )
}
