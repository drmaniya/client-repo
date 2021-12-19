import Img1 from '../Assets/lay1.png';

export default function HomePage(){
	return(
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-12">
					<h4>Ankit Gems is a
						company built
						firmly on traditions and values.</h4>
				</div>	
				<div className="col-lg-6 col-12">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum cum, maxime, eveniet officiis at laboriosam qui molestiae nisi itaque, error vero esse? Reprehenderit pariatur excepturi natus modi, itaque cumque!</p>
				</div>
				<div className="col-lg-6 col-12">
					<h4>Implementation</h4>
				</div>	
				<div className="col-lg-6 col-12">
					<img src={Img1} alt="no-img-found"/>
				</div>
				<div className="col-12">
					<h4>Partnership companies</h4>
				</div>	
				<div className="col-xl-3 col-lg-4 col-12">
					<img src={Img1} alt="no-img-found"/>
				</div>
				<div className="col-xl-3 col-lg-4 col-12">
					<img src={Img1} alt="no-img-found"/>
				</div>
				<div className="col-xl-3 col-lg-4 col-12">
					<img src={Img1} alt="no-img-found"/>
				</div>
				<div className="col-xl-3 col-lg-4 col-12">
					<img src={Img1} alt="no-img-found"/>
				</div>
			</div>
		</div>
	)
}