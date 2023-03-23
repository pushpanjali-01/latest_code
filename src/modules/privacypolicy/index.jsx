import React from 'react'
import './style.css'
import { Container, Row, Col, Card } from "react-bootstrap";
import Privacy_banner from "../../asserts/images/Privacy_banner.svg"
import Publish from '../../components/publish';
import Footer from '../../components/footer';
export default function Privacyandpolicy() {
    return (
        <React.Fragment>
            <main>
                <section className="privacy">
                    <div className="privacy_banner">
                        <p>Privacy Policies</p>
                        <img src={Privacy_banner} alt="" />
                    </div>
                </section>
                <section className="section_privacy">
                    <Container>
                        <div className='privacy-section'>
                            <div className="section-heading-dark">
                                <p>
                                    Privacy Policies
                                </p>
                            </div>
                            <div className="under"></div>
                            <div className="section-sub-heading-light-aboutUs">
                                <p>
                                    We i.e. "grozep" (formerly known as Grofers India Private Limited) (“Company”), are
                                    committed to protecting the privacy and security of your personal information. Your
                                    privacy is important to us and maintaining your trust is paramount.This privacy policy
                                    explains how we collect, use, process and disclose information about you. By using our
                                    website/ app/ platform and affiliated services, you consent to the terms of our privacy
                                    policy (“Privacy Policy”) in addition to our ‘Terms of Use.’ We encourage you to read
                                    this privacy policy to understand the collection, use, and disclosure of your information
                                    from time to time, to keep yourself updated with the changes and updates that we
                                    make to this policy.This privacy policy describes our privacy practices for all websites,
                                    products and services that are linked to it. However this policy does not apply to those
                                    affiliates and partners that have their own privacy policy. In such situations, we
                                    recommend that you read the privacy policy on the applicable site.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="section_privacy">
                    <Container>
                        <div  className='privacy-section'>
                            <div className="section-heading-dark">
                                <p>
                                    The collection, storage and use of information related to you
                                </p>
                            </div>
                            <div className="under"></div>
                            <div className="section-sub-heading-light-aboutUs">
                                <p>
                                    We may automatically store certain information including but not limited to
                                    information about your web browser, IP address, cookies stored on your device and
                                    other information about you based upon your behaviour on the website. We use this
                                    information to do internal research on our users’ demographics, interests and
                                    behaviour to better understand, protect and serve our users. This information is
                                    compiled and analyzed on an aggregated basis. This information may include the URL
                                    that you just came from (whether this URL is on the website or not), which URL you
                                    next go to (whether this URL is on the website or not), your computer browser
                                    information, your IP address, and other information associated with your interaction
                                    with the website.
                                </p>
                                <p>
                                    We may also share your Mobile IP/Device IP with third party(ies) and to the best of our
                                    knowledge, be-life and representations given to us by these third party(ies) this
                                    information is not stored by them.
                                </p>
                                <p>
                                    We also collect and store personal information provided by you from time to time on
                                    the website/app. We only collect and use such information from you that we consider
                                    necessary for achieving a seamless, efficient and safe experience, customized to your
                                    needs including:
                                </p>
                                <ul>
                                    <li>
                                        To enable the provision of services opted by youÌ
                                    </li>
                                    <li>
                                        To communicate necessary account and product/service related information from
                                        time to timeÌ
                                    </li>
                                    <li>
                                        To allow you to receive quality customer care servicesÌ
                                    </li>
                                    <li>
                                        To undertake necessary fraud and money laundering prevention checks, and
                                        comply with the highest security standardsÌ
                                    </li>
                                    <li>
                                        To comply with applicable laws, rules and regulations; anã
                                    </li>
                                    <li>
                                        To provide you with information and offers on products and services, on updates,
                                        on promotions, on related, affiliated or associated service providers and partners,
                                        that we believe would be of interest to you
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="section_privacy">
                    <Container>
                        <div  className='privacy-section'>
                            <div className="section-heading-dark">
                                <p>
                                    Changes to the privacy policy
                                </p>
                            </div>
                            <div className="under"></div>
                            <div className="section-sub-heading-light-aboutUs">
                                <p>
                                    grozep reserves the right to change this policy from time to time. Any changes shall
                                    be effective immediately upon the posting of the revised Privacy Policy. We
                                    encourage you to periodically review this page for the latest information on our
                                    privacy practices
                                </p>
                            </div>
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
        </React.Fragment>
    )
}
