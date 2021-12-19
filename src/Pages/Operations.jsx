import Slider from "react-slick";
import Img1 from '../Assets/lay1.png';
import Img2 from '../Assets/lay2.png';
import Img3 from '../Assets/lay3.png';

export default function Operations(){
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
				<div className="col-12">
				<nav>
					<div className="nav nav-tabs operation-tab" id="nav-tab" role="tablist">
						<button className="nav-link active" id="nav-intro-tab" data-bs-toggle="tab" data-bs-target="#nav-intro" type="button" role="tab" aria-controls="nav-intro" aria-selected="true">Introduction</button>
						<button className="nav-link" id="nav-training-tab" data-bs-toggle="tab" data-bs-target="#nav-training" type="button" role="tab" aria-controls="nav-training" aria-selected="false">Training</button>
						<button className="nav-link" id="nav-machine-tab" data-bs-toggle="tab" data-bs-target="#nav-machine" type="button" role="tab" aria-controls="nav-machine" aria-selected="false">Machineries</button>
					</div>
				</nav>
				<div className="tab-content" id="nav-tabContent">
						<div className="tab-pane fade show mt-5 active" id="nav-intro" role="tabpanel" aria-labelledby="nav-intro-tab">
							<p className="description">We started operations in Windhoek, Namibia in the year 2009 in a joint venture with Crystal Diamond Namibia.</p>
							<p className="description">We are one of the few companies in the world to have sight allocations for our factory in Namibia. At all times our rough sourcing is determined by demand and informed by our sophisticated ERP system which can be accessed online from anywhere.</p>
							<p className="description">We increased our purchases of Rough diamonds by more than 4 times since we started buying rough from NDTC. We could also secure additional Ex-plan purchases from NDTC (up to 53% of ITO value).</p>
							<p className="description">Our manufacturing unit got successfully audited for BPP and Forevermark integrity and started profitably manufacturing Triple Excellent Round Diamonds.</p>
							<h3 className="fw-bold mt-5 mb-5">Factory Strength</h3>
							<p className="description">
							The unit has grown from its initial strength of eight workers and today has more than 100 employees. Initially a team of Indian experts spent time in Namibia helping to train the local workforce. The company, now known as Ankit Gems Namibia (Pty) Ltd, is seeking to further enhance its operations and develop the skills of the most competent and committed workers who could then provide leadership to other new local recruits. Besides the basics, they learnt the art of using computers for planning and processing the stones at each step.
							</p>
						</div>
						<div className="tab-pane fade mt-5" id="nav-training" role="tabpanel" aria-labelledby="nav-training-tab">

							<p className="description">
							Initially few individuals were selected from among the employees of the company’s Namibia plant and brought to India to familiarise them with the entire manufacturing process and enhance their skills in cutting and polishing. The aim was to develop them as senior managers who will lead the workforce at the company’s manufacturing operations in Namibia. These employees then trained the other employees at Namibia factory with the help of our well experienced Surat factory employees who were specially sent to Namibia from India to provide the training and knowledge.
							</p>
						</div>
						<div className="tab-pane fade mt-5" id="nav-machine" role="tabpanel" aria-labelledby="nav-machine-tab">
							<p className="description">Our Namibia Factory is equipped with all the cutting edge technologies. we are the only Indian company to have Galaxy™ 1000 machine at our Namibia factory. Below are same of the latest machinery we have in our factory in Namibia.</p>
							<p className="description">The Galaxy™ 1000 is the world-leading product for the fully automated detection and mapping of internal features in rough diamonds. The Galaxy™ 1000 can scan most rough diamonds and accurately maps all the inclusions in the diamond regardless of their type, size, and location. This unique process is performed quickly and automatically without the need for any “windows” being opened or other pre-processing of the rough stone.
							</p>
								<p className="description">Unlike alternative techniques, this revolutionary system operates virtually independent of the operators’ skill. It is designed to directly output its data to the Advisor™ – Sarine’s rough planning software, so as to confidently enable true optimization of the value of the polished stone, based on all the relevant C’s, including, for the first time ever, the Clarity.</p>
						</div>
				</div>
				</div>
				<div className="col-lg-12">
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
			</div>
		</div>
	)
}