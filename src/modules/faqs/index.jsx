import React, { useState } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import Publish from '../../components/publish';
import Footer from '../../components/footer';
import MainHeading from '../../components/MainHeading';
import SubHeading from '../../components/SubHeading';
import ReactPlayer from "react-player/youtube";
import FAQ_banner from "../../asserts/images/FAQ_banner.svg"
import down from "../../asserts/images/down-chevron.png"
import up from "../../asserts/images/up-chevron.png"
import down_gray from "../../asserts/images/down_gray.png"
import up_gray from "../../asserts/images/up_gray.png"
import "./style.css"
export default function Faqs() {
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)
    const [isActive6, setIsActive6] = useState(false)
    const [isActive7, setIsActive7] = useState(false)
    const [isActive8, setIsActive8] = useState(false)
    const [isActive9, setIsActive9] = useState(false)
    const [isActive10, setIsActive10] = useState(false)
    const [isActive11, setIsActive11] = useState(false)
    const [isActive12, setIsActive12] = useState(false)
    const [isActive13, setIsActive13] = useState(false)
    const [isActive14, setIsActive14] = useState(false)
    const [isActive15, setIsActive15] = useState(false)
    const [isActive16, setIsActive16] = useState(false)
    const [isActiveGroup, setIsActiveGroup] = useState(false)
    const [isActiveGroup1, setIsActiveGroup1] = useState(false)
    const [isActiveGroup2, setIsActiveGroup2] = useState(false)
    const [isActiveGroup3, setIsActiveGroup3] = useState(false)

    return (
        <React.Fragment>
            <main>
                <section className="FAQS">
                    <div className="FAQ_banner">
                        <p>FAQ's</p>
                        <img src={FAQ_banner} alt="" />

                    </div>
                </section>
                <Container>
                    <section className="section_head">
                        <div className="main_heading">
                            <p>Frequently asked questions</p>
                        </div>
                        <div className="under"></div>
                    </section>
                    <section>
                        <Container>
                            <Row>
                                <Col>
                                    <Card className="play_card">
                                        <div className='player-wrapper'>
                                            <ReactPlayer
                                                className='react-player'
                                                url='https://www.youtube.com/watch?v=ia7006AzOUY'
                                                width='100%'
                                                height='100%'
                                            />
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="Faqs">
                                        <div className='main_heading_Faqs'>
                                            <p>General</p>
                                        </div>
                                        <div className='drop-down'>
                                            <img src={isActiveGroup ? up_gray : down_gray} alt="" onClick={(e) => setIsActiveGroup(!isActiveGroup)} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {isActiveGroup && (
                                <div className="head_card">
                                    <div className="Faqs-top">
                                        <Col className='header_faq'>

                                            <div className='main_heading_Faqs'> <p>What is grozep and why was the name changed?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive ? up : down} alt="" onClick={(e) => setIsActive(!isActive)} />

                                            </div>
                                        </Col>
                                        {isActive && (
                                            <div className='sub_heading_Faqs'>
                                                <p>grozep is leading the charge in transforming India’s vast,
                                                    unorganised grocery landscape through cutting-edge
                                                    technology and innovation. grozep is India’s largest and most
                                                    convenient hyper-local delivery company, which enables you
                                                    to order grocery, fruits & vegetables, and other daily essential
                                                    products, directly via your mobile or web browser.</p>
                                                <p>
                                                    To know the reason why we changed our brand name from
                                                    Grofers to grozep, read this blog post.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className="header_faq">
                                            <div className='main_heading_Faqs'> <p>What kind of products does grozep sell?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive1 ? up : down} alt="" onClick={(e) => setIsActive1(!isActive1)} />
                                            </div>
                                        </Col>
                                        {isActive1 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>You can buy 7000+ products on grozep everything from
                                                    groceries to fresh fruits & vegetables, cakes and bakery items,
                                                    to meats & seafood, cosmetics, mobiles & accessories,
                                                    electronics (including Apple products), baby care products
                                                    and much more. We get it delivered at your doorstep in the
                                                    fastest and the safest way possible.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>What cities and locations does grozep operate in?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive2 ? up : down} alt="" onClick={(e) => setIsActive2(!isActive2)} />
                                            </div>
                                        </Col>
                                        {isActive2 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>grozep currently operates in Ahmedabad, Bengaluru,
                                                    Chandigarh, Chennai, Delhi, Faridabad, Ghaziabad, Gurugram,
                                                    Hyderabad, Jaipur, Jalandhar, Kanpur, Kolkata, Lucknow,
                                                    Ludhiana, Meerut, Mohali, Mumbai, Noida, Panchkula,
                                                    PuneVadodara and Zirakpur.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Card>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="Faqs">
                                        <div className='main_heading_Faqs'>
                                            <p>Miscellaneous</p>
                                        </div>
                                        <div className='drop-down'>
                                            <img src={isActiveGroup1 ? up_gray : down_gray} alt="" onClick={(e) => setIsActiveGroup1(!isActiveGroup1)} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {isActiveGroup1 && (
                                <div className="head_card">
                                    <div className="Faqs-top">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>Does grozep deliver cigarettes?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive3 ? up : down} alt="" onClick={(e) => setIsActive3(!isActive3)} />
                                            </div>
                                        </Col>
                                        {isActive3 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>Yes, grozep delivers cigarettes in select areas in all the 23
                                                    cities we are currently operating in. We are fully cognisant of
                                                    the harmful nature of smoking and hence, expect our
                                                    customers to be 18 or above (we are bound to report to the
                                                    authorities in case of transgression). We urge our customers
                                                    to ensure that their location is away from educational
                                                    institutes. We strongly advise against purchasing cigarettes on
                                                    behalf of minors.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>Does grozep deliver condoms?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive4 ? up : down} alt="" onClick={(e) => setIsActive4(!isActive4)} />
                                            </div>
                                        </Col>
                                        {isActive4 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>Yes, we deliver condoms in all the 23 cities we operate in.
                                                    Orders come with discreet packaging. Our customers’ privacy
                                                    is of utmost priority for us and we help them to shop in
                                                    confidence.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>Does grozep deliver 24 hours/all night?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive5 ? up : down} alt="" onClick={(e) => setIsActive5(!isActive5)} />
                                            </div>
                                        </Col>
                                        {isActive5 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>As of now, this service (delivery between 12 am to 6am) is
                                                    available in select areas in a few cities.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>Does grozep deliver ice cream?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive6 ? up : down} alt="" onClick={(e) => setIsActive6(!isActive6)} />
                                            </div>
                                        </Col>
                                        {isActive6 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>Yes, we deliver ice creams and frozen desserts in almost all
                                                    cities that we operate. We service delicious flavors of ice
                                                    creams and frozen desserts in small/family packs from Amul,
                                                    Kwality Walls, NIC and many more.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>How does grozep deliver in 10 minutes?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive7 ? up : down} alt="" onClick={(e) => setIsActive7(!isActive7)} />
                                            </div>
                                        </Col>
                                        {isActive7 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>Our tech enables our partners staff to pick and pack an order
                                                    within 2 minutes of the customer placing it. Our network of
                                                    partner stores are so widely spread across cities that we have
                                                    a store live almost every 2 kilometers. Read this blogpost to
                                                    know more.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>Do you take into consideration delivery partners’ safety?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive8 ? up : down} alt="" onClick={(e) => setIsActive8(!isActive8)} />
                                            </div>
                                        </Col>
                                        {isActive8 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>The average delivery speed for our fleet is 18kmph and the
                                                    average distance covered by our delivery partners is about
                                                    2km. This is possible only due to the efficiency of our systems
                                                    and cluster of stores, coupled with our in-house technology.
                                                    Our delivery partners connect the dots between the stores
                                                    and the customers in the safest way possible. Read this
                                                    blogpost to know more.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Card>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="Faqs">
                                        <div className='main_heading_Faqs'>
                                            <p>Delivery</p>
                                        </div>
                                        <div className='drop-down'>
                                            <img src={isActiveGroup2 ? up_gray : down_gray} alt="" onClick={(e) => setIsActiveGroup2(!isActiveGroup2)} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {isActiveGroup2 && (
                                <div className="head_card">
                                    <div className="Faqs-top">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>Do you charge for delivery?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive9 ? up : down} alt="" onClick={(e) => setIsActive9(!isActive9)} />
                                            </div>
                                        </Col>
                                        {isActive9 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>Every store has its own delivery charges. The delivery charges
                                                    are mentioned on the app and web at the checkout page.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>What are your delivery timings?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive10 ? up : down} alt="" onClick={(e) => setIsActive10(!isActive10)} />
                                            </div>
                                        </Col>
                                        {isActive10 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>The delivery timings are different for different cities and
                                                    localities. In some locations, our deliveries begin from 6 AM
                                                    and the last delivery is completed by 11 PM. But we also deliver
                                                    between 12 AM and 6 AM in in select areas in Bengaluru,
                                                    Chandigarh, Delhi, Faridabad, Ghaziabad, Gurugram,
                                                    Jalandhar, Kolkata, Lucknow, Ludhiana, Mumbai, Noida,
                                                    Panchkula and Zirakpur.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>Can I change the delivery address of my order?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive11 ? up : down} alt="" onClick={(e) => setIsActive11(!isActive11)} />
                                            </div>
                                        </Col>
                                        {isActive11 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>At this time, we do not offer this option. You can, however,
                                                    cancel your order and reorder from a different locality.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>What if I don’t receive my order by the scheduled time?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive12 ? up : down} alt="" onClick={(e) => setIsActive12(!isActive12)} />
                                            </div>
                                        </Col>
                                        {isActive12 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>Over 70% of our deliveries are honoured within the 15 minute
                                                    timelines. On rare occasions, due to unforeseen
                                                    circumstances, your order might be delayed. In case of
                                                    imminent delay, our customer support executive will keep you
                                                    updated about the delivery time of your order</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Card>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="Faqs">
                                        <div className='main_heading_Faqs'>
                                            <p>Cancellation and return</p>
                                        </div>
                                        <div className='drop-down'>
                                            <img src={isActiveGroup3 ? up_gray : down_gray} alt="" onClick={(e) => setIsActiveGroup3(!isActiveGroup3)} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {isActiveGroup3 && (
                                <div className="head_card">
                                    <div className="Faqs-top">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>How can I cancel my order?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive13 ? up : down} alt="" onClick={(e) => setIsActive13(!isActive13)} />
                                            </div>
                                        </Col>
                                        {isActive13 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>grozep provides easy and hassle-free cancellation. You can
                                                    cancel your order via the app or web on the order details page
                                                    while it is still in the packing stage.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>What If I want to return something?</p>
                                            </div>

                                            <div className='drop-down'>
                                                <img src={isActive14 ? up : down} alt="" onClick={(e) => setIsActive14(!isActive14)} />
                                            </div>
                                        </Col>
                                        {isActive14 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>The timeline to raise a complaint depends on the category in
                                                    which the product falls into: Consumable Perishables meats,
                                                    seafood, frozen food and FnV, dairy category including milk,
                                                    eggs and bread, etc. (7 days); Consumable Non-perishables
                                                    groceries, etc. (7 days); General Merchandise Electronics,
                                                    home furnishings, fashion, etc. (7 days); Freebie missing issue
                                                    (7 days); Entire wrong order and MDND (7 days); and Other
                                                    issues insect, fungus or foreign material, expired products,
                                                    etc. (no restriction).</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>Can I reschedule my order?</p>
                                            </div>

                                            <div className='drop-down'>
                                                <img src={isActive15 ? up : down} alt="" onClick={(e) => setIsActive15(!isActive15)} />
                                            </div>
                                        </Col>
                                        {isActive15 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>We deliver your order in 10 minutes during all times the store in
                                                    your area is operational. Hence we request you to order when
                                                    you are available. It is not possible to reschedule an order.</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="Faqs_border">
                                        <Col className='header_faq'>
                                            <div className='main_heading_Faqs'> <p>What if I have a complaint regarding my order?</p>
                                            </div>
                                            <div className='drop-down'>
                                                <img src={isActive16 ? up : down} alt="" onClick={(e) => setIsActive16(!isActive16)} />
                                            </div>
                                        </Col>
                                        {isActive16 && (
                                            <div className='sub_heading_Faqs'>
                                                <p>Please reach out to us via the Customer Support section on
                                                    the app/web. Our customer care team is more than happy to
                                                    help</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Card>
                    </section>
                </Container>
                <section>
                    <Publish />
                </section>
                <section>
                    <Footer />
                </section>
            </main>
        </React.Fragment >
    )
}
