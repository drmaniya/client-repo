import Img1 from '../Assets/lay1.png';

export default function HomePage(){
	return(
		<div className="container mt-5">
			<div className="row">
				<div className="col-lg-6 col-12">
					<h4 className="fs-2">Ankit Gems is a
						company built
						firmly on traditions and values.</h4>
				</div>	
				<div className="col-lg-6 col-12">
					<p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum cum, maxime, eveniet officiis at laboriosam qui molestiae nisi itaque, error vero esse? Reprehenderit pariatur excepturi natus modi, itaque cumque!</p>
				</div>
			</div>
			<div className="row mt-5 mb-5">
				<div className="col-lg-6 col-12 d-flex flex-column justify-content-center">
					<h4 className="fs-2">Implementation</h4>
					<p className="description">Only careful and precise implementation prevents an idea from shattering - so that it can reach its full potential.</p>
				</div>	
				<div className="col-lg-6 col-12">
					<img src={Img1} alt="no-img-found"/>
				</div>
				<div className="col-12 mb-5 mt-5">
					<h4 className="fs-2">Partnership companies</h4>
				</div>	
				<div className="col-xl-3 col-lg-4 col-12 partnerImg">
					<img src={Img1} alt="no-img-found"/>
				</div>
				<div className="col-xl-3 col-lg-4 col-12 partnerImg">
					<img src={Img1} alt="no-img-found"/>
				</div>
				<div className="col-xl-3 col-lg-4 col-12 partnerImg">
					<img src={Img1} alt="no-img-found"/>
				</div>
				<div className="col-xl-3 col-lg-4 col-12 partnerImg">
					<img src={Img1} alt="no-img-found"/>
				</div>
			</div>
		</div>
	)
}