import Button from './Component/Button';
import InputField from "./Component/Input";
import TextArea from "./Component/TextArea";

export default function ContactUs(){
	return(
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-12">
					<ul>
						<li><label>IN</label></li>
					<li>MUMBAI</li>
					<li>E TOWER - EE 6011 / EC 6100, BHARAT DIAMOND BOURSE, BKC, BANDRA (EAST), MUMBAI - 400051.</li>
					<li>P : +91 22 43548800 (TILL) 43548898</li>
					<li>F : +91 22 23632344</li>
					<li>E : INFO@ANKITGEMS.COM</li>
					<li>W : WWW.ANKITGEMS.COM</li>
					</ul>
				</div>
				<div className="col-12 text-center mb-5">
					We believe each customer is unique, hence we customize your needs...Need help??
				</div>
				<div className="col-lg-4 col-12">
						<InputField placeholder="Name"/>
				</div>
				<div className="col-lg-4 col-12">
					<InputField placeholder="Company Name"/>
					
				</div>
				<div className="col-lg-4 col-12">
					<InputField placeholder="Contact Person"/>
					
				</div>
				<div className="col-lg-4 col-12">
					<InputField placeholder="Email"/>
					
				</div>
				<div className="col-lg-4 col-12">
					<InputField placeholder="Phone"/>
					
				</div>
				<div className="col-lg-4 col-12">
					<InputField placeholder="Fax"/>
					
				</div>
				<div className="col-lg-6 col-12">
					<TextArea placeholder="Address"/>
				</div>
				<div className="col-lg-6 col-12">
					<TextArea placeholder="Message"/>
					
				</div>
				<div className="col-12">
					<div className="d-flex justify-space-end">
						<Button primaryBtn label="Submit"/>
											</div>
				</div>
			</div>
		</div>
	)
}