import EventImg from '../Assets/event.jpg'
export default function Events(){
	return(
		<div className="container">
			<div className="row eventBg">
				<div className=" col-lg-8 col-12">
						<div>
							Show
						</div>
				</div>
				<div className=" col-lg-4 col-12">
						<div>
							Location
						</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-8 col-12">
					<div className="d-flex">
						<div>
							<img src={EventImg} alt="no-event"/>
						</div>
						<div>
							<p>IIJS 2021</p>
							<p>Dates 15TH - 19TH SEPTEMBER 2021</p>
						</div>

					</div>
				</div>
				<div className=" col-lg-4 col-12">
					<div>
						<p>
						BANGALORE INTERNATIONAL EXHIBITION CENTRE</p>

						<p>Hall No : 5</p>

						<p>Booth No : 5W025 II & 5X026 II	</p>
						
					</div>
				</div>
			</div>
		</div>
		
	)
}