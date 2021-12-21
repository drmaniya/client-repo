import Img1 from '../Assets/lay1.png';
import InputField  from './Component/Input';
import Button from './Component/Button';
import DropDown  from './Component/DropDown';
import TextArea from './Component/TextArea';

export default function Register(){
	return(
		<div className="container register">
			<div className="row">
				<div className="col-lg-2 col-sm-4 col-12">
					<div className="RegisterImg">
					<img src={Img1} alt="no-register"/>

					</div>
				</div>
				<div className="col-lg-10 col-sm-8 col-12 registerWrapper">
					<p className="description">Thank You for visiting shivanigems.com.</p>
					<p className="description">You have to be a registered member in order to access the Diamond and Jewelry Section. Please fill in the registration form below. You will be notified by email once your registration has been approved by the Webmaster.</p>
					<p className="description mt-5">Fields marked (*) are mandatory.</p>
					<div className="row">
						<div className="col-lg-7">
							<div className="row">
								<div className="col-lg-6 col-12">
									<InputField label="Name" required error="Invalid Password"/>
								</div>
								<div className="col-lg-6 col-12">
									<InputField label="Company" required error="Invalid Password"/>
								</div>
								<div className="col-12">
									<TextArea label="Address"/>
								</div>
								<div className="col-lg-6 col-12">
									<InputField label="Phone" required error="Invalid Password"/>
								</div>
								<div className="col-lg-6 col-12">
									<InputField label="City" required error="Invalid Password"/>
								</div>
								<div className="col-lg-6 col-12">
									<InputField label="State" required error="Invalid Password"/>
								</div>
								<div className="col-lg-6 col-12">
									<InputField label="ZIP/PIN Code" required error="Invalid Password"/>
								</div>
								<div className="col-lg-6 col-12">
								<DropDown label=" Country" menuList={[
															'India','Pakistan'
														]}/>
								</div>
							</div>
						</div>
						<div className="col-12 mt-5 mb-5">
							<label>Account Information on shivanigems.com</label>
						</div>
						<div className="col-lg-4 col-12">
							<InputField label="Username"/>
						</div>
						<div className="col-lg-4 col-12">
							<InputField label="Password"/>
						</div>
						<div className="col-lg-4 col-12">
							<InputField label="Confirm Password"/>
						</div>
						<div className="col-lg-4">
							<label>Enter Verification Code</label>
						</div>
						<div className="col-lg-8 col-12 d-flex align-items-center">
							<div className="captcha">
								8XcYf
							</div>
							<div className="ms-3">
								Can't Read? <Button linkBtn label="Refresh" />
							</div>
						</div>
						<div className="col-12 mt-5">
							<Button label="Register" primaryBtn/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}