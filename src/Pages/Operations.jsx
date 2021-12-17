import Slider from "react-slick";

export default function Operations(){
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: dots => (
		  <div
			style={{
			  backgroundColor: "#ddd",
			  borderRadius: "10px",
			  padding: "10px"
			}}
		  >
			<ul style={{ margin: "0px" }}> {dots} </ul>
		  </div>
		),
		customPaging: i => (
		  <div
			style={{
			  width: "30px",
			  color: "blue",
			  border: "1px blue solid"
			}}
		  >
			{i + 1}
		  </div>
		)
	  };
	return(
		<div className="container">
			<div className="row">
				<div className="col-12">
				<nav>
					<div class="nav nav-tabs" id="nav-tab" role="tablist">
						<button class="nav-link active" id="nav-intro-tab" data-bs-toggle="tab" data-bs-target="#nav-intro" type="button" role="tab" aria-controls="nav-intro" aria-selected="true">Introduction</button>
						<button class="nav-link" id="nav-training-tab" data-bs-toggle="tab" data-bs-target="#nav-training" type="button" role="tab" aria-controls="nav-training" aria-selected="false">Training</button>
						<button class="nav-link" id="nav-machine-tab" data-bs-toggle="tab" data-bs-target="#nav-machine" type="button" role="tab" aria-controls="nav-machine" aria-selected="false">Machineries</button>
					</div>
				</nav>
				<div class="tab-content" id="nav-tabContent">
						<div class="tab-pane fade show active" id="nav-intro" role="tabpanel" aria-labelledby="nav-intro-tab">
							<p>We started operations in Windhoek, Namibia in the year 2009 in a joint venture with Crystal Diamond Namibia.</p>
							<p>We are one of the few companies in the world to have sight allocations for our factory in Namibia. At all times our rough sourcing is determined by demand and informed by our sophisticated ERP system which can be accessed online from anywhere.</p>
							<p>We increased our purchases of Rough diamonds by more than 4 times since we started buying rough from NDTC. We could also secure additional Ex-plan purchases from NDTC (up to 53% of ITO value).</p>
							<p>Our manufacturing unit got successfully audited for BPP and Forevermark integrity and started profitably manufacturing Triple Excellent Round Diamonds.</p>
							<h3>Factory Strength</h3>
							<p>
							The unit has grown from its initial strength of eight workers and today has more than 100 employees. Initially a team of Indian experts spent time in Namibia helping to train the local workforce. The company, now known as Ankit Gems Namibia (Pty) Ltd, is seeking to further enhance its operations and develop the skills of the most competent and committed workers who could then provide leadership to other new local recruits. Besides the basics, they learnt the art of using computers for planning and processing the stones at each step.
							</p>



						</div>
						<div class="tab-pane fade" id="nav-training" role="tabpanel" aria-labelledby="nav-training-tab">

							<p>
							Initially few individuals were selected from among the employees of the company’s Namibia plant and brought to India to familiarise them with the entire manufacturing process and enhance their skills in cutting and polishing. The aim was to develop them as senior managers who will lead the workforce at the company’s manufacturing operations in Namibia. These employees then trained the other employees at Namibia factory with the help of our well experienced Surat factory employees who were specially sent to Namibia from India to provide the training and knowledge.
							</p>
						</div>
						<div class="tab-pane fade" id="nav-machine" role="tabpanel" aria-labelledby="nav-machine-tab">
							<p>Our Namibia Factory is equipped with all the cutting edge technologies. we are the only Indian company to have Galaxy™ 1000 machine at our Namibia factory. Below are same of the latest machinery we have in our factory in Namibia.</p>
							<p>The Galaxy™ 1000 is the world-leading product for the fully automated detection and mapping of internal features in rough diamonds. The Galaxy™ 1000 can scan most rough diamonds and accurately maps all the inclusions in the diamond regardless of their type, size, and location. This unique process is performed quickly and automatically without the need for any “windows” being opened or other pre-processing of the rough stone.
							</p>
								<p>Unlike alternative techniques, this revolutionary system operates virtually independent of the operators’ skill. It is designed to directly output its data to the Advisor™ – Sarine’s rough planning software, so as to confidently enable true optimization of the value of the polished stone, based on all the relevant C’s, including, for the first time ever, the Clarity.</p>
						</div>
				</div>
				</div>
				<div className="col-lg-12">
				<div className="pt-5 pb-5">
					<Slider {...settings}>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
					<div>
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div>
					</Slider>
				</div>
				</div>
			</div>
		</div>
	)
}