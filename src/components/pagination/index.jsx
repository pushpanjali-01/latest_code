
import * as React from "react";
import Box from "@mui/material/Box";
import { Pagination, Typography } from "@mui/material";
// import { Container } from "react-bootstrap";
import { Container, Row, Col, } from 'react-bootstrap'
import "./style.css"
import jobs_banner from "../../asserts/images/jobs_banner.svg"
import openings from "../../asserts/images/openings.svg"
import job_location from "../../asserts/images/job_location.svg"
import vertical_divider from "../../asserts/images/vertical_divider.svg"
import right_arrow from "../../asserts/images/right_arrow.svg"
import experience_vector from "../../asserts/images/experience_vector.svg"
import { useLocation, useHistory } from "react-router-dom";
function Paginationpage() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const navigate = useHistory()
    const navigateToApplyJobPage = () => {
        navigate.push('/applyjobpage')
    }
    return (<div className="App">

        <Box
            sx={{
                margin: "auto",
                width: "fit-content",
                alignItems: "center",
            }}>
            <Typography fontSize={32} align="center">
                <section className='job-section'>
                    <Container>
                        <div className='jobs_heading'>
                            <p>Job Details</p>
                        </div>
                        <Row >
                            <Col md={5} className="colum1">
                                <Row>
                                    <div className='experi'>
                                        <img src={experience_vector} alt="" />
                                        <p>4-5 years</p>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='experi'>
                                        <img src={openings} alt="" />
                                        <p>1 openings</p>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='experi'>
                                        <img src={job_location} alt="" />
                                        <p>Bangalore/Bengaluru</p>
                                    </div>
                                </Row>
                            </Col>
                            <Col md={2}>
                                <div className='vertical_divider'>
                                    <img src={vertical_divider} alt="" />
                                </div>
                            </Col>
                            <Col md={5} className="colum2">
                                <Row>
                                    <div className='details'>
                                        <p className='type'>
                                            Industry type -
                                        </p>
                                        <p className='sector'> Banking</p>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='details'>
                                        <p className='type '>
                                            Department -
                                        </p>
                                        <p className='sector'>Others</p>
                                    </div>
                                </Row>
                                <Row>
                                    <div className='details'>
                                        <p className='type'>
                                            Employment type -
                                        </p>
                                        <p className='sector' >Full Time </p>
                                    </div>
                                </Row>
                            </Col>

                        </Row>
                    </Container>
                </section>
                <section className='job_desc'>
                    <Container>
                        <div className='jobs_subheading'>
                            <p>Job Descriptions</p>
                        </div>
                        <Row>
                            <div className='job_description'>
                                <ul>
                                    <li>
                                        <p>We may automatically store certain information including but not limited to information about your web browser, IP address, cookies stored on your device and other information about you based upon your behaviour on the website.</p>
                                    </li>
                                    <li>
                                        <p>We use this information to do internal research on our users’ demographics, interests and behaviour to better understand, protect and serve our users. </p>
                                    </li>
                                    <li>
                                        <p>This information is compiled and analyzed on an aggregated basis.</p>
                                    </li>
                                    <li>
                                        <p>This information may include the URL that you just came from (whether this URL is on the website or not), which URL you next go to (whether this URL is on the website or not), your computer browser information, your IP address, and other information associated with your interaction with the website.</p>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                        <Row>
                            <div className='viewjobs'>
                                <button onClick={navigateToApplyJobPage}>Apply Job<img src={right_arrow} alt="" className='arrow' /></button>
                            </div>
                        </Row>
                    </Container>
                </section>
            </Typography>
            
            <Pagination count={4} page={page}
                onChange={handleChange} />
        </Box>
    </div>
    );
}
export default Paginationpage;