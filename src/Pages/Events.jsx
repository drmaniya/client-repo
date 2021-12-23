import EventImg from '../Assets/event.jpg'
export default function Events(){
	return(
		<div className="container pt-5 pb-5">
			<div className="row eventBg">
				<div className=" col-lg-8 col-12">
						<div className="black">
							Show
						</div>
				</div>
				<div className=" col-lg-4 col-12">
						<div className="black">
							Location
						</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-8 col-12">
					<div className="d-flex mt-5">
						<div className="eventImg">
							<img src={EventImg} alt="no-event"/>
						</div>
						<div className="ms-2">
							<p className="fw-bold mb-1">IIJS 2021</p>
							<p className="mb-0 fw-bold">Dates : <span className="fw-normal">15TH - 19TH SEPTEMBER 2021</span></p>
						</div>

					</div>
				</div>
				<div className=" col-lg-4 col-12">
					<div className="mt-5">
						<p className="mb-1">BANGALORE INTERNATIONAL </p>
						<p className="mb-1">EXHIBITION CENTRE</p>
						<p className="mb-1"><span className="fw-bold">Hall No</span> : 5</p>

						<p><span className="fw-bold">Booth No</span> : 5W025 II & 5X026 II	</p>
						
					</div>
				</div>
			</div>
		</div>
		
	)
}