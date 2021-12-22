import Slider from "react-slick";
import Img1 from '../Assets/lay1.png';
import Img2 from '../Assets/lay2.png';
import Img3 from '../Assets/lay3.png';

export default function Layout(){
	const settings = {
		
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	  customPaging: i => (
		<div
		  style={{
			width: "80px",
			color: "blue",
			height:'80px',
		  }}
		>
			 <img src={require(`../Assets/lay${i+1}.png`)} alt="no-img" style={{height:'100%',width:'100%'}}/>
		</div>
	  )
	};
	return(
		<div className="container pt-5 pb-5">
			<div className="row">
				<div className="col-lg-5 col-12">
				<div className="pt-5 pb-5">
					<Slider {...settings}>
					<div>
						<img src={Img1} alt="img-1"/>
					</div>
					<div>
					<img src={Img2} alt="img-2"/>
					</div>
					<div>
					<img src={Img3} alt="img-3"/>
					</div>
					</Slider>
				</div>
				</div>
				<div className="col-lg-7 col-12 d-flex flex-column justify-content-center">
					<h3 className="fw-bold mb-3">Diamond Layouts</h3>
						<p className="description">We have introduced the 'Diamond Layouts' to assist our customers in choosing diamonds as well as envisioning jewellery design layouts for the same.</p>
						<p className="description">This is a combination of designer and elegant jewelry set outlines for the finest quality solitaires in the world, and customers can use these to base their design ideas on, as these can be easily customized according to individual tastes and preferences.</p>
				</div>
			</div>
		</div>
	)
}