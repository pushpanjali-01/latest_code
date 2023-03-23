import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from "../../asserts/images/profile.svg"
import double_quotes from "../../asserts/images/double_quotes.svg"
import React from 'react'
import "./style.css"
const Carousal = ({ images }) => {
	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: false,
		autoplaySpeed: 2000,
	};
	return (
		<>
			<div className="tag">
			</div>
			<div className="imgslider">
				<Slider {...settings}>
					<div className="Review">
						<div className="Image_profile">
							<img src={profile} alt="" />
						</div>
						<div className="Content">
							<div className='riview-description'>
								<p>We are immesely satisfied with the grozep service has provided us. We are now exclusive with grozep and look forward to more growth in our delivery business through their online orders</p>
							</div>
							<div className="reviewer_name">
								<p>Anjelica Huston</p>
							</div>
						</div>
						<div className="Quotes">
							<img src={double_quotes} alt="" />
						</div>
					</div>
					<div className="Review">
						<div className="Image_profile">
							<img src={profile} alt="" />
						</div>
						<div className="Content">
							<div className='riview-description'>
								<p>We are immesely satisfied with the grozep service has provided us. We are now exclusive with grozep and look forward to more growth in our delivery business through their online orders</p>
							</div>
							<div className="reviewer_name">
								<p>Anjelica Huston</p>
							</div>
						</div>
						<div className="Quotes">
							<img src={double_quotes} alt="" />
						</div>
					</div>
				</Slider>
			</div>
		</>
	)
}
export default Carousal;
