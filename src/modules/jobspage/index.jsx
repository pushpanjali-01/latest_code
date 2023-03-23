import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Pagination } from 'react-bootstrap'
import "./style.css"
import jobs_banner from "../../asserts/images/jobs_banner.svg"
import openings from "../../asserts/images/openings.svg"
import job_location from "../../asserts/images/job_location.svg"
import vertical_divider from "../../asserts/images/vertical_divider.svg"
import right_arrow from "../../asserts/images/right_arrow.svg"
import experience_vector from "../../asserts/images/experience_vector.svg"
import Publish from '../../components/publish';
import Footer from '../../components/footer';
import { useHistory } from 'react-router-dom';
import Paginationpage from '../../components/pagination';
import Carousel, { CarouselItem } from "../../components/carousel"

export default function Jobspage() {
    return (
        <main>
            <section className='jobs-banner'>
                <div className='banner-image-jobpage'>
                    <img src={jobs_banner} alt="" />
                </div>
            </section>
            <section>
                <Paginationpage />
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
