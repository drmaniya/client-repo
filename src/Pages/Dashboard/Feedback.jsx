import Button from "../Component/Button";
import TextArea from "../Component/TextArea";

export default function Feedback(){
	return(
		<div className="container mt-5 pt-5">
			<div className="row">
				<div className="col-lg-6 col-12">
				<h2>feedback</h2>
				</div>
				<div className="col-lg-6 col-12">
					<div className="row">
						<div className="col-12">
							<TextArea placeholder="Post Your Msg Here"/>
						</div>
						<div className="col-12">
							<Button label="Submit" primaryBtn/>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	)
}